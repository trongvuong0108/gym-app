import React from 'react';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Route, Routes } from 'react-router-dom';
import { routes } from './routes/routes';

const App = () => {
  // aos initialization
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  return (
    <Routes>
      {routes.publicRoutes.map(
        (item, index) => {
          return (<Route key={index} path={item.path} element={<item.component />} />)
        }
      )}
    </Routes>

  );
};

export default App;
