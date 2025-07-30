import { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e) => {
    e.preventDefault();
    
    if (!question.trim()) return;

    // Add user message to chat
    const userMessage = { type: "user", text: question };
    setMessages([...messages, userMessage]);
    setIsLoading(true);
    
    try {
      const res = await axios.get(`http://localhost:8000/chatbot?q=${encodeURIComponent(question)}`);
      
      // Add bot response to chat
      const botMessage = { type: "bot", text: res.data.answer };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      const errorMessage = { type: "bot", text: "Terjadi kesalahan. Coba lagi nanti." };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    }
    
    setQuestion("");
    setIsLoading(false);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: 1000,
    }}>
      {isOpen ? (
        <div style={{
          width: "320px",
          height: "450px",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          border: "1px solid #e5e7eb"
        }}>
          {/* Chat Header */}
          <div style={{
            background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
            color: "white",
            padding: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "12px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}>
                <span style={{ color: "#2563eb", fontWeight: "bold", fontSize: "18px" }}>?</span>
              </div>
              <div>
                <span style={{ fontWeight: "600", fontSize: "16px" }}>Tegar Chatbot</span>
                <div style={{ fontSize: "12px", opacity: "0.9" }}>Online</div>
              </div>
            </div>
            <button 
              onClick={toggleChat} 
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "18px",
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.2s"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.3)"}
              onMouseOut={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.2)"}
            >
              ✕
            </button>
          </div>
          
          {/* Chat Messages */}
          <div style={{
            flex: 1,
            padding: "16px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            backgroundColor: "#f8fafc"
          }}>
            {messages.length === 0 && (
              <div style={{
                textAlign: "center", 
                color: "#64748b", 
                margin: "auto 0",
                padding: "20px",
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                border: "1px solid #e2e8f0"
              }}>
                <div style={{ fontSize: "16px", fontWeight: "500", marginBottom: "8px" }}>
                  👋 Selamat datang!
                </div>
                <div style={{ fontSize: "14px" }}>
                  Silakan ajukan pertanyaan Anda di bawah ini.
                </div>
              </div>
            )}
            
            {messages.map((msg, index) => (
              <div 
                key={index} 
                style={{
                  alignSelf: msg.type === "user" ? "flex-end" : "flex-start",
                  backgroundColor: msg.type === "user" ? "#2563eb" : "#ffffff",
                  color: msg.type === "user" ? "#ffffff" : "#1f2937",
                  padding: "12px 16px",
                  borderRadius: msg.type === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                  maxWidth: "85%",
                  wordBreak: "break-word",
                  fontSize: "14px",
                  lineHeight: "1.4",
                  boxShadow: msg.type === "user" 
                    ? "0 2px 8px rgba(37, 99, 235, 0.2)" 
                    : "0 2px 8px rgba(0,0,0,0.06)",
                  border: msg.type === "bot" ? "1px solid #e2e8f0" : "none"
                }}
              >
                {msg.text.split("\n").map((line, idx) => (
  <span key={idx}>
    {line}
    <br />
  </span>
))}

              </div>
            ))}
            
            {isLoading && (
              <div style={{
                alignSelf: "flex-start",
                backgroundColor: "#ffffff",
                padding: "12px 16px",
                borderRadius: "18px 18px 18px 4px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
              }}>
                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  <div style={{ 
                    width: "8px", 
                    height: "8px", 
                    borderRadius: "50%", 
                    backgroundColor: "#64748b", 
                    animation: "pulse 1.4s infinite" 
                  }}></div>
                  <div style={{ 
                    width: "8px", 
                    height: "8px", 
                    borderRadius: "50%", 
                    backgroundColor: "#64748b", 
                    animation: "pulse 1.4s infinite 0.2s" 
                  }}></div>
                  <div style={{ 
                    width: "8px", 
                    height: "8px", 
                    borderRadius: "50%", 
                    backgroundColor: "#64748b", 
                    animation: "pulse 1.4s infinite 0.4s" 
                  }}></div>
                  <span style={{ color: "#64748b", fontSize: "12px", marginLeft: "8px" }}>
                    Mengetik...
                  </span>
                </div>
              </div>
            )}
          </div>
          
          {/* Chat Input */}
          <div style={{
            display: "flex",
            padding: "16px",
            backgroundColor: "#ffffff",
            borderTop: "1px solid #e2e8f0",
            gap: "12px"
          }}>
            <input
              type="text"
              placeholder="Ketik pesan Anda..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleAsk(e);
                }
              }}
              style={{
                flex: 1,
                padding: "12px 16px",
                border: "2px solid #e2e8f0",
                borderRadius: "24px",
                outline: "none",
                fontSize: "14px",
                backgroundColor: "#f8fafc",
                color: "#1f2937",
                transition: "border-color 0.2s, background-color 0.2s"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#2563eb";
                e.target.style.backgroundColor = "#ffffff";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0";
                e.target.style.backgroundColor = "#f8fafc";
              }}
            />
            <button 
              onClick={handleAsk}
              disabled={!question.trim() || isLoading}
              style={{
                backgroundColor: question.trim() && !isLoading ? "#2563eb" : "#94a3b8",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                cursor: question.trim() && !isLoading ? "pointer" : "not-allowed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: "bold",
                transition: "all 0.2s",
                boxShadow: question.trim() && !isLoading ? "0 2px 8px rgba(37, 99, 235, 0.3)" : "none"
              }}
              onMouseOver={(e) => {
                if (question.trim() && !isLoading) {
                  e.target.style.backgroundColor = "#1d4ed8";
                  e.target.style.transform = "scale(1.05)";
                }
              }}
              onMouseOut={(e) => {
                if (question.trim() && !isLoading) {
                  e.target.style.backgroundColor = "#2563eb";
                  e.target.style.transform = "scale(1)";
                }
              }}
            >
              {isLoading ? "⏳" : "↑"}
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={toggleChat}
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
            color: "white",
            border: "none",
            boxShadow: "0 4px 20px rgba(37, 99, 235, 0.4), 0 2px 8px rgba(0,0,0,0.1)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            transition: "all 0.3s ease",
            position: "relative"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 6px 25px rgba(37, 99, 235, 0.5), 0 4px 12px rgba(0,0,0,0.15)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 20px rgba(37, 99, 235, 0.4), 0 2px 8px rgba(0,0,0,0.1)";
          }}
        >
          💬
          <div style={{
            position: "absolute",
            top: "-2px",
            right: "-2px",
            width: "18px",
            height: "18px",
            backgroundColor: "#10b981",
            borderRadius: "50%",
            border: "2px solid white",
            animation: "pulse-dot 2s infinite"
          }}></div>
        </button>
      )}
      
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse-dot {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Chatbot;