import { useState } from "react";
import axios from 'axios'
function Chatbot() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/posts/chat", {
        prompt,
      });
      setResponse(res.data.reply);
    } catch (error) {
      console.error("Error:", error);
      setResponse("An error occurred while fetching the response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>ChatGPT Interaction</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows="5"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ padding: "10px", cursor: "pointer" }}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
      <h2>Response:</h2>
      <div
        style={{
          whiteSpace: "pre-wrap",
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        {response}
      </div>
    </div>
  );
}

export default Chatbot;
