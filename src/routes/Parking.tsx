// file: plannd-client/src/routes/Parking.tsx
import Header from "../components/headers/header";
import logo from "../assets/PlanndImage.svg";

const Parking = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <Header>Plannd</Header>
      <p>A lightweight rota planning tool for small businesses</p>
      <p className="mt-10 font-bold">Coming soon</p>
      <img className="mt-8" width="300px" height="300px" src={logo} />
    </div>
  );
};

export default Parking;
