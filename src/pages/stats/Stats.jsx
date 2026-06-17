import { Pie, PieChart } from "recharts";

const Stats = () => {
  const data = [
    { name: "Group A", value: 400, fill: "#0088FE" },
    { name: "Group B", value: 300, fill: "#00C49F" },
    { name: "Group C", value: 300, fill: "#FFBB28" },
    { name: "Group D", value: 200, fill: "#FF8042" },
  ];
  return (
    <div className="bg-[#F8FAFC] py-10 md:py-20">
      <div className="max-w-5xl mx-auto space-y-6 px-4 md:px-0">
        <h2 className="text-4xl font-bold">Friendship Analytics</h2>
        <div className="p-8 rounded-lg shadow-sm bg-white space-y-6">
            <h4 className="text-[20px] font-medium text-[#244D3F]">By Interaction Type</h4>
            <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
        </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Stats;
