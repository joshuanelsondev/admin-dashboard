import {
  MdOutlineSearch,
  MdOutlineNotificationsActive,
  MdOutlinePublic,
} from "react-icons/md";

export default function NavBar() {
  return (
    <div className="shadow-xl h-40 col-start-2 row-start-1">
        <div className="flex flex-cols ">
            <form className="flex">
                <input
                className="bg-light rounded-3xl pl-4 placeholder:text-primary outline-none focus:outline-primary"
                type="text"
                placeholder="Search"
                />
                <button className="relative right-6 w-6 pl-1 rounded-r-xl hover:bg-primary">
                <MdOutlineSearch />
                </button>
            </form>
            <MdOutlineNotificationsActive size={20} />
            <MdOutlinePublic size={40} />
            <p>USER</p>
        </div>
        <div>
            <MdOutlinePublic size={40} />
            <h1>WELCOME Dashboard User</h1>
            <div className="flex gap-6">
                <button className="bg-primary w-20 rounded-2xl text-white font-bold text-sm h-8">New</button>
                <button className="bg-primary w-20 rounded-2xl text-white font-bold text-sm h-8">Upload</button>
                <button className="bg-primary w-20 rounded-2xl text-white font-bold text-sm h-8">Share</button>
            </div>
        </div>
    </div>
  );
}
