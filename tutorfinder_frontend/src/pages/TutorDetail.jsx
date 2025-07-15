import { ArrowLeft, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  addReviewsApi,
  allFavouritesApi,
  getReviewsApi,
  getTutorDetailsApi,
  toggleFavouriteApi,
} from "../apis/api";
import LoggedInNavbar from "../components/LoggedInNavbar";
import TutorCard from "../components/TutorCard";
import { useAuth } from "../context/AuthContext";

const TutorDetail = () => {
  const { tutorId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [tutor, setTutor] = useState(null);
  const [otherTutors, setOtherTutors] = useState([]);
  const [favourites, setFavourites] = useState(new Set());
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    getTutorDetails();
    getFavourites();
    getReview();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [tutorId, updated]);

  const getTutorDetails = async () => {
    const response = await getTutorDetailsApi(tutorId);
    if (response.data.success) {
      setTutor(response.data.tutor);
      setOtherTutors(response.data.relatedTutors);
    }
  };

  const getFavourites = async () => {
    try {
      const response = await allFavouritesApi();
      if (response.data.success) {
        const favIds = new Set(response.data.favourites.map((fav) => fav.tutor._id));
        setFavourites(favIds);
      }
    } catch (error) {
      console.error("Failed to fetch favourites:", error);
    }
  };

  const getReview = async () => {
    try {
      const response = await getReviewsApi(tutorId);
      if (response.data.success) {
        setReviews(response.data.reviews);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addReview = async () => {
    if (review.trim() === "") {
      toast.error("Please add a review before submitting", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    try {
      const response = await addReviewsApi({ tutorId, review });
      if (response.data.success) {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 2000,
        });
        setReview(""); // Clear textarea
        setUpdated((prev) => !prev); // Trigger refresh
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleFavourite = async (id) => {
    try {
      const response = await toggleFavouriteApi(id);
      if (response.data.success) {
        setFavourites((prev) => {
          const newSet = new Set(prev);
          newSet.has(id) ? newSet.delete(id) : newSet.add(id);
          return newSet;
        });
      }
    } catch (error) {
      console.error("Failed to toggle favourite:", error);
    }
  };

  if (!tutor) return <p className="text-center mt-20">Loading tutor details...</p>;

  const isTutorFavourite = favourites.has(tutor._id);

  return (
    <div className="bg-white">
      <LoggedInNavbar />

      <div className="pt-24 px-6 max-w-6xl mx-auto">
        {/* Profile and Details */}
        <div className="flex items-start gap-10 flex-wrap md:flex-nowrap">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src={`${process.env.REACT_APP_API_URL}/${tutor.image}`}
              alt={tutor.name}
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
              <h1 className="text-3xl font-bold text-coral-500">{tutor.name}</h1>
              <Heart
                onClick={() => handleToggleFavourite(tutor._id)}
                className={`w-6 h-6 cursor-pointer transition-colors ${isTutorFavourite ? "fill-red-500 text-red-500" : "text-gray-500"
                  }`}
              />
            </div>

            <p className="text-sm italic text-gray-500">{tutor.tagline}</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-sm text-gray-700">
              <p><strong>Gender:</strong> {tutor.gender}</p>
              <p><strong>Location:</strong> {tutor.location}</p>
              <p><strong>Subjects:</strong> {tutor.subject}</p>
              <p><strong>Teaching Mode:</strong> {tutor.teachingMode}</p>
              <p><strong>Hourly Rate:</strong> Rs. {tutor.price}</p>
            </div>

            <div className="mt-6 flex gap-4">
              <Link to={`/contact/${tutor._id}`}>
                <button className="bg-white border border-red-500 text-red-500 px-4 py-2 rounded-full font-semibold hover:bg-red-100">
                  Contact me
                </button>
              </Link>
              <Link to={`/booking/${tutor._id}`}>
                <button className="bg-coral-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-coral-600">
                  Book me
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* About Sections */}
        <div className="mt-12">
          <h3 className="font-bold text-gray-800 mb-2">About You</h3>
          <p className="text-gray-600 leading-relaxed">{tutor.aboutYou}</p>
        </div>

        <div className="mt-8">
          <h3 className="font-bold text-gray-800 mb-2">About the Lesson</h3>
          <p className="text-gray-600 leading-relaxed">{tutor.aboutLesson}</p>
        </div>

        {/* Reviews Section */}
        <div className="mt-8">
          <h3 className="font-bold text-gray-800 mb-4">Reviews</h3>
          {reviews.length === 0 ? (
            <p>No reviews yet</p>
          ) : (
            <div className="space-y-4">
              {reviews.map((r, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded-md">
                  <p className="text-gray-800">{r.review}</p>
                  <p className="text-sm text-gray-500">By: {r.user?.name || "Anonymous"}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add Review */}
        {user && (
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Add a Review</h4>
            <textarea
              className="w-full h-32 p-2 border border-gray-300 rounded-md"
              placeholder="Write your review here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <button
              className="mt-2 bg-coral-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-coral-600"
              onClick={addReview}
            >
              Submit Review
            </button>
          </div>
        )}

        {/* Related Tutors */}
        {otherTutors.length > 0 && (
          <div className="mt-14">
            <h3 className="font-bold text-gray-800 mb-4">Other tutors in {tutor.subject}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherTutors.map((relatedTutor) => (
                <TutorCard
                  key={relatedTutor._id}
                  {...relatedTutor}
                  isLiked={favourites.has(relatedTutor._id)}
                  onToggle={() => handleToggleFavourite(relatedTutor._id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-20 bg-gray-900 text-white text-sm py-10 px-6 text-center">
        © 2025 Tutorfinder. The best way to learn.
      </footer>
    </div>
  );
};

export default TutorDetail;
