
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const photo = form.photo.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        toast.success("Profile updated and user set:");

        updateUserProfile(createdUser, { displayName: name, photoURL: photo })
          .then(() => {
            
            const updated = {
              ...createdUser,
              displayName: name,
              photoURL: photo,
            };
            
            setUser(updated);
            
            navigate("/")
          })
          .catch((err) => {
            console.error("Profile update error:", err);
            setUser(createdUser);
          });
      })
      .catch((err) => {
        console.error("Create user error:", err);
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Register Your Account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Name" required />

            <label className="label">Photo URL</label>
            <input type="text" name="photo" className="input" placeholder="Photo URL" required />

            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required />

            <button type="submit" className="btn btn-neutral mt-4">Register</button>

            <p className="font-semibold pt-5 text-center">
              Already Have An Account?{" "}
              <Link className="text-red-500" to="/auth/login">Login</Link>
            </p>
          </fieldset>
          
        </form>
      </div>
    </div>
  );
};

export default Register;
