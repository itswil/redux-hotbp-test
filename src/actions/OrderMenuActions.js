import * as types from '../constants/ActionTypes';

export function addItem(id) {
  return {
    type: types.ADD_ORDER_ITEM,
    id
  };
}

export function removeItem(id) {
  return {
    type: types.REMOVE_ITEM,
    id
  };
}
