import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../Api/getSlice";

const configApi = configureStore({
    reducer:{
        post:postSlice
    },
})

export default configApi;