// file: src/App.tsx

import { Route, Routes } from "react-router-dom";
import Parking from "./routes/Parking";
import NoMatch from "./routes/NoMatch";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Parking />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
