import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface DataState {
  data: { name: string; value: number }[];
  loading: boolean;
  error: string | null;
}


// Sales data
// export interface SalesData {
// 	weekEnding: string;
// 	retailSales: number;
// 	wholesaleSales: number;
// 	unitsSold: number;
// 	retailerMargin: number;
// }

// // The shape of the application's state
// export interface AppState {
// 	productDetails: ProductDetails;
// }


const initialState: DataState = {
   
  data: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<{ data: { name: string; value: number }[] }>) {
      state.loading = false;
      state.data = action.payload.data;
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

export const selectData = (state: RootState) => state.data.data;
export default dataSlice.reducer;
