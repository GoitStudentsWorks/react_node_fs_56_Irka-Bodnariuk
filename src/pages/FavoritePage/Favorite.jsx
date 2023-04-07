import FavoriteList from 'components/FavoriteList/FavoriteList';
import MainTitle from 'components/MainTitle/MainTitle';
import { Page } from './Favorite.styled';

export const Favorite = () => (
  <Page>
    <MainTitle text="Favorite" />
    <FavoriteList />
  </Page>
);
