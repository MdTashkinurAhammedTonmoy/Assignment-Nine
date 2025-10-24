// import React, { use } from "react";
// import { Link } from "react-router";
// import { AuthContext } from "../Provider/AuthProvider";

// const Register = () => {
//   const { createUser, setUser, updateUser } = use(AuthContext);
//   const hendelRegister = (e) => {
//     e.preventDefault();
//     console.log(e.target);
//     const form = e.target;
//     const name = form.name.value;
//     const photo = form.photo.value;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log({ name, photo, email, password });
//     createUser(email, password)
//       .then((result) => {
//         const user = result.user;
//         // console.log(user);
//         updateUser({ displayName: name, photoURL: photo })
//           .then(() => {
//             setUser({...user,displayName: name, photoURL: photo});
//           })
//           .catch((error) => {
//             console.log(error);
//             setUser(user)
//           });
//       })
//       .catch((error) => {
//         // const errorCode = error.code;
//         const errorMessage = error.message;
//         alert(errorMessage);
//         // ..
//       });
//   };
//   return (
//     <div>
//       <div className="flex justify-center min-h-screen items-center">
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
//           <h2 className="font-semibold text-2xl text-center">
//             Register Your Account
//           </h2>
//           <form onSubmit={hendelRegister} className="card-body">
//             <fieldset className="fieldset">
//               {/* name */}
//               <label className="label">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 className="input"
//                 placeholder="Name"
//                 required
//               />
//               {/* Photo URl */}
//               <label className="label">Photo URl</label>
//               <input
//                 type="text"
//                 name="photo"
//                 className="input"
//                 placeholder="Photo URl"
//                 required
//               />
//               {/* email */}
//               <label className="label">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="input"
//                 placeholder="Email"
//                 required
//               />
//               {/* password */}
//               <label className="label">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 className="input"
//                 placeholder="Password"
//                 required
//               />

//               <button type="submit" className="btn btn-neutral mt-4">
//                 Register
//               </button>
//               <p className="font-semibold pt-5 text-center">
//                 Allready Have An Account ?{" "}
//                 <Link className="text-red-500" to="/auth/login">
//                   Login
//                 </Link>
//               </p>
//             </fieldset>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;



import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

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

        updateUserProfile(createdUser, { displayName: name, photoURL: photo })
          .then(() => {
            
            const updated = {
              ...createdUser,
              displayName: name,
              photoURL: photo,
            };
            setUser(updated);
            console.log("Profile updated and user set:", updated);
            navigate("/")
          })
          .catch((err) => {
            console.error("Profile update error:", err);
            setUser(createdUser);
          });
      })
      .catch((err) => {
        console.error("Create user error:", err);
        alert(err.message);
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
