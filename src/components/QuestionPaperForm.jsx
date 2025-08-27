import React, { useState } from "react";
import { Trash2 } from "lucide-react"; // Optional icon from lucide-react
import { generatePrompt } from "../utils/promtGenerator";
import { generateWithGemini } from "../utils/geminiAPI";

function QuestionPaperForm() {
  const [questionGroups, setQuestionGroups] = useState([
    { count: "", marks: "", type: "short", comment: "" },
  ]);
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [totalQuestions, setTotalQuestions] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [topics, setTopics] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [generatedQuestionPaper, setGeneratedQuestionPaper] = useState("");

  const addQuestionGroup = () => {
    setQuestionGroups([
      ...questionGroups,
      { count: "", marks: "", type: "short", comment: "" },
    ]);
  };

  const deleteQuestionGroup = (index) => {
    if (questionGroups.length > 1) {
      setQuestionGroups(questionGroups.filter((_, i) => i !== index));
    }
  };

  const updateGroup = (index, field, value) => {
    const updatedGroups = [...questionGroups];
    updatedGroups[index][field] = value;
    setQuestionGroups(updatedGroups);
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setGeneratedQuestionPaper("");

    const formData = {
      subject,
      grade,
      totalQuestions,
      totalMarks,
      difficulty,
      topics,
    };

    try {
      const prompt = generatePrompt(formData, questionGroups);
      console.log("Sending prompt:", prompt);
      const response = await generateWithGemini(prompt);
      
      if (!response) {
        throw new Error("No response received from the API");
      }
      
      setGeneratedQuestionPaper(response);
    } catch (err) {
      setError(err.message);
      console.error("Generation failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      subject,
      grade,
      totalQuestions,
      totalMarks,
      difficulty,
      topics,
    };

    const prompt = generatePrompt(formData, questionGroups);
    console.log("Generated Prompt:\n", prompt);
  };

  const handleDownload = () => {
    const blob = new Blob([generatedQuestionPaper], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${subject}-question-paper.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-black via-gray-900 p-10 rounded-3xl shadow-xl">
        <h2 className="text-4xl font-extrabold text-center text-white mb-8">
          Create a Question Paper
        </h2>

        {/* Static Fields */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter subject"
              className="w-full p-4 border-2 border-blue-500 rounded-xl dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-300 transition duration-200"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Class
            </label>
            <input
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              placeholder="Enter class"
              className="w-full p-4 border-2 border-blue-500 rounded-xl dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-300 transition duration-200"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Total Number of Questions
            </label>
            <input
              type="number"
              value={totalQuestions}
              onChange={(e) => setTotalQuestions(e.target.value)}
              placeholder="Total number of questions"
              className="w-full p-4 border-2 border-blue-500 rounded-xl dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-300 transition duration-200"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Total Marks of Paper
            </label>
            <input
              type="number"
              value={totalMarks}
              onChange={(e) => setTotalMarks(e.target.value)}
              placeholder="Total marks"
              className="w-full p-4 border-2 border-blue-500 rounded-xl dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-300 transition duration-200"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Difficulty Level
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full p-4 border-2 border-blue-500 rounded-xl dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-300 transition duration-200"
            >
              <option value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Topics
            </label>
            <input
              type="text"
              value={topics}
              onChange={(e) => setTopics(e.target.value)}
              placeholder="Comma-separated topics"
              className="w-full p-4 border-2 border-blue-500 rounded-xl dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-300 transition duration-200"
            />
          </div>
        </div>

        <hr className="my-8 border-gray-300 dark:border-gray-600" />

        {/* Question Groups */}
        <h3 className="text-2xl font-semibold text-white mb-6">
          Question Groups
        </h3>

        {questionGroups.map((group, index) => (
          <div
            key={index}
            className="relative grid gap-6 mb-6 p-6 border-2 border-blue-500 rounded-xl bg-gray-50 dark:bg-gray-700"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  Number of Questions
                </label>
                <input
                  type="number"
                  value={group.count}
                  onChange={(e) => updateGroup(index, "count", e.target.value)}
                  className="w-full p-4 border-2 border-blue-500 rounded-xl dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-300 transition duration-200"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  Marks per Question
                </label>
                <input
                  type="number"
                  value={group.marks}
                  onChange={(e) => updateGroup(index, "marks", e.target.value)}
                  className="w-full p-4 border-2 border-blue-500 rounded-xl dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-300 transition duration-200"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  Type of Question
                </label>
                <select
                  value={group.type}
                  onChange={(e) => updateGroup(index, "type", e.target.value)}
                  className="w-full p-4 border-2 border-blue-500 rounded-xl dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-300 transition duration-200"
                >
                  <option value="short">Short Answer</option>
                  <option value="long">Long Answer</option>
                  <option value="mcq">MCQ</option>
                </select>
              </div>
            </div>

            {/* Additional Comments */}
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Additional Comments
              </label>
              <textarea
                value={group.comment}
                onChange={(e) => updateGroup(index, "comment", e.target.value)}
                placeholder="Write comments or special instructions..."
                className="w-full p-4 border-2 border-blue-500 rounded-xl dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-300 transition duration-200"
                rows={3}
              />
            </div>

            {/* Delete Button */}
            {questionGroups.length > 1 && (
              <button
                onClick={() => deleteQuestionGroup(index)}
                className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
                title="Delete this group"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}

        <div className="mb-10 text-center">
          <button
            type="button"
            onClick={addQuestionGroup}
            className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition duration-200"
          >
            + Add Another Group
          </button>
        </div>

        <div className="text-center">
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className={`
              w-full
              px-8 py-4
              text-lg font-semibold
              bg-gradient-to-r from-blue-600 to-blue-700
              hover:from-blue-700 hover:to-blue-800
              text-white rounded-xl
              transform transition-all duration-200
              hover:scale-[1.02] hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
              ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
            `}
          >
            {isLoading ? "Generating..." : "Generate Question Paper"}
          </button>
        </div>

        {/* Error Handling */}
        {error && <div className="mt-6 text-red-600 text-center">{error}</div>}

        {/* Generated Paper Section */}
        {generatedQuestionPaper && (
          <div className="mt-10 text-center">
            <button
              onClick={handleDownload}
              className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition duration-200"
            >
              Download Question Paper
            </button>
            <div className="mt-6 text-xl text-white font-semibold">
              <pre className="whitespace-pre-wrap break-words text-left">{generatedQuestionPaper}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionPaperForm;
