import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get("query");

  return (
    <div className="pt-24 px-6">
      <h2 className="text-xl font-bold mb-4">Search Results for: "{query}"</h2>
      {/* Replace below with real results */}
      <p className="text-gray-600">[Display tutors related to "{query}" here]</p>
    </div>
  );
};

export default SearchResults;
