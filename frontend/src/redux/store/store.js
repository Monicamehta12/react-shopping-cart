import {createStore, applyMiddleware} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger'
import rootReducer from "../reducer/rootReducer";

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const logger = createLogger({});

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer,{}, withDevTools(applyMiddleware(thunk,logger)));
export const persistor = persistStore(store);