import { configureStore } from "@reduxjs/toolkit";
import stripReduser from './stripsSlises';

export const store = configureStore({
    reducer: {
        strips: stripReduser,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;