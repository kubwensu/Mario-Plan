import React, { useState } from "react";
import { connect } from "react-redux";
import {createProject} from '../../store/Actions/projectActions'
import { Redirect } from "react-router-dom";


export const CreateProject = (props) => {
  const [title, settitle] = useState("");

  const [content, setcontent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createProject({title, content})
    setcontent('')
    settitle('')
    document.querySelector('form').reset();
    props.history.push('/');
  };  

  if(!props.auth.uid) {
    return <Redirect to='/signin'/>
  }
  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create new project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            className="materialize-textarea"
            type="text"
            name="content"
            onChange={(e) => {
              setcontent(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth
});

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
