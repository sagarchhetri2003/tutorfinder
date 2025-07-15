import { useEffect, useState } from "react";
import LoggedInNavbar from "../components/LoggedInNavbar";
import TutorCard from "../components/TutorCard";
import { allFavouritesApi, toggleFavouriteApi } from "../apis/api";

const Favorites = () => {
  const [favoriteTutors, setFavoriteTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await allFavouritesApi();
        if (res.data.success) {
          const tutors = res.data.favourites.map(fav => ({
            ...fav.tutor,
            isLiked: true,
          }));
          setFavoriteTutors(tutors);
        } else {
          setFavoriteTutors([]);
        }
      } catch (err) {
        console.error("Failed to fetch favorite tutors:", err);
        setFavoriteTutors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const handleToggleFavourite = async (tutorId) => {
    try {
      const res = await toggleFavouriteApi(tutorId);
      if (res.data.success) {
        setFavoriteTutors(prev => {
          const isCurrentlyFav = prev.some(tutor => tutor._id === tutorId);
          if (isCurrentlyFav) {
            return prev.filter(tutor => tutor._id !== tutorId);
          } else {
            return prev;
          }
        });
      }
    } catch (err) {
      console.error("Failed to toggle favourite:", err);
    }
  };

  const handleClearFavorites = () => {
    setFavoriteTutors([]);
  };

  if (loading) {
    return <p className="text-center mt-10">Loading favorite tutors...</p>;
  }

  return (
    <div className="min-h-screen bg-white">
      <LoggedInNavbar activePage="favorites" />

      <section className="container mx-auto px-4 pt-32 pb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">My Favorite Tutors</h2>

          <div className="flex gap-4">
            {favoriteTutors.length > 0 && (
              <button
                onClick={handleClearFavorites}
                className="px-4 py-2 bg-red-100 text-red-500 rounded-full font-medium hover:bg-red-200 transition"
              >
                Remove All Favorites
              </button>
            )}
          </div>
        </div>

        {favoriteTutors.length === 0 ? (
          <p className="text-center text-gray-500">You haven't added any favorite tutors yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteTutors.map((tutor) => (
              <TutorCard
                key={tutor._id}
                {...tutor}
                isLiked={true}
                onToggle={() => handleToggleFavourite(tutor._id)}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Favorites;
