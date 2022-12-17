const athleteReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_ATHLETES':
      return {
        ...state,
        athletes: action.payload,
        loading: false,
      };
    case 'GET_ATHLETE_AND_DRAFT':
      return {
        ...state,
        athlete: action.payload.athlete,
        draftAthletes: action.payload.draftAthletes,
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
