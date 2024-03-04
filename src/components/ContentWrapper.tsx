import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ContentWrapper = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-evenly gap-28 mt-[10vh]">
      {children}
    </div>
  );
};

export default ContentWrapper;
