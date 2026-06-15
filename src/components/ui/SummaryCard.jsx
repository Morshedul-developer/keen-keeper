const SummaryCard = ({children1, children2}) => {
  return (
    <div className="shadow-[0px_1px_6px_0px_rgba(0,0,0,0.08)] rounded-lg p-8 flex gap-2 flex-col items-center">
      <strong className="text-3xl">{children1}</strong>
      <span className="text-[#64748B]">{children2}</span>
    </div>
  );
};

export default SummaryCard;
