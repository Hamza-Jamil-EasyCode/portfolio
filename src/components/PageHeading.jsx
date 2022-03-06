import PropTypes from "prop-types";

const PageHeading = ({ heading }) => {
  return (
    <div className="page-heading">
      <hr />
      <h1>{heading}</h1>
      <hr />
    </div>
  );
};

PageHeading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default PageHeading;
