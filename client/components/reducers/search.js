const search = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SEARCH':
      return {
        ...state,
        minPrice: action.prices.minPrice,
        maxPrice: action.prices.maxPrice
      }
    case 'ADD_VEHICLE':
      return {
        ...state,
        vehicle: action.vehicle
      }
    default:
      return state
  }
}

export default search;