import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const ChildA = ({ value, onChangeHandler }) => {

    useEffect(() => {
        console.log("Child-A DID MOUNT")
    }, []);

    console.log("Child A")
    return <div>
        <h1>{value}</h1>
        <button onClick={onChangeHandler}>CallBack Change Counter 1</button>
    </div>;
};

ChildA.propTypes = {
    value: PropTypes.number.isRequired,
    onChangeHandler: PropTypes.func.isRequired
};

export default React.memo(ChildA);
