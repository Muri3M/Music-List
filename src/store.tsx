import { createStore, applyMiddleware, Store } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';

import { musicReducer } from './store/reducer';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, musicReducer);

const store: Store<MusicState, MusicAction> & {
  dispatch: DispatchType;
} = createStore(persistedReducer, applyMiddleware(thunk));

export default store;
