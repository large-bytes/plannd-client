// file: src/components/button.tsx

const ButtonDisabled = ({ children }: { children: string }) => {
  return (
    <button aria-disabled className="duration-200 text-gray-500 h12 border-gray-400 border-4 p-2.5 bg-gray-300 cursor-default">
      {children}
    </button>
  );
};

export default ButtonDisabled;
