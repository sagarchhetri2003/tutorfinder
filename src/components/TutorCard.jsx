// const TutorCard = ({ tutor }) => {
//     return (
//       <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg text-center">
//         <img src={tutor.image} alt="tutor" className="w-24 h-24 rounded-full mx-auto mb-3" />
//         <h4 className="font-bold">{tutor.name}</h4>
//         <p className="text-sm text-gray-600">{tutor.subject}</p>
//         <p className="text-indigo-500">{tutor.location}</p>
//       </div>
//     );
//   };
  
//   export default TutorCard;
  

// import { Heart, Star } from "lucide-react";
// import { useState } from "react";

// const TutorCard = ({ name, subject, description, rating, price, image, verified = false }) => {
//   const [isLiked, setIsLiked] = useState(false);

//   return (
//     <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
//       <div className="relative">
//         <img 
//           src={image} 
//           alt={name}
//           className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//         <button 
//           onClick={() => setIsLiked(!isLiked)}
//           className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
//         >
//           <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
//         </button>
//         <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
//           <span className="text-sm font-medium text-gray-800">{name}</span>
//         </div>
//       </div>
      
//       <div className="p-4">
//         <div className="flex items-center gap-2 mb-2">
//           <div className="flex items-center gap-1">
//             <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//             <span className="text-sm font-medium">{rating}</span>
//           </div>
//           <span className="text-sm text-gray-500">• {subject}</span>
//           {verified && (
//             <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
//               Vérifié
//             </div>
//           )}
//         </div>
        
//         <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
//         <div className="flex items-center justify-between">
//           <span className="text-lg font-semibold text-gray-800">{price}</span>
//           <button className="bg-coral-500 hover:bg-coral-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
//             Contacter
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TutorCard;


import React, { useState } from "react";
import { Heart, Star } from "lucide-react";

const TutorCard = ({ name, subject, description, rating, price, image, verified = false }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Heart className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
        </button>
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <span className="text-sm font-medium text-gray-800">{name}</span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <span className="text-sm text-gray-500">• {subject}</span>
          {verified && (
            <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              Verified
            </div>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-3">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-800">{price}</span>
          <button className="bg-coral-500 hover:bg-coral-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
