import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useContext } from "react";
import { FriendsContext } from "../../context/FriendContext";

const Stats = () => {
  const { fnd } = useContext(FriendsContext);
  const callLength = fnd.filter((fd) => fd.event === "call").length;
  const textLength = fnd.filter((fd) => fd.event === "text").length;
  const videoLength = fnd.filter((fd) => fd.event === "video").length;
  const data = [
    { name: "Text", value: callLength, fill: "#7E35E1" },
    { name: "Call", value: textLength, fill: "#244D3F" },
    { name: "Video", value: videoLength, fill: "#37A163" },
  ];
  return (
    <div className="bg-[#F8FAFC] py-10 md:py-18">
      <div className="max-w-5xl mx-auto space-y-6 px-4 md:px-0">
        <h2 className="text-4xl font-bold">Friendship Analytics</h2>
        <div className="p-8 rounded-lg shadow-sm bg-white space-y-6">
          <h4 className="text-[20px] font-medium text-[#244D3F]">
            By Interaction Type
          </h4>
          <PieChart
            style={{
              width: "100%",
              maxWidth: "350px",
              maxHeight: "80vh",
              aspectRatio: 1,
              margin: "auto",
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
            <Legend />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Stats;
