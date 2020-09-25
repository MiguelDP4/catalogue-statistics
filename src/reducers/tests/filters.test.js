// eslint-disable-next-line import/extensions
import filters from '../filters';
// eslint-disable-next-line import/extensions
import { CHANGE_FILTER, INITIAL_FILTER_STATE } from '../../constants';

const filterGround = {
  type: 'ground',
  name: '',
};

const filterFlyingWithPi = {
  type: 'flying',
  name: 'pi',
};

const filterGroundTypes = {
  type: CHANGE_FILTER,
  filter: filterGround,
};

const filterBirdsWithPi = {
  type: CHANGE_FILTER,
  filter: filterFlyingWithPi,
};

it('changes filter to be ground types', () => {
  expect(filters(INITIAL_FILTER_STATE, filterGroundTypes)).toEqual(filterGround);
});

it('changes filter to be flying type with pi on their name', () => {
  expect(filters(INITIAL_FILTER_STATE, filterBirdsWithPi)).toEqual(filterFlyingWithPi);
});
