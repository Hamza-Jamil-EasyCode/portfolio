import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const ChildB = ({ value, onChangeHandler }) => {

    useEffect(() => {
        console.log("Child-B DID MOUNT")
    }, []);

    console.log("Child B")
    return <div>
        <h1>{value}</h1>
        <button onClick={onChangeHandler}>CallBack Change Counter 2</button>

    </div>;
};

ChildB.propTypes = {
    value: PropTypes.number.isRequired,
    onChangeHandler: PropTypes.func.isRequired
};

export default React.memo(ChildB);
