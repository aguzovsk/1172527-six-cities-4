import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Tabs} from './tabs.jsx';
import {cities} from '../../const.js';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`E2E tests on Tabs component`, () => {
  const mockFn = jest.fn();
  const mockEvent = {
    persist() {}
  };
  const citiesNames = Array.from(cities.keys());
  const tabs = shallow(<Tabs onCityClick={mockFn} citiesList={citiesNames} currentCity={cities.get(`Amsterdam`)} />);

  it(`Click on Amsterdam`, () => {
    const amsterdam = tabs.find(`.amsterdam .locations__item-link`);
    amsterdam.simulate(`click`, mockEvent);
    expect(mockFn).toHaveBeenCalled();
  });

  it(`Click on Cologne`, () => {
    const cologne = tabs.find(`.cologne .locations__item-link`);
    cologne.props().onClick(mockEvent);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it(`Click on Dusseldorf`, () => {
    const dusseldorf = tabs.find(`.dusseldorf .locations__item-link`);
    dusseldorf.prop(`onClick`)(mockEvent);
    expect(mockFn.mock.calls.length).toBe(3);
  });
});
