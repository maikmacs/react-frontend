import React from 'react';
import { shallow } from 'enzyme';

import PropiedadesList from './PropiedadesList';

describe('PropiedadesList', () => {
  it('Debe renderar correctamente', () => {
    const component = shallow(<PropiedadesList />);
    expect(component).toMatchSnapshot();
  });
});
