
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo/logo.png";
// import Slider from "react-slick";

// const TutorLoginPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email submitted:", email);
//   };

//   const steps = [
//     {
//       number: "01",
//       title: "Create your teaching account for free",
//       description:
//         "Sign up in minutes and create your tutor profile. Add your expertise, set your availability, and showcase your teaching style.",
//       image: "https://plus.unsplash.com/premium_photo-1663040197283-fae88b360dad?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3JlYXRlJTIweW91ciUyMHRlYWNoaW5nJTIwYWNjb3VudCUyMGZvciUyMGZyZWV8ZW58MHx8MHx8fDA%3D",
//     },
//     {
//       number: "02",
//       title: "Set your teaching conditions",
//       description:
//         "Choose your subjects, set your hourly rates, and define your preferred teaching methods. You're in complete control.",
//       image: "https://plus.unsplash.com/premium_photo-1750859860252-6d23c5598f7c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U2V0JTIweW91ciUyMHRlYWNoaW5nJTIwY29uZGl0aW9uc3xlbnwwfHwwfHx8MA%3D%3D",
//     },
//     {
//       number: "03",
//       title: "Share your passion!",
//       description:
//         "Start connecting with students, schedule your first lessons, and begin your rewarding journey as an online tutor.",
//       image: "https://plus.unsplash.com/premium_photo-1676838971664-b466a508255b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2hhcmUlMjB5b3VyJTIwcGFzc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
//     },
//   ];

//   const communitySlides = [
//     {
//       image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1200&q=80",
//       title: "Share your passion!",
//       description:
//         "Join thousands of expert tutors on TutorFinder. By sharing your unique skills and passion daily, you can inspire students and offer meaningful learning experiences that go far beyond traditional lessons.",
//     },
//     {
//       image: "https://images.unsplash.com/photo-1543069752-7148d755b347?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q3JlYXRlJTIwbWVhbmluZ2Z1bCUyMGNvbm5lY3Rpb25zfGVufDB8fDB8fHww",
//       title: "Create meaningful connections",
//       description:
//         "At TutorFinder, human connection is at the heart of every lesson. We match students with tutors who understand their needs, making every learning experience personal and unforgettable.",
//     },
//     {
//       image: "https://plus.unsplash.com/premium_photo-1670264779270-d26ae0e0ffa6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhY2hpbmclMjBvbmxpbmV8ZW58MHx8MHx8fDA%3D",
//       title: "Teach from anywhere",
//       description:
//         "Whether you're in a city or the countryside, TutorFinder lets you reach students globally and work flexibly on your terms.",
//     },
//   ];
  
//   const benefits = [
//     {
//       title: "Set your rates",
//       description:
//         "Define your weekly rate and package deals. You decide what your expertise is worth.",
//       icon: "💰",
//       image:
//         "https://plus.unsplash.com/premium_photo-1661311870919-415927d391df?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmF0ZXxlbnwwfHwwfHx8MA%3D%3D",
//     },
//     {
//       title: "Choose your subjects",
//       description:
//         "From Math to Music, Biology to Physics - teach what you're passionate about.",
//       icon: "📚",
//       image:
//         "https://images.unsplash.com/photo-1565374703327-3f7d46db8fc3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2hvb3NlJTIweW91ciUyMHN1YmplY3RzfGVufDB8fDB8fHww",
//     },
//     {
//       title: "Work from anywhere",
//       description:
//         "Online sessions, in-person meetups, or hybrid teaching - total flexibility!",
//       icon: "🌍",
//       image:
//         "https://images.unsplash.com/photo-1649418558488-f98977269b0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V29yayUyMGZyb20lMjBhbnl3aGVyZSUyMnxlbnwwfHwwfHx8MA%3D%3D",
//     },
//   ];
  

//   return (
//     <div className="min-h-screen text-gray-800 font-sans bg-[linear-gradient(to_bottom,_#ffffff_0%,_#ffe5e5_100%)]">
//       {/* Logo */}
//       <div className="px-6 py-4">
//         <img
//           src={logo}
//           alt="TutorFinder Logo"
//           className="h-10 cursor-pointer"
//           onClick={() => navigate("/")}
//         />
//       </div>

//       {/* Hero Section */}
//       <div className="py-16 px-6">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               Become a tutor, <br />
//               <span className="text-red-600">share your passion!</span>
//             </h1>
//             <p className="text-lg text-gray-700 mb-8">
//               Tutorfinder is the leading tutoring platform to learn and teach
//               anything you want. Join our community of students and teachers
//               today!
//             </p>
//           </div>

//           <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md mx-auto">
//             <h3 className="text-xl font-semibold mb-6 text-gray-800">
//               Create your profile
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full border border-gray-300 px-4 py-3 rounded-lg"
//               />
//               <button
//                 type="submit"
//                 onClick={() => navigate("/tutorsignup")}
//                 className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform font-medium"
//               >
//                 Sign up now
//               </button>
//               <p className="text-xs text-gray-500 text-center">
//                 By signing up, you agree to our Terms of Service and Privacy
//                 Policy.
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* TutorFinder Community Section */}
//       <div className="py-20 px-6 bg-[#fff0f0]">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
//           Join the TutorFinder Community
//         </h2>

//         <div className="max-w-6xl mx-auto">
//           <Slider
//             dots={true}
//             infinite={true}
//             speed={600}
//             slidesToShow={1}
//             slidesToScroll={1}
//             autoplay={true}
//             autoplaySpeed={4000}
//           >
//             {communitySlides.map((slide, index) => (
//               <div key={index}>
//                 <div className="grid md:grid-cols-2 gap-10 items-center px-4">
//                   <img
//                     src={slide.image}
//                     alt={slide.title}
//                     className="rounded-xl shadow-lg w-full h-[450px] object-cover"
//                   />
//                   <div className="bg-[#fffbea] rounded-xl p-8 shadow-md">
//                     <h3 className="text-2xl font-bold text-purple-900 mb-4">
//                       {slide.title}
//                     </h3>
//                     <p className="text-gray-700 text-lg">
//                       {slide.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>

//       {/* Steps Section */}
//       <div className="py-20 px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//             How to become TutorFinder?
//           </h2>
//           <div className="space-y-16">
//             {steps.map((step, index) => (
//               <div
//                 key={index}
//                 className="grid md:grid-cols-2 gap-10 items-center"
//               >
//                 <img
//                   src={step.image}
//                   alt={`Step ${step.number}`}
//                   className="rounded-xl shadow-lg w-full h-80 object-cover"
//                 />
//                 <div>
//                   <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
//                   <p className="text-gray-700 text-lg">{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Benefits Section */}
//       {/* Benefits Section */}
// <div className="bg-gradient-to-b from-[#FFC8C8] to-orange-100 py-20 px-6">
//   <div className="max-w-6xl mx-auto text-center">
//     <h2 className="text-3xl md:text-4xl font-bold mb-12">
//       Be your own <span className="text-red-600">Boss</span>
//     </h2>
//     <div className="grid md:grid-cols-3 gap-10">
//       {benefits.map((benefit, index) => (
//         <div
//           key={index}
//           className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
//         >
//           <img
//             src={benefit.image}
//             alt={benefit.title}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-6">
//             <div className="text-4xl mb-3">{benefit.icon}</div>
//             <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
//             <p className="text-gray-700">{benefit.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//     <button className="mt-12 bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full text-lg font-semibold hover:scale-110 transition-transform">
//       Start Teaching Today
//     </button>
//   </div>
// </div>
//     </div>
//   );
// }

// export default TutorLoginPage;




import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import LoggedInNavbar from "../components/LoggedInNavbar";
import Slider from "react-slick";

const TutorLoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromSignup = location.state?.fromSignup || false;

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  const steps = [
    {
      number: "01",
      title: "Create your teaching account for free",
      description:
        "Sign up in minutes and create your tutor profile. Add your expertise, set your availability, and showcase your teaching style.",
      image: "https://plus.unsplash.com/premium_photo-1663040197283-fae88b360dad?w=900&auto=format&fit=crop&q=60",
    },
    {
      number: "02",
      title: "Set your teaching conditions",
      description:
        "Choose your subjects, set your hourly rates, and define your preferred teaching methods. You're in complete control.",
      image: "https://plus.unsplash.com/premium_photo-1750859860252-6d23c5598f7c?w=900&auto=format&fit=crop&q=60",
    },
    {
      number: "03",
      title: "Share your passion!",
      description:
        "Start connecting with students, schedule your first lessons, and begin your rewarding journey as an online tutor.",
      image: "https://plus.unsplash.com/premium_photo-1676838971664-b466a508255b?w=900&auto=format&fit=crop&q=60",
    },
  ];

  const communitySlides = [
    {
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1200&q=80",
      title: "Share your passion!",
      description:
        "Join thousands of expert tutors on TutorFinder. By sharing your unique skills and passion daily, you can inspire students and offer meaningful learning experiences that go far beyond traditional lessons.",
    },
    {
      image: "https://images.unsplash.com/photo-1543069752-7148d755b347?w=900&auto=format&fit=crop&q=60",
      title: "Create meaningful connections",
      description:
        "At TutorFinder, human connection is at the heart of every lesson. We match students with tutors who understand their needs, making every learning experience personal and unforgettable.",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1670264779270-d26ae0e0ffa6?w=900&auto=format&fit=crop&q=60",
      title: "Teach from anywhere",
      description:
        "Whether you're in a city or the countryside, TutorFinder lets you reach students globally and work flexibly on your terms.",
    },
  ];

  const benefits = [
    {
      title: "Set your rates",
      description:
        "Define your weekly rate and package deals. You decide what your expertise is worth.",
      icon: "💰",
      image:
        "https://plus.unsplash.com/premium_photo-1661311870919-415927d391df?w=900&auto=format&fit=crop&q=60",
    },
    {
      title: "Choose your subjects",
      description:
        "From Math to Music, Biology to Physics - teach what you're passionate about.",
      icon: "📚",
      image:
        "https://images.unsplash.com/photo-1565374703327-3f7d46db8fc3?w=900&auto=format&fit=crop&q=60",
    },
    {
      title: "Work from anywhere",
      description:
        "Online sessions, in-person meetups, or hybrid teaching - total flexibility!",
      icon: "🌍",
      image:
        "https://images.unsplash.com/photo-1649418558488-f98977269b0a?w=900&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <div className="min-h-screen text-gray-800 font-sans bg-[linear-gradient(to_bottom,_#ffffff_0%,_#ffe5e5_100%)]">
      {/* Top Navigation */}
      {fromSignup ? (
        <LoggedInNavbar hideTutorButton={true} />
      ) : (
        <div className="px-6 py-4">
          <img
            src={logo}
            alt="TutorFinder Logo"
            className="h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
      )}

      {/* Hero Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {fromSignup ? (
                <>
                  Welcome to <span className="text-red-600">TutorFinder</span>!
                </>
              ) : (
                <>
                  Become a tutor, <br />
                  <span className="text-red-600">share your passion!</span>
                </>
              )}
            </h1>
            {!fromSignup && (
              <p className="text-lg text-gray-700 mb-8">
                TutorFinder is the leading tutoring platform to learn and teach anything you want. Join our community today!
              </p>
            )}
          </div>

          {/* Signup Form */}
          {!fromSignup && (
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Create your profile</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                />
                <button
                  type="submit"
                  onClick={() => navigate("/tutorsignup")}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform font-medium"
                >
                  Sign up now
                </button>
                <p className="text-xs text-gray-500 text-center">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Community Slider */}
      <div className="py-20 px-6 bg-[#fff0f0]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Join the TutorFinder Community
        </h2>
        <div className="max-w-6xl mx-auto">
          <Slider
            dots={true}
            infinite={true}
            speed={600}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={4000}
          >
            {communitySlides.map((slide, index) => (
              <div key={index}>
                <div className="grid md:grid-cols-2 gap-10 items-center px-4">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="rounded-xl shadow-lg w-full h-[450px] object-cover"
                  />
                  <div className="bg-[#fffbea] rounded-xl p-8 shadow-md">
                    <h3 className="text-2xl font-bold text-purple-900 mb-4">
                      {slide.title}
                    </h3>
                    <p className="text-gray-700 text-lg">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How to become a TutorFinder?
          </h2>
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-10 items-center">
                <img
                  src={step.image}
                  alt={`Step ${step.number}`}
                  className="rounded-xl shadow-lg w-full h-80 object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-b from-[#FFC8C8] to-orange-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Be your own <span className="text-red-600">Boss</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-12 bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full text-lg font-semibold hover:scale-110 transition-transform">
            Start Teaching Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorLoginPage;
