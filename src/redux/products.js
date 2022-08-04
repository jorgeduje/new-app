// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// ** Axios Imports
import axios from "axios"

export const getProducts = createAsyncThunk(
  "getProducts",
  async () => {
    const response = await axios.get("https://boiling-lake-46032.herokuapp.com/api/v1/products")
    return {
        products: response.data.data.products
    }
  }
)

export const productsSlice = createSlice({
    name: "products",
    initialState: {
      products: []
    },
    reducers: {
     
    },
    extraReducers: (builder) => {
      builder
        .addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload.products
        })
    }
  })
  
  export const { handleSearchQuery } = productsSlice.actions
  
  export default productsSlice.reducer