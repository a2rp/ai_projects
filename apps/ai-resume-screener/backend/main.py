from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import shutil, os
import pdfplumber

from resume_matcher import match_resume

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.post("/upload")
async def upload_resume(resume: UploadFile = File(...), jd: str = Form(...)):
    save_path = os.path.join(UPLOAD_DIR, resume.filename)
    with open(save_path, "wb") as f:
        shutil.copyfileobj(resume.file, f)

    with pdfplumber.open(save_path) as pdf:
        resume_text = "\n".join(page.extract_text() or "" for page in pdf.pages)

    result = match_resume(resume_text, jd)

    return {
        "filename": resume.filename,
        "matchScore": result["matchScore"],
        "skills": result["skills"]
    }
