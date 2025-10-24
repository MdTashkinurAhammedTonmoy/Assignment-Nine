// import React, { use, useState,} from "react";
// import { Link, useLocation, useNavigate } from "react-router";
// import { AuthContext } from "../Provider/AuthProvider";

// const Login = () => {
//     const [error,setError] = useState("");
//   const { signIn } = use(AuthContext);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const hendleLogin = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log({ email, password });
//     signIn(email,password)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//         navigate(`${location.state?location.state : "/prodect"}`)
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // alert(errorCode,errorMessage);
//         setError(errorCode);
//       });
//   };
//   return (
//     <div className="flex justify-center min-h-screen items-center">
//       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
//         <h2 className="font-semibold text-2xl text-center">
//           Login Your Account
//         </h2>
//         <form onSubmit={hendleLogin} className="card-body">
//           <fieldset className="fieldset">
//             {/* email */}
//             <label className="label">Email</label>
//             <input
//               type="email"
//               name="email"
//               className="input"
//               placeholder="Email"
//               required
//             />
//             {/* password */}
//             <label className="label">Password</label>
//             <input
//               type="password"
//               name="password"
//               className="input"
//               placeholder="Password"
//               required
//             />
//             <div>
//               <a className="link link-hover">Forgot password?</a>
//             </div>

//             {error && <p className="text-red-500 text-xs">{error}</p>}

//             <button type="submit" className="btn btn-neutral mt-4">
//               Login
//             </button>
//             <p className="font-semibold pt-5 text-center">
//               Dont't Have An Account ?{" "}
//               <Link className="text-red-500" to="/auth/register">
//                 Register
//               </Link>
//             </p>
//           </fieldset>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log("Logged in:", result.user);
      })
      .catch((err) => {
        console.error("Login error:", err);
        alert(err.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Login Your Account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required />

            <div><a className="link link-hover">Forgot password?</a></div>

            <button type="submit" className="btn btn-neutral mt-4">Login</button>

            <p className="font-semibold pt-5 text-center">
              Don't have an account? <Link className="text-red-500" to="/auth/register">Register</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
