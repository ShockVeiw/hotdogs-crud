import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotdogs } from '../store/actions/hotdogActions';
import HotdogItem from '../components/Hotdog';

import '../styles/pages/homePage.scss';

function HomePage() {
  const dispatch = useDispatch();
  const hotdogs = useSelector(({ hotdogs }) => hotdogs.data);

  React.useEffect(() => {
    dispatch(fetchHotdogs());
  }, []);
  
  return (
    <main className="home-page">
      <div className="home-page__container">
        <h2 className="home-page__title">All hot-dogs</h2>
        <div className="home-page__items">
          {hotdogs.map((hotdog) => <HotdogItem key={hotdog.id} {...hotdog }/>)}
        </div>
      </div>
    </main>
  );
};

export default HomePage;