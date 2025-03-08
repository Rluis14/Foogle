import React, { useContext, useState } from 'react';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import './Profile.css';
import { AuthContext } from '../../context/AuthContext';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const dummyReviews = [
  {
    id: 1,
    title: 'Delicious Pasta',
    description: 'This pasta was absolutely amazing! The sauce was rich and flavorful.',
    rating: 5,
    imgSrc: 'https://www.simplyrecipes.com/thmb/Boo37yZBqeSpmELBIP_BBX_yVlU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-And-Meatballs-LEAD-3-40bdae68ea144751a8e0a4b0f972af2d.jpg',
    username: 'User test'
  },
  {
    id: 2,
    title: 'Tasty Burger',
    description: 'The burger was juicy and cooked to perfection. Highly recommend!',
    rating: 4,
    imgSrc: 'https://www.simplyrecipes.com/thmb/Boo37yZBqeSpmELBIP_BBX_yVlU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-And-Meatballs-LEAD-3-40bdae68ea144751a8e0a4b0f972af2d.jpg',
    username: 'User test'
  },
  {
    id: 3,
    title: 'Yummy Pizza',
    description: 'The pizza had a perfect crust and the toppings were fresh and delicious.',
    rating: 5,
    imgSrc: 'https://www.simplyrecipes.com/thmb/Boo37yZBqeSpmELBIP_BBX_yVlU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-And-Meatballs-LEAD-3-40bdae68ea144751a8e0a4b0f972af2d.jpg',
    username: 'User test'
  },
  {
    id: 4,
    title: 'Amazing Salad',
    description: 'This salad was a delightful mix of fresh greens, crunchy vegetables, and a tangy dressing. The portion size was generous, and the flavors were perfectly balanced. I especially loved the addition of avocado and the sprinkle of nuts on top. It was a refreshing and satisfying meal that I would definitely order again. Highly recommend for anyone looking for a healthy and delicious option! The salad was not only tasty but also visually appealing with vibrant colors. The dressing was light yet flavorful, complementing the fresh ingredients perfectly. It was a great choice for a light lunch or a side dish. The combination of textures and flavors made every bite enjoyable. I will definitely be coming back for more. The service was also excellent, with friendly staff and quick service. Overall, a fantastic experience!',
    rating: 5,
    imgSrc: 'https://www.simplyrecipes.com/thmb/Boo37yZBqeSpmELBIP_BBX_yVlU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-And-Meatballs-LEAD-3-40bdae68ea144751a8e0a4b0f972af2d.jpg',
    username: 'User test'
  }
];

const dummyRecipes = [
  {
    id: 5,
    title: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    rating: 5,
    imgSrc: 'https://www.simplyrecipes.com/thmb/Boo37yZBqeSpmELBIP_BBX_yVlU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-And-Meatballs-LEAD-3-40bdae68ea144751a8e0a4b0f972af2d.jpg',
    username: 'User test'
  },
  {
    id: 6,
    title: 'Chicken Alfredo',
    description: 'Creamy Alfredo sauce with tender chicken served over fettuccine pasta.',
    rating: 4,
    imgSrc: 'https://www.simplyrecipes.com/thmb/Boo37yZBqeSpmELBIP_BBX_yVlU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-And-Meatballs-LEAD-3-40bdae68ea144751a8e0a4b0f972af2d.jpg',
    username: 'User test'
  }
];

const dummyRecipesOwner = [
  {
    id: 7,
    title: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    rating: 5,
    imgSrc: 'https://www.simplyrecipes.com/thmb/Boo37yZBqeSpmELBIP_BBX_yVlU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-And-Meatballs-LEAD-3-40bdae68ea144751a8e0a4b0f972af2d.jpg',
    username: 'User test'
  },
  {
    id: 8,
    title: 'Chicken Alfredo',
    description: 'Creamy Alfredo sauce with tender chicken served over fettuccine pasta.',
    rating: 4,
    imgSrc: 'https://www.simplyrecipes.com/thmb/Boo37yZBqeSpmELBIP_BBX_yVlU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-And-Meatballs-LEAD-3-40bdae68ea144751a8e0a4b0f972af2d.jpg',
    username: 'User test'
  }
];
const sections = [
  {
    type: 'saved_recipes',
    name: 'User Saved Recipes',
    url:'saved_recipes'
  },
  {
    type: 'created_recipes',
    name: 'User Recipe Created',
    url:'created_recipes'
  },
  {
    type: 'reviews',
    name: 'User\'s Review',
    url:'review',
  }
];
const determineSection = (path)=>{
  const subpaths = path.split('/');
  return subpaths[2]||'';
}
const Profile = () => {
  const location = useLocation();
  const [selectedSection, setSelectedSection] = useState(determineSection(location.pathname));
  const navigate = useNavigate();
  const renderSection = () => {
    const section = sections.find(sec => sec.type === selectedSection);
    //fetch data here
    let data = [];
    if(selectedSection === 'saved_recipes') data = dummyRecipes; 
    else if(selectedSection === 'reviews') data = dummyReviews; 
    else if(selectedSection === 'created_recipes') data = dummyRecipesOwner;
    const {Component} = section; 
    return section ? <Component data={data} onClick/> : null;
  };
  const onClickSection= (section)=>{
    navigate(section.url);
    setSelectedSection(section.type);
  }

  return (
    <div className="profile_container">
      <div className="profile_sidebar">
          {sections.map((section) => {
            const isSelected = section.type===selectedSection;
            return (
              <div className={isSelected?'selected':undefined} key={section.type+isSelected} onClick={() => onClickSection(section)}>
                {section.name}
              </div>
            )
          })}
          {/* <li onClick={() => setSelectedSection(null)}>Home</li> */}
      </div>
      <div className='display_container'>
        <Outlet/>
      </div>
    </div>
  );
};


export default Profile;