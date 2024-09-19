import { createSlice } from "@reduxjs/toolkit";

interface StripsState {
    strips: boolean[],
    currentStrip: number;
}

const initialState: StripsState = {
    strips: Array(6).fill(false),
    currentStrip: 0
}

const stripsSlise = createSlice({
    name: 'strips',
    initialState,
    reducers: {
        updateStrip: (state) => {
            if (state.currentStrip < 6) {
                state.strips[state.currentStrip] = true;
                state.currentStrip += 1;
            }
        },
        resetStrip: (state) => {
            state.strips = Array(6).fill(false)
            state.currentStrip = 0
        },
    },
})

export const {updateStrip, resetStrip} = stripsSlise.actions;
export default stripsSlise.reducer;