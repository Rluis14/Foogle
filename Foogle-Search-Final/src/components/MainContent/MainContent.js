import { useNavigate } from "react-router-dom";
import './MainContent.css';

const MainContent = () => {
  const navigate = useNavigate();

  return (
    <div className="main-content">
      <div className="get-started">
        <h1>Discover Your Next Favorite Meal</h1>
        <div className="action-buttons">
          <button className="search-btn" onClick={() => navigate("/search")}>
            🔍 Search Recipes
          </button>
          <button className="filter-btn" onClick={() => navigate("/search")}>
            ⚙️ Filter by Diet
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
