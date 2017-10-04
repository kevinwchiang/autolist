export const addSearch = prices => {
  return {
    type: 'ADD_SEARCH',
    prices
  }
}

export const addVehicle = vehicle => {
  return {
    type: 'ADD_VEHICLE',
    vehicle
  }
}
