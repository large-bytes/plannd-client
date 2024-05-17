// file: large-bytes/plannd/plannd-client/src/routes/Staff.tsx

import Header from "../components/headers/header";
import StaffList from "../components/staff/StaffList";

const Staff = () => {
  return (
    <main className="flex flex-col p-4">
      <Header>Staff</Header>
      <StaffList />
    </main>
  );
};

export default Staff;
