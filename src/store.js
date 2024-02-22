import { configureStore, createSlice } from "@reduxjs/toolkit";

//срез(слайс) состояний
const counterSlice = createSlice({
    name: "counter", //название среза, используется при указании редюсеров в хранилище
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});

export const { increment, decrement } = counterSlice.actions;

export default store;
