import "./App.css";
import { useState } from "react";

type dataProps = {
  results:
    | [
        {
          id: {
            value?: string;
          };
          name: {
            first: string;
            last: string;
          };
        }
      ]
    | [];
};

function App() {
  const [data, setData] = useState<dataProps>({ results: [] });

  const handleClick = async (): Promise<void> => {
    const data = await fetch("https://randomuser.me/api/?nat=gb");
    const info = await data.json();
    setData(info);
  };

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Get Data</button>
      <ul className="display">
        {data?.results &&
          data.results.map((person) => (
            <li key={person.id.value}>
              [{person.id.value}] : {person.name.first} {person.name.last}
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
