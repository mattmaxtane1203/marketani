const initialState = {
  currentUser: null,
  currentUserId: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.payload };
    case "SET_USER_ID":
      return { ...state, userId: action.payload };
    default:
      return state;
  }
};
