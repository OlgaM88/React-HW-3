import axios from 'axios';

import actions from './commentActions';

const addComment = text => dispatch => {
  dispatch(actions.fetchRequest());
  axios
    .post('http://localhost:4040/notes', { text, completed: false })
    .then(({ data }) => dispatch(actions.addNoteSuccess(data)))
    .catch(error => dispatch(actions.fetchError(error)));
};

const deleteComment = id => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .delete(`http://localhost:4040/notes/${id}`)
    .then(() => {
      dispatch(actions.deleteNoteSuccess(id));
    })
    .catch(error => {
      dispatch(actions.fetchError(error));
    });
};
export default { addComment, deleteComment };
