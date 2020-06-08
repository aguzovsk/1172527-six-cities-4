import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const settings = {
    PLACES_COUNT: 5,
  };

  ReactDOM.render(
    <App
      placesCount={settings.PLACES_COUNT}
    />,
    document.querySelector(`#root`)
  );
};

init();
