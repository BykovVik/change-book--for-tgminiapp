import { RootState } from './index';

export const selectStrips = (state: RootState) => state.strips.strips;
export const selectCurrentStrip = (state: RootState) => state.strips.currentStrip;