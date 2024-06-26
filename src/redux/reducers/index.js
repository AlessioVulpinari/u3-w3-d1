import { configureStore } from "@reduxjs/toolkit"
import mainReducer from "../store"

const store = configureStore({
  reducer: mainReducer,
})

export default store
