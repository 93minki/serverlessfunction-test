import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <ol>
      {data.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ol>
  );
}

export default App;
