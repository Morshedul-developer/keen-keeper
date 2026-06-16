const TimelineCard = ({ fd }) => {
  return (
    <div className="p-4 shadow-sm rounded-lg flex items-center gap-4 bg-white">
      <div>
        {fd.event === "call" ? (
          <img className="w-8" src="/call.png" alt={fd.name} />
        ) : fd.event === "text" ? (
          <img className="w-8" src="/text.png" alt={fd.name} />
        ) : (
          <img className="w-8" src="/video.png" alt={fd.name} />
        )}
      </div>
      <div>
        <p className="text-[#64748B]">
          <span className="capitalize font-semibold text-[#244D3F]">
            {fd.event}
          </span>{" "}
          with {fd.name}
        </p>
        <p className="text-[#64748B] text-sm font-semibold">
          {new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default TimelineCard;
