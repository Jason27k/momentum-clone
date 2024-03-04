import { stats } from "../lib/constants";

const Stats = () => {
  return (
    <div className="flex flex-wrap items-center justify-center mx-10">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-wrap sm:w-1/2 md:w-1/4 p-[30px] items-center justify-evenly"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col justify-center text-wrap text-center">
              <h3 className="text-black text-6xl my-2">{stat.stat}</h3>
              <p className="text-black text-[18px]">{stat.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
