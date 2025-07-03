import { useParams, useNavigate, Link } from "react-router-dom";
import { Star, ArrowLeft, Heart } from "lucide-react";
import LoggedInNavbar from "../components/LoggedInNavbar";
import TutorCard from "../components/TutorCard";

const dummyTutor = {
  id: "1",
  name: "Spicy Virgo",
  tagline: "It is very rewarding to educate the public about what we do and why it matters.",
  gender: "Female",
  location: "Chitwan",
  subject: "Mathematics, Biology",
  mode: "Online & Offline",
  weeklyRate: "Rs.25000",
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  aboutLesson: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  image: "https://randomuser.me/api/portraits/women/44.jpg",
  reviews: [
    { name: "Dhiraj", comment: "Perfect! My daughter enjoyed his lesson.", rating: 5 },
    { name: "Dhiraj", comment: "Perfect! My daughter enjoyed his lesson.", rating: 5 },
    { name: "Dhiraj", comment: "Perfect! My daughter enjoyed his lesson.", rating: 5 },
  ],
};

const relatedTutors = [
  {
    id: "2",
    name: "Chrys",
    subject: "Math",
    description: "Français et mathématiques d’excellence par 2...",
    rating: 4.9,
    price: "87€/weekly",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    verified: true,
  },
  {
    id: "3",
    name: "Adlane",
    subject: "Maths",
    description: "Apprendre la guitare simplement, rapidement...",
    rating: 4.8,
    price: "40€/weekly",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    id: "4",
    name: "Florent",
    subject: "Maths",
    description: "Enseignant de l’éducation nationale...",
    rating: 5.0,
    price: "100€/weekly",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    verified: true,
  },
];

const TutorDetail = () => {
  const { tutorId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <LoggedInNavbar />

      <div className="pt-24 px-6 max-w-6xl mx-auto">
        {/* Back and Profile */}
        <div className="flex items-start gap-10 flex-wrap md:flex-nowrap">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src={dummyTutor.image}
              alt={dummyTutor.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <button
              className="mb-4 text-gray-500 flex items-center gap-2 hover:text-black"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-coral-500">{dummyTutor.name}</h1>
              <Heart className="w-6 h-6 text-gray-500 cursor-pointer" />
            </div>

            <p className="text-sm italic text-gray-500">{dummyTutor.tagline}</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-sm text-gray-700">
              <p>
                <strong>Gender:</strong> {dummyTutor.gender}
              </p>
              <p>
                <strong>Location:</strong> {dummyTutor.location}
              </p>
              <p>
                <strong>Subjects:</strong> {dummyTutor.subject}
              </p>
              <p>
                <strong>Teaching Mode:</strong> {dummyTutor.mode}
              </p>
              <p>
                <strong>Weekly Rate:</strong> {dummyTutor.weeklyRate}
              </p>
            
            </div>

            <div className="mt-6 flex gap-4">
              <Link to="/contact">
                <button className="bg-white border border-red-500 text-red-500 px-4 py-2 rounded-full font-semibold hover:bg-red-100">
                  Contact me
                </button>
              </Link>
              <Link to="/booking">
              <button className="bg-coral-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-coral-600">
                Book me
              </button>
                </Link>
            </div>
          </div>
        </div>

        {/* About You */}
        <div className="mt-12">
          <h3 className="font-bold text-gray-800 mb-2">About You</h3>
          <p className="text-gray-600 leading-relaxed">{dummyTutor.about}</p>
        </div>

        {/* About the Lesson */}
        <div className="mt-8">
          <h3 className="font-bold text-gray-800 mb-2">About the Lesson</h3>
          <p className="text-gray-600 leading-relaxed">{dummyTutor.aboutLesson}</p>
        </div>

        {/* Reviews */}
        <div className="mt-8">
          <h3 className="font-bold text-gray-800 mb-4">Reviews</h3>
          <div className="space-y-4">
            {dummyTutor.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-red-50 p-4 rounded-xl flex justify-between items-center shadow-sm"
              >
                <div>
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                </div>
                <div className="text-yellow-500 font-bold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400" />
                  {review.rating}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Tutors */}
        <div className="mt-14">
          <h3 className="font-bold text-gray-800 mb-4">Other tutors in Mathematics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedTutors.map((tutor) => (
              <TutorCard key={tutor.id} id={tutor.id} {...tutor} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 bg-gray-900 text-white text-sm py-10 px-6 text-center">
        © 2025 Tutorfinder. The best way to learn.
      </footer>
    </div>
  );
};

export default TutorDetail;
