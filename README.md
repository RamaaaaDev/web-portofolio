
# Personal Portfolio

A modern personal portfolio built with React 18 and Vite, featuring a lightweight FAQ chatbot powered by FastAPI and scikit-learn (TF-IDF + cosine similarity). The front end is deployed as a static site, while the chatbot API runs as a separate microservice accessed via HTTP. The chatbot is specifically designed to answer frequently asked questions about the portfolio owner’s personal background, professional experience, and skill set.

## Tech Stack

**Front-end:** React, React DOM, Vite.

**Back-end:** FastAPI, scikit-learn (TF-IDF), cosine similarity.


## Run Locally

**Start the Front-end:**

Clone the project

```bash
  git clone https://github.com/RamaaaaDev/web-portofolio.git
```

Go to the project directory

```bash
  cd portoWeb
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

**Start the Back-end:**

Go tho the project directory

```bash
    cd portoWeb/src/backend
```

Create a virtual environment (recommended) and run

```bash
    python -m venv .venv
    .venv/Scripts/activate #for windows.
```

Install dependencies
```bash
    pip install fastapi uvicorn scikit-learn
```

Start the server
```bash
    uvicorn chatbot:app --host 0.0.0.0 --port 8000
```








## Credits
This project was designed and developed by [tegar Ramadhan](https://www.instagram.com/tegar_361) as a personal portfolio and FAQ chatbot demonstration.


