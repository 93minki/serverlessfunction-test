import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        setLoaded(true);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return loaded ? (
    <ol>
      {data.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ol>
  ) : (
    "Data fetching..."
  );
}

export default App;
