# Examnio App (AI-Powered)

## Description

**Examino App** is a modern, ultra-polished React + Vite web application that enables educators, trainers, and students to generate professional-quality question papers in seconds. Leveraging Google’s Gemini API, it creates diverse, customizable questions on any topic with just a few clicks. The app features a beautiful, responsive UI/UX, question editing, PDF export, and more.

---

## Features

- **AI-Powered Question Generation**: Instantly generate questions on any subject or custom content using Google Gemini API.
- **Multiple Question Types**: Supports multiple choice, short answer, and true/false questions.
- **Customizable Parameters**: Set question count, difficulty, and time allowed.
- **Edit & Regenerate**: Edit or regenerate individual questions for full control.
- **History & Save**: Save generated papers for future use.
- **Beautiful UI/UX**: Modern, responsive design with smooth animations.
- **PDF Export**: Download your question paper as a professional PDF.
- **Accessible & Responsive**: Works great on all devices and is accessibility-friendly.

---

## Tech Stack

- **Frontend Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **UI Library**: [Material UI (MUI)](https://mui.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router](https://reactrouter.com/)
- **AI Integration**: [Google Gemini API](https://ai.google.dev/)
- **PDF Export**: [jsPDF](https://github.com/parallax/jsPDF), [html2canvas](https://github.com/niklasvh/html2canvas)
- **Form Handling**: [react-hook-form](https://react-hook-form.com/) (optional)
- **Icons**: [Material Icons](https://mui.com/components/material-icons/), [react-icons](https://react-icons.github.io/react-icons/) (optional)

---

## Setup Instructions

### 1. Clone the Repository

git clone https://github.com/yourusername/question-paper-maker.git
cd question-paper-maker


### 2. Install Dependencies

npm install


### 3. Configure Environment Variables

Create a `.env` file in the root directory and add your [Google Gemini API key](https://ai.google.dev/) like this:

> **Note:** The `VITE_` prefix is required for Vite to expose environment variables.


### 4. Start the Development Server

Visit localhost in your browser.


### 5. Build for Production

npm run build


## License

[MIT](LICENSE)





