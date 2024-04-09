// file: src/App.tsx

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import Staff from "./routes/Staff";
import Home from "./routes/Home";
import Rota from "./routes/Rota";
import NoMatch from "./routes/NoMatch";

// import { useState } from "react";
// import ButtonPrimary from "./components/buttons/ButtonPrimary";
// import ButtonSecondary from "./components/buttons/ButtonSecondary";
// import ButtonDisabled from "./components/buttons/ButtonDisabled";
// import InputPrimary from "./components/inputs/InputPrimary";

// type dataProps = {
//   results:
//     | [
//         {
//           id: {
//             value: string;
//           };
//           name: {
//             first: string;
//             last: string;
//           };
//         },
//       ]
//     | [];
// };

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/rota" element={<Rota />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;

// const [data, setData] = useState<dataProps>({ results: [] });

// const handleClick = async (): Promise<void> => {
//   try {
//     const data = await fetch("http://localhost:8000/articles/", {});
//     const info = (await data.json()) as dataProps;
//     setData(info);
//   } catch (error) {
//     console.log("Failed to fetch the data", error);
//   }
// };

/* <button
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
      </div> */
