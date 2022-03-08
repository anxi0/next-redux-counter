import { createSlice } from "@reduxjs/toolkit";
export interface Counter {
  count: number;
}

const initialState: Counter = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

const { actions, reducer } = counterSlice;
export const { increment, decrement } = actions;
export default reducer;
