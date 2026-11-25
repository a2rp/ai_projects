# AI Projects

A curated collection of complete, polished projects that use artificial intelligence to solve practical problems. Each project is kept self-contained, with its own interface, services, documentation, and setup instructions where appropriate.

## Project collection

Projects may explore:

- LLM-powered applications and chat interfaces
- Document processing, question answering, and semantic search
- AI-assisted workflows and recommendations
- Model integrations, APIs, and multimodal experiences
- Practical evaluation and responsible handling of AI output

The repository includes frontend applications and full-stack projects. Each project should have a clear purpose and be usable on its own.

## Repository layout

```text
ai_projects/
|-- apps/
|   |-- ai-legal-doc-qna/
|   |-- ai-resume-screener/
|   |-- finance-ai-frontend/
|   |-- gemini-chat-frontend/
|   `-- tic-tac-toe-against-ai/
`-- README.md
```

## Available projects

| Project | What it includes |
| --- | --- |
| [AI Legal Document Q&A](apps/ai-legal-doc-qna/README.md) | A full-stack PDF question-answering app with text extraction, sentence embeddings, and FAISS semantic search. |
| [AI Resume Screener](apps/ai-resume-screener/README.md) | A React and FastAPI app that extracts resume PDF text and compares it semantically with a job description. |
| [Finance AI Frontend](apps/finance-ai-frontend/README.md) | A React finance dashboard for transaction tracking, summaries, charts, and optional AI budgeting insights. |
| [Gemini Chat Frontend](apps/gemini-chat-frontend/README.md) | A React chat interface with local conversation history, responsive controls, and a configurable AI chat-service endpoint. |
| [Tic Tac Toe Against AI](apps/tic-tac-toe-against-ai/README.md) | A responsive React game for playing classic Tic Tac Toe against a computer opponent. |

## Running a project

Choose a project under `apps/` and follow its README. Projects can use different runtimes, dependencies, environment variables, model providers, and local services. Keep credentials in local environment files and never commit real secrets.

## Adding a project

Each project should explain its purpose, requirements, environment variables, setup, and main workflow. Include limitations and data-handling notes where they affect use. Keep projects independently understandable and avoid relying on undocumented setup elsewhere in the repository.

## License

This repository is licensed under the MIT License. A project may include its own license with additional or different terms; follow the license in that project's directory when reusing it.