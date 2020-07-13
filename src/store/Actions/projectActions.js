export const createProject = (payload) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    const id = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...payload,
      authorFirstName: payload.title,
      authorLastName: payload.content,
      authorId: id,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};