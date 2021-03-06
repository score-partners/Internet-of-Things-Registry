import React from 'react';
import { shallow } from 'enzyme';

import Values from './';

describe('<Values />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<Values />);
    expect(renderedComponent.find('div').length).toEqual(1);
  });

  it('should render the json ', () => {
    const value = { id: 1, name: 'name' };
    const renderedComponent = shallow(<Values value={value} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
