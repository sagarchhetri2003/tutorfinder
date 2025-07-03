


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
