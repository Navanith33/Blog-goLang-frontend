import { configureStore, Reducer, AnyAction, combineReducers } from "@reduxjs/toolkit";
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from "redux-saga";
import reducer from '../features/slice' 

// Define the function that creates the root reducer
const createReducer = (injectedReducers: { [key: string]: Reducer } = {}) => {
  return combineReducers({
    login: reducer.loginReducer,
    signup: reducer.signupReducer,
    Blog:reducer.blogReducer,
    AddBlog:reducer.AddBlogReducer,
    userBlog:reducer.userblogReducer,
    ...injectedReducers,
  });
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  enhancers: [
    createInjectorsEnhancer({
      createReducer,
      runSaga: sagaMiddleware.run,
    }),
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;