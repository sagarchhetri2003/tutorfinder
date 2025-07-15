import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { allFavouritesApi, searchTutorsApi, toggleFavouriteApi } from "../apis/api";
import TutorCard from "../components/TutorCard";

export const SearchPage = () => {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);

    const subject = queryParams.get("subject");
    const location = queryParams.get("location");
    const teachingMode = queryParams.get("mode");

    const [tutors, setTutors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [favourites, setFavourites] = useState(new Set());

    // Fetch tutors based on search query
    useEffect(() => {
        const fetchTutors = async () => {
            try {
                const res = await searchTutorsApi({
                    subject,
                    location,
                    teachingMode,
                });

                if (res.data.success) {
                    setTutors(res.data.tutors);
                } else {
                    setTutors([]);
                }
            } catch (err) {
                console.error("Error fetching tutors:", err);
                setTutors([]);
            } finally {
                setLoading(false);
            }
        };

        fetchTutors();
    }, [subject, location, teachingMode]);

    // Fetch favourites for current user
    const getFavourites = async () => {
        try {
            const response = await allFavouritesApi();
            if (response.data.success) {
                const favIds = new Set(response.data.favourites.map(fav => fav.tutor._id));
                setFavourites(favIds);
            }
        } catch (error) {
            console.error("Failed to fetch favourites:", error);
        }
    };

    // Toggle favourite for tutor
    const handleToggleFavourite = async (tutorId) => {
        try {
            const response = await toggleFavouriteApi(tutorId);
            if (response.data.success) {
                setFavourites(prev => {
                    const newSet = new Set(prev);
                    if (newSet.has(tutorId)) {
                        newSet.delete(tutorId);
                    } else {
                        newSet.add(tutorId);
                    }
                    return newSet;
                });
            }
        } catch (error) {
            console.error("Failed to toggle favourite:", error);
        }
    };

    useEffect(() => {
        getFavourites();
    }, []);

    if (loading) {
        return <p className="text-center mt-10">Loading tutors...</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {tutors.length > 0 ? (
                tutors.map((tutor, index) => (
                    <TutorCard
                        key={index}
                        {...tutor}
                        isLiked={favourites.has(tutor._id)}
                        onToggle={() => handleToggleFavourite(tutor._id)}
                    />
                ))
            ) : (
                <p className="text-center col-span-full">No tutors found.</p>
            )}
        </div>
    );
};
