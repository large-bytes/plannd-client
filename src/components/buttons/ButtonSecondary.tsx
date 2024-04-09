// file: src/components/buttons/ButtonSecondary.tsx

const ButtonPrimary = ({ children }: { children: string }) => {
  return (
    <button className="duration-200 text-gray-900 h12 border-black border-2 p-2.5 bg-pink-300 hover:bg-pink-600 shadow-[3px_3px_0px_rgba(0,0,0,1)]  hover:text-white active:text-white active:bg-pink-600 active:shadow-none">
      {children}
    </button>
  );
};

export default ButtonPrimary;