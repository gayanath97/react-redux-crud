import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import reducers from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension";
import {persistStore,persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig={
  key:'persist-key',
  storage
}
const persistedReducer = persistReducer(persistConfig,reducers);

// export const store = createStore(
//     reducers,
//     {},
//     applyMiddleware(thunk)
// )

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
const persistor = persistStore(store);

//export default store;
export {persistor}