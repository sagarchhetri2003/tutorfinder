// import { useLocation } from "react-router-dom";

// const SearchResults = () => {
//   const query = new URLSearchParams(useLocation().search).get("query");

//   return (
//     <div className="pt-24 px-6">
//       <h2 className="text-xl font-bold mb-4">Search Results for: "{query}"</h2>
//       {/* Replace below with real results */}
//       <p className="text-gray-600">[Display tutors related to "{query}" here]</p>
//     </div>
//   );
// };

// export default SearchResults;


// import { useLocation } from "react-router-dom";
// import TutorCard from "../components/TutorCard";
// import { tutors } from "../data/tutors"; // or pass as props if needed

// const SearchResults = () => {
//   const searchParams = new URLSearchParams(useLocation().search);
//   const subject = searchParams.get("subject")?.toLowerCase();
//   const location = searchParams.get("location")?.toLowerCase();
//   const mode = searchParams.get("mode")?.toLowerCase();

//   const filteredTutors = tutors.filter((tutor) => {
//     const subjectMatch = subject ? tutor.subject.toLowerCase().includes(subject) : true;
//     const locationMatch = location ? tutor.location.toLowerCase().includes(location) : true;
//     const modeMatch = mode ? tutor.mode.toLowerCase().includes(mode) : true;
//     return subjectMatch && locationMatch && modeMatch;
//   });

//   return (
//     <div className="pt-24 px-6">
//       <h2 className="text-xl font-bold mb-4">Search Results</h2>
//       {filteredTutors.length ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredTutors.map((tutor, index) => (
//             <TutorCard key={index} {...tutor} />
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-600">No tutors found matching your criteria.</p>
//       )}
//     </div>
//   );
// };

// export default SearchResults;
