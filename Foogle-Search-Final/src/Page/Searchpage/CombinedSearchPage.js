import React, { useState } from "react";
import "./CombinedSearchPage.css"; 

const CombinedSearchPage = () => {
  const [query, setQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  
  const foodCategories = ["Barbeque", "Breakfast", "Dessert", "Pasta", "Salad", "Soup"];

  const handleSearch = () => {
    console.log("Searching for:", query);
    console.log("Filtering for:", selectedFilters);
    // Add navigation or API call logic here
  };

  const handleFilterChange = (category) => {
    setSelectedFilters((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="combined-container">
      <img src="/Images/foogle-logo.jpg" alt="Foogle Logo" className="logo" />
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Foogle..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      {/* Search Buttons */}
      <div className="button-container">
        <button onClick={handleSearch} className="search-button">Foogle Search</button>
        <button className="search-button">I'm Feeling Hungry</button>
      </div>

      {/* Filter Section */}
      <div className="filter-options">
        {foodCategories.map((category) => (
          <label key={category} className="filter-label">
            <input
              type="checkbox"
              value={category}
              checked={selectedFilters.includes(category)}
              onChange={() => handleFilterChange(category)}
            />
            {category}
          </label>
        ))}
      </div>

      <button onClick={handleSearch} className="filter-button">Apply Filters</button>
    </div>
  );
};

export default CombinedSearchPage;
