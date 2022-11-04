import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../core/common/fakedata";

export const userSlice = createSlice({
    name: "users",
    initialState: {value: UsersData},
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload);
        },
    }
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer;