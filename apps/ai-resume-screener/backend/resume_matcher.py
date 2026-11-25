from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import re

model = SentenceTransformer("all-MiniLM-L6-v2")  # Fast + light + accurate

def clean_text(text: str) -> str:
    text = re.sub(r"\s+", " ", text)
    return text.strip().lower()

def get_cosine_score(text1: str, text2: str) -> float:
    embeddings = model.encode([text1, text2])
    score = cosine_similarity([embeddings[0]], [embeddings[1]])[0][0]
    return round(score * 100, 2)

stopwords = {"and", "or", "with", "of", "a", "the", "to", "in", "is", "we", "are", "developer"}

def get_top_common_words(resume_text: str, jd_text: str, top_n=10):
    resume_words = set(re.findall(r"\b[a-zA-Z]{2,}\b", resume_text.lower()))
    jd_words = set(re.findall(r"\b[a-zA-Z]{2,}\b", jd_text.lower()))

    # Remove stopwords and non-skill words
    filtered = list((resume_words & jd_words) - stopwords)
    return filtered[:top_n]

def match_resume(resume_text: str, jd_text: str):
    resume_text = clean_text(resume_text)
    jd_text = clean_text(jd_text)

    score = float(get_cosine_score(resume_text, jd_text))  # ✅ FIXED
    top_skills = get_top_common_words(resume_text, jd_text)

    return {
        "matchScore": score,
        "skills": top_skills
    }
