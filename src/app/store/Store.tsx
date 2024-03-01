import productSlice from "./features/Product";
import cartSlice from "./features/Cart";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const persistconfig = {
  key: "root",
  version: 1,
  storage,
};
const reducers = combineReducers({
  products: productSlice,
  cart: cartSlice,
});
const persistedReducer = persistReducer(persistconfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
