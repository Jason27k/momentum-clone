import { facts } from "@/lib/constants";
import Image from "next/image";

const Facts = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {facts.map((fact, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:p-[30px]"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Image src={fact.icon} alt={fact.title} width={40} height={35} />
            </div>
            <div className="flex flex-col justify-center text-wrap text-center">
              <h3 className="text-black text-lg font-bold my-2">
                {fact.title}
              </h3>
              <p className="text-[#6b6b6b;]">{fact.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facts;
