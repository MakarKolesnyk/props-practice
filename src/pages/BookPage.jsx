import React from "react";
import PropTypes from "prop-types";
import Books from "../components/Books/Books";

const BookPage = () => {
  return (
    <div>
      <h1>Books</h1>
      <Books />
    </div>
  );
};

BookPage.propTypes = {};

export default BookPage;
