# 🔮 RAG Chat - AI-Powered Course Assistant

A professional RAG (Retrieval-Augmented Generation) chatbot built for the **3-1 Course Big Data Engineering** curriculum. This application leverages Langflow for RAG pipeline orchestration and features a modern cyberpunk-inspired UI with animated network visualizations.

![Built with React](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react)
![Powered by Langflow](https://img.shields.io/badge/Langflow-RAG-ff00e6?style=for-the-badge)
![Google Gemini](https://img.shields.io/badge/Gemini-Embeddings-4285F4?style=for-the-badge&logo=google)

---

## 🎯 Project Overview

This project demonstrates a complete RAG (Retrieval-Augmented Generation) implementation where:
- Course documents (PDFs, TXT files) are indexed and stored in a vector database
- Users can query the knowledge base through a chat interface
- AI provides context-aware responses based on the uploaded course materials
- Beautiful cyberpunk UI with neon aesthetics and animated backgrounds

---

## ✨ Features

### 🤖 RAG Capabilities
- **Document Processing**: Supports PDF and TXT file formats
- **Vector Embeddings**: Uses Google Gemini for generating high-quality embeddings
- **Semantic Search**: Retrieves relevant context from course materials
- **Context-Aware Responses**: AI answers questions based on uploaded documents

### 🎨 UI/UX Features
- **Modern Dark Design**: Professional dark theme with subtle neon accents
- **Animated Network Background**: Floating nodes with dynamic connections
- **Glass-morphism Effects**: Translucent containers with backdrop blur
- **Smooth Animations**: Message slide-ins, loading dots, hover effects
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### 🔧 Technical Features
- **Real-time Chat**: Instant message exchange with the RAG agent
- **Session Management**: Maintains conversation context across messages
- **Error Handling**: Graceful error messages and loading states
- **Environment Variables**: Secure API key management

---

## 🏗️ Architecture

```
┌─────────────────┐
│   React UI      │ ← Vite + React 18
│  (Cyberpunk)    │
└────────┬────────┘
         │
         ↓ HTTP Request
┌─────────────────┐
│   Langflow      │ ← RAG Pipeline
│   API Server    │
└────────┬────────┘
         │
         ├──→ Google Gemini (Embeddings)
         ├──→ Vector Database (Document Storage)
         └──→ LLM (Response Generation)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Langflow** server running locally or remotely
- **Google Gemini API** access

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd rag-chat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_LANGFLOW_API_KEY=your_langflow_api_key_here
   VITE_LANGFLOW_HOST_URL=http://localhost:7860
   VITE_LANGFLOW_FLOW_ID=your_flow_id_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📚 Langflow Setup

### 1. Install Langflow
```bash
pip install langflow
```

### 2. Start Langflow Server
```bash
langflow run
```
Server will start at `http://localhost:7860`

### 3. Create RAG Flow

1. **Document Loader**: Upload your course PDFs/TXT files
2. **Text Splitter**: Chunk documents for processing
3. **Google Gemini Embeddings**: Generate vector embeddings
4. **Vector Store**: Store embeddings (ChromaDB, Pinecone, etc.)
5. **Retriever**: Configure similarity search
6. **LLM Chain**: Connect to your preferred LLM
7. **Output**: Return chat responses

### 4. Get Flow ID & API Key

- Navigate to your flow settings
- Copy the **Flow ID** from the URL
- Generate an **API Key** in Langflow settings
- Add both to your `.env` file

---

## 📦 Project Structure

```
rag-chat/
├── public/              # Static assets
├── src/
│   ├── App.jsx         # Main component (chat logic + canvas)
│   ├── App.css         # Styles and animations
│   ├── main.jsx        # React entry point
│   └── index.css       # Global styles
├── .env                # Environment variables (not in repo)
├── .gitignore          # Git ignore rules
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

---

## 🔐 Security

- **API Keys**: Never commit `.env` file to version control
- **CORS**: Configure Langflow CORS settings for production
- **Environment**: Use separate keys for dev/prod environments

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **Vite** | Build tool & dev server |
| **Langflow** | RAG pipeline orchestration |
| **Google Gemini** | Text embeddings |
| **Canvas API** | Animated network background |
| **CSS3** | Modern styling & animations |

---

## 📖 Course Context

**Course**: 3-1 Big Data Engineering  
**Topic**: Retrieval-Augmented Generation (RAG)  
**Documents**: Course materials (PDFs, lecture notes, textbooks)  
**Use Case**: Query course content conversationally through AI

---

## 🎯 Use Cases

- 📚 **Study Assistant**: Ask questions about course materials
- 🔍 **Document Search**: Find specific topics in uploaded files
- 💡 **Concept Explanation**: Get AI-powered explanations
- 📝 **Quick Reference**: Access course info without manual searching

---

## 🐛 Troubleshooting

### Issue: 403 Forbidden Error
**Solution**: Ensure `VITE_LANGFLOW_API_KEY` is correctly set in `.env`

### Issue: No Response from Bot
**Solution**: 
- Check if Langflow server is running at `http://localhost:7860`
- Verify Flow ID is correct
- Check browser console for errors

### Issue: Styling Not Loading
**Solution**: 
- Hard refresh browser (`Ctrl + Shift + R`)
- Clear browser cache
- Restart dev server

### Issue: Canvas Not Rendering
**Solution**: 
- Check browser console for errors
- Ensure canvas element is not blocked by extensions

---

## 📄 License

This project is created for educational purposes as part of the Big Data Engineering course.

---

## 👨‍💻 Developer

Created with 🔮 for the 3-1 Big Data Engineering course

**Tech Stack**: React + Vite + Langflow + Google Gemini  
**Year**: 2025

---

## 🙏 Acknowledgments

- **Langflow** for providing an excellent RAG platform
- **Google Gemini** for powerful embedding models
- **Vite** for blazing-fast development experience
- **React** for building modern user interfaces

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review Langflow documentation
3. Verify environment variables are correct

---

<div align="center">

### ⚡ Powered by RAG • 🤖 Built with React • 🚀 Enhanced with AI

**Made with ❤️ and lots of ☕**

</div>

