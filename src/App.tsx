import { useState } from "react";
import ButtonPrimary from "./components/buttons/ButtonPrimary";
import ButtonSecondary from "./components/buttons/ButtonSecondary";
import ButtonDisabled from "./components/buttons/ButtonDisabled";
import InputPrimary from "./components/inputs/InputPrimary";

type dataProps = {
  results:
    | [
        {
          id: {
            value: string;
          };
          name: {
            first: string;
            last: string;
          };
        },
      ]
    | [];
};

function App() {
  const [data, setData] = useState<dataProps>({ results: [] });

  const handleClick = async (): Promise<void> => {
    try {
      const data = await fetch("http://localhost:8000/articles/", {});
      const info = (await data.json()) as dataProps;
      setData(info);
    } catch (error) {
      console.log("Failed to fetch the data", error);
    }
  };

  return (
    <div className="mt-5 mx-auto max-w-md rounded-xl border-3 bg-blue-500 py-8 px-8 text-white text-center">
      <h1 className="text-2xl mb-8">Home Page</h1>
      <button
        className="transition border rounded py-3 px-3 font-bold shadow-lg bg-amber-700 hover:bg-amber-100 hover:text-amber-700 active:shadow-none"
        onClick={() => void handleClick()}
      >
        Get Data
      </button>
      <ul className="mt-8">
        {data?.results &&
          data.results.map((person) => (
            <li key={person?.id?.value}>
              [{person?.id?.value}] : {person?.name?.first} {person?.name?.last}
            </li>
          ))}
      </ul>
      <div className="flex justify-center gap-4 my-6">
        <ButtonPrimary>SAVE</ButtonPrimary>
        <ButtonSecondary>DELETE</ButtonSecondary>
        <ButtonDisabled>SAVE</ButtonDisabled>
      </div>
      <div className="flex flex-col justify-center gap-4 my-6">
        <InputPrimary type={"text"}>Full Name</InputPrimary>
        <InputPrimary type={"email"}>Email</InputPrimary>
      </div>
    </div>
  );
}

export default App;
