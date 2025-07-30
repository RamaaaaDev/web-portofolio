import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import '../App.css'
import '../styles/Home.css'
import '../static/Home.js'
import resume from '../cv.pdf'
import heroimg from '../image/hero-profile.jpg'
import aboutimg from '../image/about-photo.jpg'
// import foto portfolio
import img1 from '../image/portfolio/1.png'
import img2 from '../image/portfolio/2.png'
import img3 from '../image/portfolio/3.png'
import img4 from '../image/portfolio/cooming-soon.png'
import { useState } from 'react'
import Chatbot from '../components/Chatbot.jsx'

const portfolioItems = [
  { id: 1, category: "web", title: "Chatbot FAQ", img: img1, description: "This chatbot is designed to answer frequently asked questions from prospective or new students." },
  { id: 2, category: "web", title: "Web KMS", img: img2, description: "This is a Knowledge Management System website designed to share knowledge, both tacit and explicit knowledge, which can be accessed by students and lecturers."},
  { id: 3, category: "mobile developer", title: "Finanace with AI", img: img4, description: "A Flutter-based application that leverages AI and Machine Learning to assist users in managing their personal finances, specifically targeting lower- and middle-income individuals with limited earnings."},
  { id: 4, category: "AI", title: "Predictive Machine Learning", img: img3, description: "This is a machine learning model that identifies and predicts whether the uploaded image is Rock, Paper, or Scissors."}
];

function Home() {
  const [activeTab, setActiveTab] = useState('skills'); // tab for about 
  const [filter, setFilter] = useState('all')

  const renderContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <div className="content">
  <div className="text-box">
    <p>AI Engineer - Entry Level</p>
    <span>Learning and developing AI solutions by building on existing models and algorithms.</span>
  </div>
  <div className="text-box">
    <p>Robotic Programming with Arduino - Entry Level</p>
    <span>Enhancing existing code to optimize automation and functionality. references.</span>
  </div>
  <div className="text-box">
    <p>Fullstack Web Developer - Entry Level</p>
    <span>Building custom web applications with best practices and external references.</span>
  </div>
  <div className="text-box">
    <p>Mobile Developer - Entry Level</p>
    <span>Creating and maintaining mobile applications with a focus on performance and usability.</span>
  </div>
</div>

        );
      case 'participation':
        return (
          <div className="content">
            <div className="text-box">
              <p>{"Participation Kontes Robot SAR Indonesia (KRSRI)"}</p>
              <p ><span>{"Advanced to the regional stage of the Indonesian Search and Rescue Robot Contest (KRSRI) in 2023 and 2024."}</span></p>
              <a href="https://drive.google.com/drive/folders/1q_3jejMcVaUpLnudziJ8JXp_nhL6xKmw?usp=sharing" className='btn btn-primary' target='_blank'>show</a>
            </div>
            <div className="text-box">
              <p>{"Speaker at Coding Class 2023"}</p>
              <p ><span>{"Created learning materials and taught over 120 participants about C++ programming"}</span></p>
              <a href="https://drive.google.com/drive/u/0/folders/1fvgDJ5XXxtlE90guS3iatp5EWpsS-45A" className='btn btn-primary' target='_blank'>show</a>
            </div>
            <div className="text-box">
              <p>{" Study Jam: Road to Become a Frontend Developer – GDSC Esa Unggul University"}</p>
              <p ><span>{"Completed a one-month intensive workshop on frontend development from December 20, 2022, to January 14, 2023, organized by Google Developer Student Club at Esa Unggul University."}</span></p>
              <a href="https://drive.google.com/file/d/1s7RESGaDuAssOQd6vXFr8J0tShQgP5Bu/view?usp=drive_link" className='btn btn-primary' target='_blank'>show</a>
            </div>
          </div>
        );
      case 'education':
        return (
          <div className="content">
            <div className="text-box">
              <p>{"Learn the Basics of JavaScript Programming (2023)"}</p>
              <p ><span>{"Learn JavaScript fundamentals for web development with Node.js, following AWS-validated industry standards."}</span></p>
              <a href="https://www.dicoding.com/certificates/72ZD8D7LVZYW" className='btn btn-primary' target='_blank'>show</a>
            </div>
            <div className="text-box">
              <p>{"Getting Started with Python Programming (2023)"}</p>
              <p ><span>{"Beginner-friendly class to learn Python basics following industry standards, using IDEs like VS Code, Jupyter Notebook, and Google Colab."}</span></p>
              <a href="https://www.dicoding.com/certificates/0LZ0211QKX65" className='btn btn-primary' target='_blank'>show</a>
            </div>
            <div className="text-box">
              <p>{"Learning Machine Learning for Beginners (2023)"}</p>
              <p ><span>{"Beginner-friendly class to start a career in machine learning, covering fundamentals, algorithms, and model implementation."}</span></p>
              <a href="https://www.dicoding.com/certificates/4EXGK4WMGZRL" className='btn btn-primary' target='_blank'>show</a>
            </div>
            <div className="text-box">
              <p>{"Learning to Build Back-End Applications for Beginners (2023)"}</p>
              <p ><span>{" This course equips students with fundamental Back-End skills following AWS standards, including building simple RESTful APIs."}</span></p>
              <a href="https://www.dicoding.com/certificates/JMZV334R3PN9" className='btn btn-primary' target='_blank'>show</a>
            </div>
            <div className="text-box">
              <p>{"Introduction to Structured Query Language (SQL) (2023)"}</p>
              <p ><span>{"Learn essential SQL skills for data management and analysis. By the end of the course, you'll master fundamental queries used in data processing."}</span></p>
              <a href="https://www.dicoding.com/certificates/JLX1WYO0GP72" className='btn btn-primary' target='_blank'>show</a>
            </div>
            
          </div>
        );
      default:
        return null;
    }
  };
  const filteredItems = filter === "all" ? portfolioItems : portfolioItems.filter(item => item.category === filter);


  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
      <Header />
      {/* Hero section */}
      <div id="home">
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-job">Hello, I am</h1>
                <h2 className="hero-name">Tegar Ramadhan</h2>
                <p className="hero-description">
                  Hard work is the greatest teacher, and the process is the best story.
                </p>
                <div className="hero-buttons">
                  <a href={resume} target="_blank" className="btn btn-primary">Download C.V.</a>
                  <a href="https://github.com/RamaaaDev" className="btn btn-secondary">Github profile</a>
                </div>
              </div>
              <div className="hero-image">
                <div className="blur-effect"></div>
                <img src={heroimg} alt="profile" className="profile-img" />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* ================================About Section */}
      <section className="about-container" id='about'>
        <div className="photo">
          <img src={aboutimg} alt="" className="aboutHero" />
        </div>
        <div className="about-content">
          <h2 className="heading">About Me</h2>
          <h3>Entry-Level AI Engineer with a Passion for Machine Learning and Data Science.</h3>
          <p>Entry-Level AI Engineer with an interest in Machine Learning and Data Science, along with skills in building AI models and data processing.</p>
          <div className="about-btn">
            <button
              className={activeTab === 'skills' ? 'active' : ''}
              onClick={() => setActiveTab('skills')}
            >
              Main Skills
            </button>
            <button
              className={activeTab === 'participation' ? 'active' : ''}
              onClick={() => setActiveTab('participation')}
            >
              Participation
            </button>
            <button
              className={activeTab === 'education' ? 'active' : ''}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
          </div>
          <div className="content-btn">
            {renderContent()}
            {/* Button CV */}
            <div className="cvContent">
              <a href={resume} target="_blank" className="btn btn-primary">Download CV</a>
            </div>
          </div>
        </div>
      </section>

      {/* =================================Portfolio Section */}
      <section className="portfolio" id='portfolio'>
  <div className="main-text">
    <h2 className="heading">My Portfolio</h2>
    <span>Projects I have Worked On</span>
  </div>

  <div className="filter-buttons">
    {['all', 'web', 'AI', 'mobile developer'].map(category => (
      <button
        key={category}
        className={`button ${filter === category ? 'active' : ''}`}
        onClick={() => setFilter(category)}
      >
        {category === "all" ? "All Work" : category.toUpperCase()}
      </button>
    ))}
  </div>

  <div className="portfolio-gallery">
    {filteredItems.map(item => (
      <div key={item.id} className="portfolio-box">
        <div className="portfolio-img">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="portfolio-content">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {/* <a href="#" className="readMore">Explore More</a> */}
        </div>
      </div>
    ))}
  </div>
</section>

      {/* contact me */}
      {/* Add this section to your Home component, before the closing </div> */}
      {/* <section className="contact" id='contact-me'>
        <div className="main-text">
          <h2 className="heading">Contact Me</h2>
          <span>Lets Work Together</span>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-box">
              <i className="fas fa-envelope"></i>
              <div className="info-text">
                <h3>Email</h3>
                <p>tegarramadhan1101@gmail.com</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fas fa-phone"></i>
              <div className="info-text">
                <h3>Phone</h3>
                <p>+62 851-5688-5768</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fas fa-map-marker-alt"></i>
              <div className="info-text">
                <h3>Location</h3>
                <p>Jawa Barat, Indonesia</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="input-box">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="input-box">
              <input type="text" placeholder="Project Subject" required />
            </div>

            <textarea placeholder="Your Message" required></textarea>

            <button type="submit" className="btn send-btn">
              Send Message
            </button>
          </form>
        </div>
      </section> */}
      <Chatbot />
      <Footer />

    </div>
  )
}

export default Home