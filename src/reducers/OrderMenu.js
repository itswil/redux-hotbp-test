const initialState = {
  menuItems: [1, 2],
  menuItemsById: {
    1: {
      'id': 1,
      'name': 'Pollock Tail',
      'description': 'Served with baby leeks, gnocchi and pancetta, prosecco cream',
      'price': '16'
    },
    2: {
      'id': 2,
      'name': 'Lamb Canon and Breast',
      'description': 'Served with olive oil mash, kale and anchovy butter',
      'price': '15'
    }
  },

  orderItems: [
    {
      id: 1,
      quantity: 9
    },
    {
      id: 2,
      quantity: 3
    }
  ]
};

export default function menuItems(state = initialState, action) {

  switch (action.type) {

    case types.ADD_ORDER_ITEM:
      const newId = state.items[state.items.length-1] + 1;
      return {
        items: state.items.concat(newId),
        itemsById: {
          ...state.itemsById,
          [newId]: {
            id: newId,
            name: action.name
          }
        }
      }

    default:
      return state;

  }
}
