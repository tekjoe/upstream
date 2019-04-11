import React from "react";

const BlogListItem = ({ content, title }) => {
  return (
    <div className="box">
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt={title}
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{title}</strong> <small>@tekjoe</small> <small>31m</small>
              <br /> {content}
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-reply" />
                </span>
              </a>
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-retweet" />
                </span>
              </a>
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-heart" />
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  );
};

export default BlogListItem;
