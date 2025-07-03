

import { useState, useRef } from "react";
import { Star, ArrowRight, ArrowLeft } from "lucide-react";
import TutorCard from "../components/TutorCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import CategorySection from "../components/CategorySection.jsx";
import Hero from "../components/Hero.jsx";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleStart, setVisibleStart] = useState(0);
  const scrollRef = useRef(null);

  const categories = [
    
    { icon: "📊", label: "Maths" },
    { icon: "🔬", label: "Physics" },
    { icon: "⚗️", label: "Chemistry" },
    { icon: "🎨", label: "Art & Design" },
    { icon: "🏺", label: "History" },
    { icon: "🎭", label: "Language" },
    { icon: "🎵", label: "Music" },
    { icon: "💻", label: "Computer" },
    { icon: "🏃", label: "Sports" },
    { icon: "📚", label: "Literature" },
    { icon: "🌍", label: "Geography" }
  ];

  const tutors = [
    { name: "Chrys", subject: "Soutien scolaire", location:"Butwal", mode:"Online",description: "Personnalise ses cours selon vos besoins avec une approche bienveillante et motivante.", rating: 4.9, price: "67€/h", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"},
    { name: "Adrien", subject: "Guitare",location:"Butwal",mode:"Online", description: "Cours de guitare pour débutants et avancés avec une méthode progressive et ludique.", rating: 4.8, price: "45€/h", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" },
    { name: "Florent", subject: "Maths",location:"Butwal",mode:"Online", description: "Enseignant de mathématiques passionné, aide étudiants de tous niveaux.", rating: 4.9, price: "55€/h", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" },
    { name: "Fleur", subject: "Coaching Sportif",location:"Butwal",mode:"Online", description: "Entraîneuse personnelle spécialisée dans la remise en forme et le bien-être.", rating: 4.7, price: "50€/h", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" },
    { name: "Samuel", subject: "Tennis",location:"Butwal", mode:"Online",description: "Joueur de tennis professionnel offrant des cours pour tous niveaux.", rating: 4.8, price: "60€/h", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" },
    { name: "Jean-Luc", subject: "Piano",location:"Butwal",mode:"Online", description: "Professeur de piano expérimenté, cours adaptés à tous les âges.", rating: 4.9, price: "55€/h", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" },
    { name: "Aline", subject: "Biologie", location:"Butwal",mode:"Online",description: "Docteure en biologie, spécialisée en soutien universitaire.", rating: 4.9, price: "58€/h", image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80" },
    { name: "Lucas", subject: "Anglais", location:"Butwal",mode:"Online",description: "Prof d'anglais natif avec 10 ans d'expérience à l'étranger.", rating: 4.8, price: "47€/h", image: "https://images.unsplash.com/photo-1603415526960-f8f6d2c4b451?auto=format&fit=crop&w=800&q=80" },
    { name: "Emma", subject: "Design graphique",location:"Butwal",mode:"Online", description: "Graphiste professionnelle, donne cours sur Photoshop et Illustrator.", rating: 4.7, price: "50€/h", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80" },
    { name: "Thomas", subject: "Photographie",location:"Butwal",mode:"Online", description: "Photographe indépendant partage ses techniques de pro.", rating: 4.8, price: "52€/h", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80" },
    { name: "Laura", subject: "Histoire",location:"Butwal",mode:"Online", description: "Passionnée d'histoire, aide les élèves à préparer leurs examens.", rating: 4.6, price: "48€/h", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=800&q=80" },
    { name: "Nicolas", subject: "Espagnol",location:"Butwal",mode:"Online", description: "Professeur bilingue espagnol/français, cours dynamiques.", rating: 4.9, price: "53€/h", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80" }
  ];

  const testimonials = [
    {
      name: "Rachel",
      role: "Mathematics tutor",
      content:
        "Rachel is awesome! She's super patient with me and makes sure I fully understand concepts in detail. She also makes math fun by cracking some jokes!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      backgroundColor: "bg-yellow-200",
      author: "Christa"
    },
    {
      name: "Austin",
      role: "Yoga tutor",
      content:
        "Austin is an amazing teacher. He is calm and attentive. I highly recommend him to anyone looking for a tutor.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      backgroundColor: "bg-green-100",
      author: "Mark"
    },
    {
      name: "Léa",
      role: "English tutor",
      content:
        "Léa helped me gain confidence speaking English. Her sessions are dynamic and very encouraging!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/48.jpg",
      backgroundColor: "bg-purple-100",
      author: "Sophia"
    }
  ];

  // const visibleTutors = tutors.slice(visibleStart, visibleStart + 6);

  // Filter tutors based on search query but kam garerko chaina yet
  const filteredTutors = tutors.filter(
    (tutor) =>
      tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const visibleTutors = filteredTutors.slice(visibleStart, visibleStart + 6);
  

  const handlePrev = () => {
    setVisibleStart((prev) => Math.max(prev - 6, 0));
  };

  const handleNext = () => {
    if (visibleStart + 6 < tutors.length) {
      setVisibleStart((prev) => prev + 6);
    }
  };

  return (
    <div className="min-h-screen bg-white">
    <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

<CategorySection
  categories={categories}
  activeCategory={activeCategory}
  setActiveCategory={setActiveCategory}
/>

      {/* Featured Tutors */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Mostly Reviewed Tutors</h2>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visibleTutors.map((tutor, index) => (
            <TutorCard key={index} {...tutor} />
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handlePrev}
            disabled={visibleStart === 0}
            className="px-4 py-2 rounded-full border text-coral-500 hover:bg-coral-50 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={visibleStart + 6 >= tutors.length}
            className="px-4 py-2 rounded-full border text-coral-500 hover:bg-coral-50 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </section>

      {/* Testimonials Section with Scroll and Arrows */}
      <section className="w-full overflow-hidden py-20 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-8" ref={scrollRef}>
            <div className="flex-shrink-0 bg-white rounded-3xl p-8 shadow border border-gray-200 w-[450px] min-w-[450px] snap-start">
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">The Perfect Match</h3>
              <p className="text-gray-700 text-base">
                More than one million students gave a <span className="font-bold">5 star review</span> to their tutor
              </p>
              <div className="flex justify-center gap-6 mt-6">
                <button
                  onClick={() => scrollRef.current.scrollBy({ left: -400, behavior: "smooth" })}
                  className="bg-white border rounded-full p-2 shadow-md"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-800" />
                </button>
                <button
                  onClick={() => scrollRef.current.scrollBy({ left: 400, behavior: "smooth" })}
                  className="bg-white border rounded-full p-2 shadow-md"
                >
                  <ArrowRight className="w-5 h-5 text-gray-800" />
                </button>
              </div>
            </div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="snap-start transition-all duration-300 hover:scale-105 hover:opacity-100 opacity-60">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>
           {/* Become a Tutor Section */}
<section className="w-full px-4 pb-20">
  <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200&q=80"
      alt="Become a tutor"
      className="w-full h-[400px] object-cover"
    />
    <div className="absolute right-6 bottom-6 bg-[#FEE4D6] p-6 rounded-2xl max-w-sm shadow-lg">
      <h3 className="text-2xl font-black text-gray-900 mb-2">You can become a great tutor too!</h3>
      <p className="text-gray-700 text-sm mb-4">
        Share your knowledge, live off your passion and become your own boss
      </p>
      <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-semibold flex items-center gap-2">
        Find out more <span>☆</span>
      </button>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;

