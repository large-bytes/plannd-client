// file: src/inputs/InputPrimary.tsx

const InputPrimary = ({
  type,
  children,
}: {
  type: "text" | "email" | "password" | "tel";
  children: string;
}) => {
  return (
    <label className="justify-self-start text-left">
      {children}
      <input
        type={type}
        className="text-gray-900 h12 w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[3px_3px_0px_rgba(0,0,0,1)] focus:bg-cyan-300 active:shadow-[3px_3px_0px_rgba(0,0,0,1)]"
      />
    </label>
  );
};

export default InputPrimary;
