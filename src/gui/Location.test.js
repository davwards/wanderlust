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
    n => n.type() === 'button' && n.prop('aria-label') === 'discard location'
  );

  discardButton.simulate('click');

  expect(discardSpy).toHaveBeenCalledWith(2);
});

it('invokes the favorite handler with the location id when the favorite button is clicked', () => {
  const favoriteSpy = jest.fn();

  const component = mount(
    <Location
      location={{
        id: 2,
        title: 'Some Location',
        image: 'some-image.png',
      }}

      onFavorite={favoriteSpy}
    />
  );

  const favoriteButton = component.findWhere(
    n => n.type() === 'button' && n.prop('aria-label') === 'favorite location'
  );

  favoriteButton.simulate('click');

  expect(favoriteSpy).toHaveBeenCalledWith(2);
});
