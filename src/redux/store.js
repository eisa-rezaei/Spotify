import { compose, createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./index";
import createSagaMiddleware from "@redux-saga/core";
import watchSaga from "./user/sagas";

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const devtool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();

const store = () => {
  let store = createStore(
    persistedReducer,
    compose(applyMiddleware(sagaMiddleware), devtool)
  );
  let persistor = persistStore(store);
  sagaMiddleware.run(watchSaga);
  return { store, persistor };
};

export default store;
