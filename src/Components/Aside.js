import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdHome,
  MdSchedule,
  MdModeComment,
  MdGroups,
  MdAccountBox,
  MdOutlineSettings,
  MdPrivacyTip,
  MdHelpCenter,
  MdPendingActions,
} from "react-icons/md";

export default function Aside() {
  return (
    <div className="bg-primary flex flex-col text-[white] text-xl font-bold list-none pt-10 pl-5 w-[280px] h-full justify-start gap-y-20 col-start-1 row-start-1 row-span-full">
      <Link
        className="flex text-3xl items-center gap-2 hover:underline underline-offset-8 decoration-secondary  "
        to={"/"}
      >
        <span>
          <MdDashboard color="white" size={40} />
        </span>
        Dashboard
      </Link>

      <div className="flex flex-col gap-y-4 pl-2">
        <Link className="flex items-center gap-6 hover:underline underline-offset-8 decoration-secondary" to={"/"}>
          <span>
            <MdHome />
          </span>
          Home
        </Link>
        <Link className="flex items-center gap-6 hover:underline underline-offset-8 decoration-secondary" to={"/"}>
          <span>
            <MdAccountBox />
          </span>
          Profile
        </Link>
        <Link className="flex items-center gap-6 hover:underline underline-offset-8 decoration-secondary" to={"/"}>
          <span>
            <MdModeComment />
          </span>
          Messages
        </Link>
        <Link className="flex items-center gap-6 hover:underline underline-offset-8 decoration-secondary" to={"/"}>
          <span>
            <MdSchedule className="" color="white" />
          </span>
          History
        </Link>
        <Link className="flex items-center gap-6 hover:underline underline-offset-8 decoration-secondary" to={"/"}>
          <span>
            <MdPendingActions />
          </span>
          Tasks
        </Link>
        <Link className="flex items-center gap-6 hover:underline underline-offset-8 decoration-secondary" to={"/"}>
          <span>
            <MdGroups />
          </span>
          Communities
        </Link>
      </div>
      <div className="flex flex-col gap-y-4 pl-2">
        <Link className="flex items-center gap-6 hover:underline underline-offset-8 decoration-secondary" to={"/"}>
          <span>
            <MdOutlineSettings />
          </span>
          Settings
        </Link>
        <Link className="flex items-center gap-6 hover:underline underline-offset-8 decoration-secondary" to={"/"}>
          <span>
            <MdHelpCenter />
          </span>
          Support
        </Link>
        <Link className="flex items-center gap-6 hover:underline underline-offset-8 decoration-secondary" to={"/"}>
          <span>
            <MdPrivacyTip />
          </span>
          Privacy
        </Link>
      </div>
    </div>
  );
}
