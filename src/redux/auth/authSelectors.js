export const getUsername = state => state.auth.user?.name;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getToken = state => state.auth.token;
