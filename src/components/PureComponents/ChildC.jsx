import React from "react";
import PropTypes from "prop-types";

const ChildC = ({ value }) => {
  console.log("Child c");
  return (
    <div>
      <h2>{value}</h2>
      {/* <button onClick={}>Change Counter 2</button> */}
    </div>
  );
};

ChildC.propTypes = {
  value: PropTypes.number.isRequired,
};

export default React.memo(ChildC);
