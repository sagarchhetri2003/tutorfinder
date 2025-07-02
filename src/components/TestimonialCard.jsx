


// import { Star } from "lucide-react";

// const TestimonialCard = ({ name, role, content, rating, avatar, backgroundColor }) => {
//   return (
//     <div className={`${backgroundColor} rounded-2xl p-8 shadow-sm w-[300px] min-w-[300px]`}>
//       {/* Top Section: Avatar + Name/Role */}
//       <div className="flex items-center gap-3 mb-4">
//         <img 
//           src={avatar} 
//           alt={name}
//           className="w-10 h-10 rounded-full object-cover"
//         />
//         <div>
//           <p className="font-bold text-gray-900">{name}</p>
//           <p className="text-sm text-gray-700">{role}</p>
//         </div>
//       </div>

//       {/* Testimonial Text */}
//       <p className="text-gray-900 text-base leading-relaxed mb-4">
//         {content}
//       </p>

//       {/* Star Rating */}
//       <div className="flex items-center gap-1">
//         {[...Array(5)].map((_, i) => (
//           <Star
//             key={i}
//             className={`w-5 h-5 ${
//               i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;



// const TestimonialCard = [
//   {
//     name: "Rachel",
//     role: "Mathematics tutor",
//     content:
//       "Rachel is awesome! She's super patient with me and makes sure I fully understand concepts in detail. She also makes math fun by cracking some jokes!",
//     rating: 5,
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//     backgroundColor: "bg-yellow-200",
//     author: "Christa",
//   },
//   {
//     name: "Austin",
//     role: "Yoga tutor",
//     content:
//       "Austin is an amazing teacher. He is calm and attentive. I highly recommend him to anyone looking for a tutor.",
//     rating: 5,
//     avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//     backgroundColor: "bg-green-100",
//     author: "Mark",
//   },
//   {
//     name: "Léa",
//     role: "English tutor",
//     content:
//       "Léa helped me gain confidence speaking English. Her sessions are dynamic and very encouraging!",
//     rating: 5,
//     avatar: "https://randomuser.me/api/portraits/women/48.jpg",
//     backgroundColor: "bg-purple-100",
//     author: "Sophia",
//   },
// ];
// export default TestimonialCard;



import { Star } from "lucide-react";

const TestimonialCard = ({ name, role, content, rating, avatar, backgroundColor, author }) => {
  return (
    <div className={`rounded-2xl p-6 w-[350px] min-w-[350px] ${backgroundColor} transition-transform duration-300`}>

      <div className="flex items-center gap-3 mb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="font-bold text-lg text-gray-900">{name}</p>
          <p className="text-sm font-medium text-gray-700">{role}</p>
        </div>
      </div>

      <p className="text-[17px] font-semibold text-gray-900 mb-4 leading-snug">
        {content}
      </p>

      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>

      <p className="text-sm font-bold text-gray-800">{author}</p>
    </div>
  );
};

export default TestimonialCard;
