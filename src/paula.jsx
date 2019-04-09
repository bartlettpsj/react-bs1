import React from 'react';
import PropTypes from 'prop-types'
import './paul.css';

const PaulA = ({ text='default value', onClick=f=>f }) =>
    <div className='paul' onClick={onClick}>
        <span>This is PaulA - {text}</span>
    </div>

PaulA.propTypes = {
        myprop: PropTypes.string,
        onClick: PropTypes.func
}

export default PaulA;