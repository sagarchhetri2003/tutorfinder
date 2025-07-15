import { Heart, Laptop, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const TutorCard = ({
  _id,
  name,
  subject,
  description,
  rating,
  price,
  image,
  location,
  teachingMode,
  isLiked,
  onToggle,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={`${process.env.REACT_APP_API_URL}/${image}`}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={onToggle}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Heart
            className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
          />
        </button>
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <span className="text-sm font-medium text-gray-800">{name}</span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <span className="text-sm text-gray-500">• {subject}</span>
        </div>

        {location && (
          <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        )}

        {teachingMode && (
          <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
            <Laptop className="w-4 h-4" />
            <span>{teachingMode}</span>
          </div>
        )}

        <p className="text-gray-600 text-sm mb-3">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-800">Rs. {price}</span>
          <Link to={`/tutor/${_id}`}>
            <button className="bg-coral-500 hover:bg-coral-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
