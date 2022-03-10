import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { persistedReducer } from './persistedReducer';

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
