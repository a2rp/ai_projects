# AI Legal Document Q&A

A full-stack AI-powered document question-answering application for uploading PDF documents, searching their contents semantically, and asking questions through an interactive chat interface.

The project combines a React frontend with a FastAPI backend and uses Hugging Face models, sentence embeddings, FAISS vector search, and PDF text extraction to work with uploaded documents.

> This project is intended for demonstration, learning, and experimentation. It should not be treated as a substitute for professional legal or medical advice.

## Features

- Upload PDF documents
- Extract text from uploaded PDFs
- Ask questions about document contents
- Natural-language question input
- Semantic document search
- Sentence embeddings
- FAISS vector search
- Interactive chat interface
- PDF preview
- Clear chat history
- Export chat as a text file
- Automatic scrolling to the latest response
- Separate React frontend and FastAPI backend

## Tech Stack

### Frontend

- React
- Vite
- Axios
- React Dropzone
- styled-components

### Backend and AI

- Python
- FastAPI
- Hugging Face Transformers
- Sentence Transformers
- FAISS
- PyMuPDF
- PyTorch
- scikit-learn

## Repository Structure

```text
ai-legal-doc-qna/
â”œâ”€â”€ backend/
â”‚   â”œâ”€â”€ routers/
â”‚   â”œâ”€â”€ utils/
â”‚   â”œâ”€â”€ main.py
â”‚   â””â”€â”€ requirements.txt
â”œâ”€â”€ frontend/
â”‚   â”œâ”€â”€ public/
â”‚   â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ eslint.config.js
â”‚   â”œâ”€â”€ image.png
â”‚   â”œâ”€â”€ index.html
â”‚   â”œâ”€â”€ package-lock.json
â”‚   â”œâ”€â”€ package.json
â”‚   â””â”€â”€ vite.config.js
â”œâ”€â”€ ai-legal-doc-working-1.mp4
â”œâ”€â”€ ai-legal-doc-working-2.mp4
â”œâ”€â”€ ai-legal-doc-working.mp4
â”œâ”€â”€ .gitignore
â””â”€â”€ README.md
```

## How It Works

At a high level, the application follows this workflow:

```text
PDF Document
     |
     v
Text Extraction
     |
     v
Document Processing
     |
     v
Sentence Embeddings
     |
     v
FAISS Vector Search
     |
     v
Relevant Document Content
     |
     v
Question Answering
     |
     v
Chat Interface
```

The uploaded PDF is processed by the backend. Document content is converted into a representation that can be searched using semantic similarity.

When a question is submitted, the application searches for relevant document content and uses the configured question-answering pipeline to generate a response based on the document.

## Backend Setup

Open a terminal in the backend directory:

```bash
cd backend
```

Create a Python virtual environment:

```bash
python -m venv venv
```

### Activate the virtual environment on Windows

```powershell
venv\Scripts\activate
```

Install the backend dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI application:

```bash
uvicorn main:app --reload
```

The backend runs locally at:

```text
http://127.0.0.1:8000
```

## Frontend Setup

Open another terminal and move into the frontend directory:

```bash
cd frontend
```

Install the Node.js dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend development server is available at:

```text
http://localhost:5173
```

## Using the Application

After starting both applications:

1. Open the frontend in the browser.
2. Upload a supported PDF document.
3. Allow the application to process the document.
4. Enter a question related to the uploaded document.
5. Submit the question.
6. Review the generated response in the chat interface.
7. Continue asking questions as needed.

The interface also provides functionality for previewing the PDF, clearing the conversation, and exporting chat content.

## Semantic Search

The project uses sentence embeddings and FAISS to perform semantic search over processed document content.

Unlike basic keyword matching, semantic search is intended to retrieve content based on similarity between the meaning of the question and the processed document content.

## PDF Processing

PyMuPDF is used as part of the backend PDF-processing stack.

Uploaded PDF content is extracted and processed before being used by the document search and question-answering workflow.

## AI Components

The backend includes Hugging Face Transformers and Sentence Transformers as part of the AI processing stack.

The project combines:

```text
Document text
      +
Sentence embeddings
      +
FAISS similarity search
      +
Question answering
```

to support document-based questions through the frontend chat interface.

## Development

The project uses two development servers:

### Backend

```text
FastAPI
http://127.0.0.1:8000
```

### Frontend

```text
Vite
http://localhost:5173
```

Both should be running while using the complete application locally.

## Demo

The repository contains three demonstration videos:

```text
ai-legal-doc-working.mp4
ai-legal-doc-working-1.mp4
ai-legal-doc-working-2.mp4
```

These files demonstrate the application workflow and interface.

## Important Notes

AI-generated responses can be incomplete, inaccurate, or misinterpreted.

The quality of a response can also depend on factors such as:

- PDF text quality
- Document structure
- Extracted content
- Question wording
- Retrieved document context
- Model behavior

Always verify important information against the original document.

## Disclaimer

This repository is an experimental and educational AI project.

It is not intended to provide professional legal, medical, financial, or other regulated professional advice.

Do not rely solely on generated responses for important decisions. Consult the original document and an appropriately qualified professional when necessary.

## Documentation


## Author

**Ashish Ranjan**

Full-Stack Web Developer

## Links

- Portfolio: https://www.ashishranjan.net
- GitHub: https://github.com/a2rp
- CodePen: https://codepen.io/ash1198
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/
- YouTube: https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1
- Email: mailto:ash.ranjan09@gmail.com

## Support

- Support: https://a2rp-donation-page.netlify.app/
- Buy Me A Coffee: https://buymeacoffee.com/a2rp
- Patreon: https://patreon.com/a2rp

## License

This project is licensed under the MIT License.
