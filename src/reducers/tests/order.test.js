// eslint-disable-next-line import/extensions
import order from '../order';
import {
  CHANGE_ORDER,
  POKEMON_NAME,
  POKEMON_TYPE,
  DEX_NUMBER,
  INITIAL_ORDER_STATE,
// eslint-disable-next-line import/extensions
} from '../../constants';

const orderByName = {
  orderBy: POKEMON_NAME,
};

const orderByType = {
  orderBy: POKEMON_TYPE,
};

const orderByNumber = {
  orderBy: DEX_NUMBER,
};

const orderNameAction = {
  type: CHANGE_ORDER,
  order: orderByName,
};

const orderTypeAction = {
  type: CHANGE_ORDER,
  order: orderByType,
};

const orderNumberAction = {
  type: CHANGE_ORDER,
  order: orderByNumber,
};

it('changes order to order by name', () => {
  expect(order(INITIAL_ORDER_STATE, orderNameAction)).toEqual(orderByName);
});

it('changes order to order by type', () => {
  expect(order(INITIAL_ORDER_STATE, orderTypeAction)).toEqual(orderByType);
});

it('changes order to order by number', () => {
  expect(order(INITIAL_ORDER_STATE, orderNumberAction)).toEqual(orderByNumber);
});
