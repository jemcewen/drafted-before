const athleteReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_USERS':
      return {
        ...state,
        athletes: action.payload,
        loading: false,
      };
    case 'CLEAR_ATHLETES':
      return {
        ...state,
        athletes: [],
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default athleteReducer;
