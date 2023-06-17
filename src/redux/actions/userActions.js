export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

export const setCurrentUserId = (userId) => ({
  type: "SET_USER_ID",
  payload: userId,
});
