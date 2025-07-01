
// import { useState } from "react";
// import { Search, Star, ArrowRight } from "lucide-react";
// import TutorCard from "../components/TutorCard.jsx";
// import TestimonialCard from "../components/TestimonialCard.jsx";
// import CategoryButton from "../components/CategoryButton.jsx";

// const Home = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeCategory, setActiveCategory] = useState("All");

//   const categories = [
//     { icon: "🎓", label: "All" },
//     { icon: "📊", label: "Maths" },
//     { icon: "🔬", label: "Physics" },
//     { icon: "⚗️", label: "Chemistry" },
//     { icon: "🎨", label: "Art & Design" },
//     { icon: "🏺", label: "History" },
//     { icon: "🎭", label: "Language" },
//     { icon: "🎵", label: "Music" },
//     { icon: "💻", label: "Computer" },
//     { icon: "🏃", label: "Sports" },
//     { icon: "📚", label: "Literature" },
//     { icon: "🌍", label: "Geography" }
//   ];

//   const tutors = [
//     {
//       name: "Chrys",
//       subject: "Soutien scolaire",
//       description: "Personnalise ses cours selon vos besoins avec une approche bienveillante et motivante.",
//       rating: 4.9,
//       price: "67€/h",
//       image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
//       verified: true
//     },
//     {
//       name: "Adrien",
//       subject: "Guitare",
//       description: "Cours de guitare pour débutants et avancés avec une méthode progressive et ludique.",
//       rating: 4.8,
//       price: "45€/h",
//       image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
//     },
//     {
//       name: "Florent",
//       subject: "Maths",
//       description: "Enseignant de mathématiques passionné, aide étudiants de tous niveaux.",
//       rating: 4.9,
//       price: "55€/h",
//       image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
//     },
//     {
//       name: "Fleur",
//       subject: "Coaching Sportif",
//       description: "Entraîneuse personnelle spécialisée dans la remise en forme et le bien-être.",
//       rating: 4.7,
//       price: "50€/h",
//       image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
//     },
//     {
//       name: "Samuel",
//       subject: "Tennis",
//       description: "Joueur de tennis professionnel offrant des cours pour tous niveaux.",
//       rating: 4.8,
//       price: "60€/h",
//       image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
//     },
//     {
//       name: "Jean-Luc",
//       subject: "Piano",
//       description: "Professeur de piano expérimenté, cours adaptés à tous les âges.",
//       rating: 4.9,
//       price: "55€/h",
//       image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Kate",
//       role: "Prof de biologie",
//       content: "Kate est super! Même en tant qu'élève avancée, j'apprends plein de nouvelles choses. J'ai beaucoup apprécié son attention aux détails et ses connaissances sur les nuances entre l'anglais américain et britannique. J'ai hâte de continuer!",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=100&q=80",
//       backgroundColor: "bg-yellow-100"
//     },
//     {
//       name: "Maxime",
//       role: "Prof de création de site web",
//       content: "Super prof ! À l'écoute, comprenant notre problématique de débutant. Explique très bien et 'vulgarise' le vocabulaire informatique pour que je puisse mieux comprendre :)",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=100&q=80",
//       backgroundColor: "bg-green-100"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
//         <div className="container mx-auto px-4 py-4">
//           <nav className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-gradient-to-r from-coral-500 to-orange-500 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-sm">T</span>
//               </div>
//               <span className="text-xl font-bold text-gray-800">Tutor</span>
//             </div>
            
//             <div className="hidden md:flex items-center gap-8">
//               <a href="#" className="text-gray-600 hover:text-coral-500 transition-colors">Home</a>
//               <a href="#" className="text-gray-600 hover:text-coral-500 transition-colors">Find Tutors</a>
//               <a href="#" className="text-gray-600 hover:text-coral-500 transition-colors">Become a Tutor</a>
//               <a href="#" className="text-gray-600 hover:text-coral-500 transition-colors">Login</a>
//             </div>
            
//             <div className="flex items-center gap-4">
//               <button className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
//                 Become a Tutor
//               </button>
//               <button className="text-gray-600 hover:text-coral-500 transition-colors">
//                 Login
//               </button>
//             </div>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="container mx-auto px-4 py-20">
//         <div className="text-center mb-16">
//           <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
//             Find<br />
//             <span className="text-coral-500">the perfect tutor</span>
//           </h1>
          
//           <div className="max-w-2xl mx-auto mb-12">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="What would you like to search?"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full px-6 py-4 pl-12 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent text-lg shadow-sm"
//               />
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
//                 Search
//               </button>
//             </div>
//           </div>

//           {/* Categories */}
//           <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 max-w-7xl mx-auto">
//             {categories.map((category) => (
//               <CategoryButton
//                 key={category.label}
//                 icon={category.icon}
//                 label={category.label}
//                 isActive={activeCategory === category.label}
//                 onClick={() => setActiveCategory(category.label)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Tutors */}
//       <section className="container mx-auto px-4 py-16">
//         <div className="flex items-center gap-2 mb-8">
//           <h2 className="text-3xl font-bold text-gray-800">Mostly Reviewed Tutors</h2>
//           <div className="flex items-center gap-1">
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//             ))}
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//           {tutors.map((tutor, index) => (
//             <TutorCard key={index} {...tutor} />
//           ))}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//           <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
//             <div className="flex items-center gap-2 mb-4">
//               <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
//               <span className="text-2xl font-bold text-gray-800">L'alchimie parfaite</span>
//             </div>
//             <p className="text-gray-600 mb-6">
//               Plus d'un million d'élèves ont déjà trouvé leur professeur idéal. Rejoignez-les aujourd'hui !
//             </p>
//             <button className="flex items-center gap-2 text-coral-500 font-medium hover:gap-3 transition-all">
//               En savoir plus <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>
          
//           <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
//             {testimonials.map((testimonial, index) => (
//               <TestimonialCard key={index} {...testimonial} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="container mx-auto px-4 py-16">
//         <div className="bg-gradient-to-r from-coral-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
//           <div className="relative z-10">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Vous aussi,<br />
//               <span className="underline">devenez super professeur</span>
//             </h2>
//             <p className="text-lg mb-8 opacity-90">
//               Partagez votre savoir, vivez de votre passion et devenez indépendant.
//             </p>
//             <button className="bg-white text-coral-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
//               En savoir plus <Star className="w-4 h-4" />
//             </button>
//           </div>
          
//           <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mb-32"></div>
//           <div className="absolute left-0 top-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16"></div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="font-semibold mb-4">À propos</h3>
//               <ul className="space-y-2 text-sm text-gray-400">
//                 <li><a href="#" className="hover:text-white transition-colors">Qui sommes-nous</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Nos valeurs</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Matières</h3>
//               <ul className="space-y-2 text-sm text-gray-400">
//                 <li><a href="#" className="hover:text-white transition-colors">Arts & loisirs</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Développement professionnel</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Informatique</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Ressources</h3>
//               <ul className="space-y-2 text-sm text-gray-400">
//                 <li><a href="#" className="hover:text-white transition-colors">Superprod Magazine</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Blog des Enseignants</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Assistance</h3>
//               <ul className="space-y-2 text-sm text-gray-400">
//                 <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
//             © 2024 TutorFinder. La meilleure façon d'apprendre.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;
import { useState } from "react";
import { Star, ArrowRight } from "lucide-react";
import TutorCard from "../components/TutorCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import CategoryButton from "../components/CategoryButton.jsx";
import Hero from "../components/Hero.jsx";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { icon: "🎓", label: "All" },
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
    {
      name: "Chrys",
      subject: "Soutien scolaire",
      description: "Personnalise ses cours selon vos besoins avec une approche bienveillante et motivante.",
      rating: 4.9,
      price: "67€/h",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      verified: true
    },
    {
      name: "Adrien",
      subject: "Guitare",
      description: "Cours de guitare pour débutants et avancés avec une méthode progressive et ludique.",
      rating: 4.8,
      price: "45€/h",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Florent",
      subject: "Maths",
      description: "Enseignant de mathématiques passionné, aide étudiants de tous niveaux.",
      rating: 4.9,
      price: "55€/h",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Fleur",
      subject: "Coaching Sportif",
      description: "Entraîneuse personnelle spécialisée dans la remise en forme et le bien-être.",
      rating: 4.7,
      price: "50€/h",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Samuel",
      subject: "Tennis",
      description: "Joueur de tennis professionnel offrant des cours pour tous niveaux.",
      rating: 4.8,
      price: "60€/h",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Jean-Luc",
      subject: "Piano",
      description: "Professeur de piano expérimenté, cours adaptés à tous les âges.",
      rating: 4.9,
      price: "55€/h",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Kate",
      role: "Prof de biologie",
      content: "Kate est super! Même en tant qu'élève avancée, j'apprends plein de nouvelles choses...",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=100&q=80",
      backgroundColor: "bg-yellow-100"
    },
    {
      name: "Maxime",
      role: "Prof de création de site web",
      content: "Super prof ! À l'écoute, comprenant notre problématique de débutant...",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=100&q=80",
      backgroundColor: "bg-green-100"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Categories */}
      <section className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 max-w-7xl mx-auto">
          {categories.map((category) => (
            <CategoryButton
              key={category.label}
              icon={category.icon}
              label={category.label}
              isActive={activeCategory === category.label}
              onClick={() => setActiveCategory(category.label)}
            />
          ))}
        </div>
      </section>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tutors.map((tutor, index) => (
            <TutorCard key={index} {...tutor} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              <span className="text-2xl font-bold text-gray-800">L'alchimie parfaite</span>
            </div>
            <p className="text-gray-600 mb-6">
              Plus d'un million d'élèves ont déjà trouvé leur professeur idéal. Rejoignez-les aujourd'hui !
            </p>
            <button className="flex items-center gap-2 text-coral-500 font-medium hover:gap-3 transition-all">
              En savoir plus <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
