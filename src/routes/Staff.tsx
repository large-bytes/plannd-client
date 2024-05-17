// file: large-bytes/plannd/plannd-client/src/routes/Staff.tsx

import Header from "../components/headers/header";
import StaffList from "../components/staff/StaffList";
const mockData01 = [
  {
    id: "abc",
    name: "John Mulaney",
    email: "jmulaney@example.com",
  },
];

const Staff = () => {
  return (
    <main className="flex flex-col p-4">
      <Header>Staff</Header>
      <StaffList staffListData={mockData01} />
    </main>
  );
};

export default Staff;
