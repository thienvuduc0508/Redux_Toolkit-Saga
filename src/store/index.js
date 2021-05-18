import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware();



const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        const middleware = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).prepend(sagaMiddleware);
        return middleware;
    },
    devTools: true,
})

const persistor = persistStore(store)
sagaMiddleware.run(rootSaga);

export { store, persistor};