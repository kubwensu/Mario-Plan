import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootreducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  ReactReduxFirebaseProvider,
  getFirebase
} from "react-redux-firebase";
import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore,
} from "redux-firestore";
import firebase from "firebase/app";
import fbConfig from "./Config/fbConfig";
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return null;
  return children
}


const store = createStore(
  rootreducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig, firebase),
  )
);


const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

  ReactDOM.render(
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>  
          <App />
          </AuthIsLoaded> 
        </ReactReduxFirebaseProvider>
      </Provider>,
    document.getElementById("root")
  );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
