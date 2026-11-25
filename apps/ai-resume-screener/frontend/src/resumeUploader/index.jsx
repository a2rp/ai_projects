import React, { useRef, useState } from "react";
import axios from "axios";
import { Styled } from "./styled";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { HiSparkles } from "react-icons/hi2";

export default function ResumeUploader() {
    const [file, setFile] = useState(null);
    const [jd, setJd] = useState("");
    const [result, setResult] = useState(null);
    const fileInputRef = useRef(null);
    const [dragging, setDragging] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile && droppedFile.type === "application/pdf") {
            setFile(droppedFile);
            setPreviewUrl(URL.createObjectURL(droppedFile));
        } else {
            // alert("Please drop a PDF file.");
            toast.error("Please drop a valid PDF file.");
        }
    };

    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        if (selected) {
            setFile(selected);
            setPreviewUrl(URL.createObjectURL(selected));
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleSubmit = async () => {
        if (!file || !jd) return toast.warning("Both resume and job description are required!");

        const formData = new FormData();
        formData.append("resume", file);
        formData.append("jd", jd);

        setIsLoading(true);
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/upload`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setResult(res.data);
            toast.success("Analysis complete!");
        } catch (err) {
            console.error("Upload failed", err);
            // alert("Upload failed");
            toast.error("Upload failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleClearJD = () => {
        setJd("");
    };

    const handleResetAll = () => {
        setJd("");
        setFile(null);
        setResult(null);
        setPreviewUrl(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
        }
    };

    const handleDownloadJSON = () => {
        if (!result) return;

        const data = {
            filename: file?.name || "resume.pdf",
            matchScore: parseFloat(result.matchScore.toFixed(2)),
            skills: result.skills,
            timestamp: new Date().toISOString(),
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "resume_analysis_result.json";
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleDownloadCSV = () => {
        if (!result) return;

        const filename = file?.name || "resume.pdf";
        const matchScore = parseFloat(result.matchScore.toFixed(2));
        const skills = result.skills.join(", ");
        const timestamp = new Date().toISOString();

        const headers = ["Filename", "Match %", "Skills", "Timestamp"];
        const row = [filename, matchScore, `"${skills}"`, timestamp];

        const csvContent = [headers, row]
            .map((line) => line.join(","))
            .join("\n");

        const blob = new Blob([csvContent], { type: "text/csv" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "resume_analysis_result.csv";
        a.click();
        URL.revokeObjectURL(url);
    };



    return (
        <>
            <Styled.Wrapper>
                <Styled.Heading>
                    <span className="ai">AI<HiSparkles className="icon one" /></span>
                    Resume Screener
                </Styled.Heading>

                <Styled.Main>
                    <Styled.Col1>
                        <label className="jobDescTitle">
                            Enter your job description below
                        </label>
                        <Styled.Textarea
                            placeholder="Paste job description here..."
                            value={jd}
                            onChange={(e) => setJd(e.target.value)}
                        />
                    </Styled.Col1>

                    <Styled.Col2>
                        <label className="uploadResumeDescTitle">
                            Upload the resume here:&nbsp;
                            <i>
                                {file
                                    ? <>{file.name}</>
                                    : <>No resume updloaded yet</>
                                }
                            </i>
                        </label>
                        <Styled.InputWrapper
                            onClick={() => fileInputRef.current?.click()}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragEnter={() => setDragging(true)}
                            onDragLeave={() => setDragging(false)}
                        >
                            <p>📂 Drag & Drop Resume Here <br />or Click to Upload</p>

                            <Styled.Input
                                ref={fileInputRef}
                                type="file"
                                accept=".pdf"
                                onChange={handleFileChange}
                                style={{ display: "none" }}
                            />

                        </Styled.InputWrapper>

                    </Styled.Col2>
                </Styled.Main>

                <Styled.ButtonsWrapper>
                    <Styled.Button
                        onClick={handleSubmit}
                        className="analyze"
                        disabled={isLoading}
                    >
                        {isLoading ? <><CircularProgress sx={{ height: "30px" }} /></> : <>Analyze</>}
                    </Styled.Button>
                    <Styled.Button
                        onClick={handleClearJD}
                        className="clearJd"
                        disabled={isLoading}
                    >
                        {isLoading ? <><CircularProgress /></> : <>Clear Job Description</>}
                    </Styled.Button>
                    <Styled.Button
                        onClick={handleResetAll}
                        className="resetAll"
                        disabled={isLoading}
                    >
                        {isLoading ? <><CircularProgress /></> : <>Reset All</>}
                    </Styled.Button>

                </Styled.ButtonsWrapper>

                {result && (
                    <>
                        <Styled.ResultBox>
                            <h2>🧠 AI Resume Analysis Summary</h2>

                            <p>
                                <strong>Match Score:</strong>{" "}
                                <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                                    {result.matchScore.toFixed(2)}%
                                </span>
                            </p>

                            <p>
                                <strong>Overall Fit:</strong>{" "}
                                {result.matchScore >= 80
                                    ? "✅ Excellent match — you're ready to apply!"
                                    : result.matchScore >= 60
                                        ? "⚠️ Decent match — consider fine-tuning your resume."
                                        : "❌ Low match — update your resume to align with the job."}
                            </p>

                            <p>
                                {/* <strong>Top Skills Matched:</strong>{" "}
                                {result.skills.length ? result.skills.join(", ") : "No relevant skills matched."} */}
                            </p>

                            <p>
                                <strong>AI Suggestion:</strong>{" "}
                                {result.matchScore < 70
                                    ? "Try adding or emphasizing relevant technologies from the job description."
                                    : "Your resume is aligned well with the job requirements."}
                            </p>
                        </Styled.ResultBox>

                        <Styled.DownloadButtonsWrappere>
                            <Styled.DownloadButton
                                onClick={handleDownloadJSON}
                                className="button"
                            >
                                📥 Download Result as JSON
                            </Styled.DownloadButton>
                            <Styled.DownloadButton
                                onClick={handleDownloadCSV}
                                className="button"
                            >
                                📊 Download Result as CSV
                            </Styled.DownloadButton>
                        </Styled.DownloadButtonsWrappere>
                    </>
                )}

                {previewUrl && (
                    <Styled.PreviewResume>
                        <h3>📄 Resume Preview:</h3>
                        <iframe
                            src={previewUrl}
                            width="100%"
                            height="600px"
                            style={{ border: "1px solid #aaa", borderRadius: "6px" }}
                            title="Resume Preview"
                        ></iframe>
                    </Styled.PreviewResume>
                )}

            </Styled.Wrapper >
        </>
    );
}
