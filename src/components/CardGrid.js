import React, { Component } from "react";
import Card from "./Card";

export default class CardGrid extends Component {
  state = {
    posts: [
      {
        author: "Sam",
        preview: "I like to play games",
        id: 1
      },
      {
        author: "Joe",
        preview: "I like to play gamess",
        id: 2
      },
      {
        author: "Squeegee",
        preview: "I like to play gamesss",
        id: 3
      }
    ]
  };
  render() {
    const { posts } = this.state;
    return (
      <section className="section">
        <div className="container">
          <h2 className="is-size-4">News</h2>
          <div className="columns">
            {posts.map(post => {
              return (
                <div key={post.id} className="column">
                  <Card content={post} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
