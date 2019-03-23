import types from './commentActionsTypes';

const fetchSuccess = comments => ({
  type: types.FETCH_SUCCESS,
  payload: comments,
});

const addCommentSuccess = note => ({
  type: types.ADD_SUCCESS,
  payload: note,
});
const deleteNoteSuccess = id => ({
  type: types.DELETE_SUCCESS,
  payload: id,
});

export default {
  addCommentSuccess,
  deleteNoteSuccess,
  fetchSuccess,
};
