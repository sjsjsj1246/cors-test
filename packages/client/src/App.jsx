import { useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios("http://localhost:8080" + url, {
        method,
      });
      console.log(response);
      setText(
        JSON.stringify(
          {
            headers: response?.headers,
            data: response?.data,
          },
          null,
          2
        )
      );
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setText(
        JSON.stringify(
          {
            message: error.message,
            headers: error.config.headers,
            data: error.response?.data,
          },
          null,
          2
        )
      );
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen container mx-auto justify-center items-center">
      <h1 className="text-lg text-center mb-12">CORS TEST</h1>
      <div className="w-2/3 flex">
        <select onChange={(e) => setMethod(e.target.value)}>
          <option value="GET">Get</option>
          <option value="POST">Post</option>
          <option value="DELETE">Delete</option>
        </select>
        <input
          className="ml-2 flex-1 h-10 border border-gray-400 rounded-md px-2"
          type="text"
          value={url}
          placeholder="/path"
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") fetchData();
          }}
        />
        <button
          className="h-10 px-6 ml-2 font-semibold rounded-md bg-black text-white"
          onClick={fetchData}
        >
          요청
        </button>
      </div>
      <textarea
        className={`border border-gray-400 rounded-md w-2/3 h-1/2 mt-4 text-sm ${
          error && "text-red-500"
        }`}
        value={text}
        readOnly
      />
    </div>
  );
}

export default App;
