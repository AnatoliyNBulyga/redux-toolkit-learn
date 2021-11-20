import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { postAPI } from "../services/PostServices";
import userReducer from './reducers/UserSlice';


const rootReducer = combineReducers({
   userReducer,
   [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaulMiddleware) => getDefaulMiddleware().concat(postAPI.middleware)
})


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']