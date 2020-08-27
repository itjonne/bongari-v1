import data from '../data/objects.json';

const defaultState = {
  data,
  user: {
    username: 'user',
    email: 'user@email.com',
    bongaukset: [{name: 'kissa', species: 'nisakas'}, {name: 'koira', species: 'nisakas'}, {name: 'kala', species: 'kala'}],
    achievements: [{name: 'testi'}],
    level: 3,
  }
}

export const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_BONGAUS':
      try {
        console.log(action.payload);
        console.log(state);
        return state;
      } catch (error) {
        throw(error);
      }
    default: return state;         
  }
}