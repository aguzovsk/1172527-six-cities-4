import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app.jsx';
import offersAmsterdam from '../../test-mock/offers-amsterdam.js';

configure({adapter: new Adapter()});

it(`e2e test app`, () => {
  const app = mount(<App offers={offersAmsterdam} />);

  const firstTitle = app.first(`.place-card__name a`);
  firstTitle.simulate(`click`);

  const map = app.find(`.property__map`);

  expect(map.exists()).toEqual(false);
  expect(app.find(`.place-card__name`).length).toBe(6);
  expect(app.find(`.place-card__name a`).length).toBe(6);
});
