// import LoggedInNavbar from "../components/LoggedInNavbar";
// import Home from "./Home";

// const LandingPage = () => {
//   return (
//     <>
//       <LoggedInNavbar />
//       <Home showNavbar={false} /> {/* 👈 Disable original navbar */}
//     </>
//   );
// };

// export default LandingPage;


import LoggedInNavbar from "../components/LoggedInNavbar";
import Home from "./Home";
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <LoggedInNavbar />
      <div className="pt-20"> {/* Add padding to avoid overlap with fixed navbar */}
        <Home showNavbar={false} />
      </div>
    </div>
  );
};



export default LandingPage;
