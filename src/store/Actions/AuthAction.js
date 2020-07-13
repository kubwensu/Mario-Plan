export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = (payload) => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: "SIGNOUT_SUCCESS" });
    })
    .catch((err) => {
      dispatch({ type: "LOGOUT_ERROR", payload: err });
    });
};

export const signUp = (newUser) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    let cred = await firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password);
    firestore
      .collection("users")
      .doc(cred.user.uid)
      .set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0],
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
  } catch (error) {
    dispatch({ type: "SIGNUP_ERROR", payload: error.message });
  }
};
