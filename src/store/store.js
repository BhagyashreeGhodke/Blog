import {configureStore} from '@reduxjs/toolkit'
import blogReducer from './authSlice'

const store = configureStore({
    reducer: {
        blogReducer
    }
})

export default store