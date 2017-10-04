const search = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SEARCH':
      return {
        ...state.search,
        minPrice: action.prices.minPrice,
        maxPrice: action.prices.maxPrice
      }
    default:
      return state
  }
}

export default search;