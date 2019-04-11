import React from "react";
import BlogListItem from "./BlogListItem";
import { connect } from "react-redux";

const BlogList = ({ blogs }) => (
  <div>
    {blogs.map(blog => {
      return <BlogListItem {...blog} key={blog.id} />;
    })}
  </div>
);

const mapStateToProps = state => ({
  blogs: state.blogs
});

export default connect(mapStateToProps)(BlogList);
