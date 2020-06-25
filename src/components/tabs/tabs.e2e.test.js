import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tabs from './tabs.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`E2E tests on Tabs component`, () => {
  const mockFn = jest.fn();
  const tabs = shallow(<Tabs onTabClickHandler={mockFn}/>);

  it(`Click on Amsterdam`, () => {
    const amsterdam = tabs.find(`.amsterdam`);
    amsterdam.simulate(`click`);
    expect(mockFn).toHaveBeenCalled();
  });

  it(`Click on Cologne`, () => {
    const cologne = tabs.find(`.cologne`);
    cologne.props().onClick();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it(`Click on Dusseldorf`, () => {
    const dusseldorf = tabs.find(`.dusseldorf`);
    dusseldorf.prop(`onClick`)();
    expect(mockFn.mock.calls.length).toBe(3);
  });
});
