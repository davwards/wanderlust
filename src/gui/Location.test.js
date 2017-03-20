import React from 'react';
import { mount } from 'enzyme';
import Location from './Location';

it('invokes the discard handler with the location id when the discard button is clicked', () => {
  const discardSpy = jest.fn();

  const component = mount(
    <Location
      location={{
        id: 2,
        title: 'Some Location',
        image: 'some-image.png',
      }}

      onDiscard={discardSpy}
    />
  );

  const discardButton = component.findWhere(
    n => n.type() === 'button' && n.text() === 'X'
  );

  discardButton.simulate('click');

  expect(discardSpy).toHaveBeenCalledWith(2);
});
