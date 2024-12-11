import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState: { cards: {} },
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = { id, front, back };
    },
  },
});

export const selectCards = (state) => state.cards.cards;
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
