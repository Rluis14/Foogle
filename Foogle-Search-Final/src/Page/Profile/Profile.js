import React, { useContext, useState } from 'react';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import './Profile.css';
import { AuthContext } from '../../context/AuthContext';

const dummyReviews = [
  {
    id: 1,
    title: 'Delicious Pasta',
    description: 'This pasta was absolutely amazing! The sauce was rich and flavorful.',
    rating: 5,
    imgSrc: 'https://via.placeholder.com/300x200',
    username: 'User test'
  },
  {
    id: 2,
    title: 'Tasty Burger',
    description: 'The burger was juicy and cooked to perfection. Highly recommend!',
    rating: 4,
    imgSrc: 'https://via.placeholder.com/300x200',
    username: 'User test'
  },
  {
    id: 3,
    title: 'Yummy Pizza',
    description: 'The pizza had a perfect crust and the toppings were fresh and delicious.',
    rating: 5,
    imgSrc: 'https://via.placeholder.com/300x200',
    username: 'User test'
  },
  {
    id: 4,
    title: 'Amazing Salad',
    description: 'This salad was a delightful mix of fresh greens, crunchy vegetables, and a tangy dressing. The portion size was generous, and the flavors were perfectly balanced. I especially loved the addition of avocado and the sprinkle of nuts on top. It was a refreshing and satisfying meal that I would definitely order again. Highly recommend for anyone looking for a healthy and delicious option! The salad was not only tasty but also visually appealing with vibrant colors. The dressing was light yet flavorful, complementing the fresh ingredients perfectly. It was a great choice for a light lunch or a side dish. The combination of textures and flavors made every bite enjoyable. I will definitely be coming back for more. The service was also excellent, with friendly staff and quick service. Overall, a fantastic experience!',
    rating: 5,
    imgSrc: 'https://via.placeholder.com/300x200',
    username: 'User test'
  }
];

const dummyRecipes = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    rating: 5,
    imgSrc: 'https://via.placeholder.com/300x200',
    username: 'User test'
  },
  {
    id: 2,
    title: 'Chicken Alfredo',
    description: 'Creamy Alfredo sauce with tender chicken served over fettuccine pasta.',
    rating: 4,
    imgSrc: 'https://via.placeholder.com/300x200',
    username: 'User test'
  }
];

const sections = [
  {
    type: 'savedRecipes',
    name: 'User Saved Recipes',
    component: (savedRecipes) => (
        savedRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            description={recipe.description}
            rating={recipe.rating}
            imgSrc={recipe.imgSrc}
            username={recipe.username}
          />
        ))
    )
  },
  {
    type: 'createdRecipes',
    name: 'User Recipe Created',
    component: () => <div>User's Created Recipes</div>
  },
  {
    type: 'reviews',
    name: 'User\'s Review',
    component: (reviews) => (
        reviews.map((review) => (
          <ReviewCard
            key={review.id}
            title={review.title}
            description={review.description}
            rating={review.rating}
            imgSrc={review.imgSrc}
            username={review.username}
          />
        ))
    )
  }
];

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [selectedSection, setSelectedSection] = useState(null);

  const renderSection = () => {
    const section = sections.find(sec => sec.type === selectedSection);
    //fetch data here
    let data = [];
    if(selectedSection === 'savedRecipes') data = dummyRecipes; 
    else if(selectedSection === 'reviews') data = dummyReviews; 
    console.log(data)
    return section ? section.component(data) : null;
  };

  const getSectionTitle = () => {
    const section = sections.find(sec => sec.type === selectedSection);
    return section ? section.name : 'Hello';
  };

  return (
    <div className="profile_container">
      <div className="profile_sidebar">
        <ul>
          {sections.map((section) => {
            const isSelected = section.type===selectedSection;
            console.log(isSelected)
            return (
              <li className={isSelected?'selected':undefined} key={section.type+isSelected} onClick={() => setSelectedSection(section.type)}>
                {section.name}
              </li>
            )
          })}
          {/* <li onClick={() => setSelectedSection(null)}>Home</li> */}
        </ul>
      </div>
      <div className='display_container'>
        <h2 className="profile_title">{getSectionTitle()}</h2>
        <div className="profile_content">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default Profile;