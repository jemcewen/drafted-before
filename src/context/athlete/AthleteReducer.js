const athleteReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_USERS':
      return {
        ...state,
        athletes: action.payload,
        loading: false,
      };
    case 'GET_ATHLETE':
      return {
        ...state,
        athlete: action.payload,
        loading: false,
      };
    case 'GET_DRAFT_ATHLETES':
      return {
        ...state,
        draftAthletes: action.payload,
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
