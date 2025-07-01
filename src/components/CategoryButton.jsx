// const CategoryCard = ({ title, icon }) => {
//     return (
//       <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg text-center">
//         <div className="text-3xl mb-3">{icon}</div>
//         <h3 className="font-semibold text-lg">{title}</h3>
//       </div>
//     );
//   };
  
//   export default CategoryCard;
  


const CategoryButton = ({ icon, label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 ${
        isActive 
          ? 'bg-coral-500 text-white shadow-lg' 
          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-coral-500 border border-gray-100 shadow-sm'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-xs font-medium text-center leading-tight">{label}</span>
    </button>
  );
};

export default CategoryButton;
