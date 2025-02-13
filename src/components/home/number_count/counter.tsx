 
import CountUp from 'react-countup';

const formatNumber = (number: number) => {
  if (number >= 1000000) {
    return (number / 1000000) + 'M kwacha';
  }
  return number + '+';
};

const StatsCounter = () => {
  const stats = [
    { number: 200, title: "Youth Organizations" },
    { number: 400, title: "Youth Networks" },
    { number: 100000000, title: "Youth agricultural cooperative grants" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-5">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-24 py-5 rounded-lg">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold mb-2">
              <CountUp
                duration={3}
                end={stat.number}
                formattingFn={(value) => formatNumber(value)}
              />
            </div>
            <span className="text-lg">{stat.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;