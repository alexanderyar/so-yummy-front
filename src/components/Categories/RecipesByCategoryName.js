import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchRecipesByCategory } from '../../services/api/httpRequests';
import { RecipeCard } from 'components/Main/RecipeCard/RecipeCard';
import toast from 'react-hot-toast';
import Loader from '../Loader/Loader';

import { List } from './RecipesByCategoryName.styled.js';

export const RecipesbyCategoryName = () => {
  const { categoryName: category } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setIsLoading(true);
        const recipes = await fetchRecipesByCategory(category);

        setRecipes(recipes);
      } catch (error) {
        setError(toast.error('Sorry, something went wrong...'));
      } finally {
        setIsLoading(false);
      }
    };

    getRecipes();
  }, [category]);
  return (
    <>
      {isLoading && <Loader />}
      {recipes.length > 0 && !error && !isLoading && (
        <List>
          {recipes.map(({ _id, preview, title }) => {
            return (
              <RecipeCard key={_id} id={_id} img={preview} title={title} />
            );
          })}
        </List>
      )}
      {!isLoading && !error && recipes.length === 0}
    </>
  );
};
