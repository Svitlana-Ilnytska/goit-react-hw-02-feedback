import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = (
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad
) => (
  <>
    <button type="button" onClick={() => onIncrementGood}>
      Good
    </button>
    <button type="button" onClick={() => onIncrementNeutral}>
      Neutral
    </button>
    <button type="button" onClick={() => onIncrementBad}>
      Bad
    </button>
  </>
);

FeedbackOptions.propTypes = {
  onIncrementGood: PropTypes.func.isRequired,
  onIncrementNeutral: PropTypes.func.isRequired,
  onIncrementBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
