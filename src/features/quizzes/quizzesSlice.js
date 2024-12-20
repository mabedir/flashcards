import { createSlice } from '@reduxjs/toolkit';

export const quizzesSlice = createSlice({
  name: 'quizzesSlice',
  initialState: { quizzes: {} },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = { id, name, topicId, cardIds };
    },
  },
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
