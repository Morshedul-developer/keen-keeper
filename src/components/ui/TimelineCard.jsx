import { LuVideo } from "react-icons/lu";
import { PiChatDotsBold, PiPhoneCallBold } from "react-icons/pi";

const TimelineCard = ({ fd }) => {
  return (
    <div className="p-4 shadow-sm rounded-lg flex items-center gap-4">
      <div>
        {fd.event === "call" ? (
          <PiPhoneCallBold size={30} />
        ) : fd.event === "text" ? (
          <PiChatDotsBold size={30} />
        ) : (
          <LuVideo size={30} />
        )}
      </div>
      <div>
        <p className="text-[#64748B]">
          <span className="capitalize font-semibold text-[#244D3F]">{fd.event}</span> with {fd.name}
        </p>
        <p className="text-[#64748B] text-sm font-semibold">
          {new Date(fd.next_due_date).toLocaleDateString("en-US", {
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
