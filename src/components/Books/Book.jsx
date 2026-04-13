import React from 'react';
import PropTypes from 'prop-types';


const Book = (props) => {
    const {book} = props
    const {title} = book
    return (
        <article>
            <h2>{title}</h2>
        </article>
    );
};


Book.propTypes = {

};


export default Book;
