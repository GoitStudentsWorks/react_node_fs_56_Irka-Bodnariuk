import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router';
import { getMyRecipes } from 'api/index';
import MyRecipeItem from 'components/RecipeItem/MyRecipeItem';
import { Loader } from '../Loader/Loader';

import { List, ListText, LoaderBox } from '../FavoriteList/FavoriteList.styled';

const MyRecipesList = () => {
  const [loading, setLoading] = useState(true);
  const [allRecipes, setAllRecipes] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    const renderMovies = async () => {
      setLoading(true);
      try {
        setAllRecipes(await getMyRecipes());
        // console.log(setAllRecipes);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    renderMovies();
  }, []);

  return (
    <List>
      {loading && (
        <LoaderBox>
          <Loader />
        </LoaderBox>
      )}
      {allRecipes.length !== 0 && !loading ? (
        allRecipes.map(({ description, preview, time, title, _id }) => (
          <MyRecipeItem
            key={_id.$oid}
            description={description}
            preview={preview}
            time={time}
            title={title}
            id={_id}
            // handelDelete={handelDelete}
            styleDel="white"
            styleBtn="dark"
          />
        ))
      ) : (
        <ListText>You don't have your recipes</ListText>
      )}
      {/* { <Paginator /> } */}
    </List>
  );
};

export default MyRecipesList;
