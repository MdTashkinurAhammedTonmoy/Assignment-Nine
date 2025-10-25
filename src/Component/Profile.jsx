import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import bgimg from "../assets/bg-2.jpg";
import { MdOutlineDriveFileRenameOutline, MdMarkEmailRead } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout()
      .then(() => {
        toast.success("You log out successfully");
      })
      .catch((error) => {
        toast.error("Logout failed");
        console.log(error);
      });
  };

  return (
    <div
      className="bg-cover lg:flex w-11/12 mx-auto m-5 p-10 justify-between items-center space-y-5"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="space-y-5">
        <h2 className="lg:text-6xl text-3xl text-white font-bold">
          <span className="text-yellow-300">Animals</span> are silent teachers <br />
          of unconditional <br />
          <span className="text-green-400">Love</span>
        </h2>
        <div className="flex">
          <MdOutlineDriveFileRenameOutline size={30} />
          <h3 className="text-3xl font-bold text-white">{user?.displayName}</h3>
        </div>
        <div className="flex">
          <MdMarkEmailRead size={30} />
          <p className="text-2xl text-white">{user?.email}</p>
        </div>
        <button onClick={handleLogOut} className="btn bg-amber-200">
          Log Out
        </button>
      </div>
      <div>
        <img
          className="w-[400px] lg:h-[500px] h-[400px] rounded-2xl"
          src={user?.photoURL}
          alt=""
        />
      </div>
    </div>
  );
};

export default Profile;
