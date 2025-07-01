

import { Star } from "lucide-react";

const TestimonialCard = ({ name, role, content, rating, avatar, backgroundColor }) => {
  return (
    <div className={`${backgroundColor} rounded-2xl p-6 shadow-sm`}>
      <div className="flex items-center gap-3 mb-4">
        <img 
          src={avatar} 
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4 leading-relaxed">{content}</p>
      
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
