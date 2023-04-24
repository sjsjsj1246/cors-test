import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{data}</div>;
}

export default App;
