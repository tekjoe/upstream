import React from "react";

const SearchForm = () => {
  return (
    <div className="control has-icons-left">
      <input className="input" type="text" placeholder="Search" />
      <span className="icon is-small is-left">
        <i className="fas fa-search" />
      </span>
    </div>
  );
};

export default SearchForm;
