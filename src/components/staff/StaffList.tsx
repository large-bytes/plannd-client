// file: plannd-client/src/components/staff/StaffList.tsx

import StaffItem, { StaffItemProps } from "./StaffItem";

const StaffList = ({ staffListData }: { staffListData: StaffItemProps[] }) => {
  return (
    <ul className="flex flex-col gap-4 mt-5 mb-5">
      {staffListData &&
        staffListData.map((employee) => (
          <StaffItem key={employee.id} {...employee} />
        ))}
    </ul>
  );
};

export default StaffList;
