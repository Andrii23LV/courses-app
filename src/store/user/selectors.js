export const isAuth = (state) => state.userStore.isAuth;

export const user = (state) => state.userStore;

export const role = (state) => state.userStore?.role;

export const token = (state) => state.userStore.token;
