// file: plannd-client/src/components/headers/header.tsx

const header = ({ children }: { children: string }) => {
  return <h1 className="text-2xl font-bold">{children}</h1>;
};

export default header;
