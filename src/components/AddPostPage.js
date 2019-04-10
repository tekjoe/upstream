import React, { Fragment } from "react";
import AddPostForm from "./AddPostForm";

const AddPostPage = props => {
  return (
    <Fragment>
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Add Blog Post</h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <AddPostForm history={props.history} />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AddPostPage;
