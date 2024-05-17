// file: plannd-client/src/components/staff/StaffItem.tsx
// John Mulaney
// jmulaney@example.com

type StaffItemProps = {
  id: string;
  name: string;
  email: string;
};

const StaffItem = ({ name, email }: StaffItemProps) => {
  return (
    <li className="flex flex-row gap-12 items-center">
      <div className="font-bold">{name}</div>
      <div className="text-sm">{email}</div>
    </li>
  );
};

export default StaffItem;
