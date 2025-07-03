import { useEffect, useState } from "react";

import LoggedInNavbar from "../components/LoggedInNavbar";
import TutorCard from "../components/TutorCard";

const Favorites = () => {

  const [favoriteTutors, setFavoriteTutors] = useState([]);

  useEffect(() => {
    setFavoriteTutors([
      {
        name: "Emily Carter",
        subject: "Maths",
        description: "Patient and experienced math tutor for high school and college students.",
        rating: 4.9,
        price: "60€/h",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
        verified: true,
      },
      {
        name: "Liam Johnson",
        subject: "English",
        description: "Specializes in grammar, creative writing, and exam prep for all levels.",
        rating: 4.8,
        price: "55€/h",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Sofia Martinez",
        subject: "Biology",
        description: "Biology PhD student offering tutoring from high school to university level.",
        rating: 5.0,
        price: "70€/h",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
        verified: true,
      }
    ]);
  }, []);

  const handleClearFavorites = () => {
    setFavoriteTutors([]);
  };

 

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
            {favoriteTutors.map((tutor, index) => (
              <TutorCard key={index} {...tutor} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Favorites;
