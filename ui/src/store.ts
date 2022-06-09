import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './features/header/AT_HEADER_SLICE';
import searchReducer from './features/search-bar/search_slice';
import loginReducer from './features/login/login_slice';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    search: searchReducer,
    login: loginReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch