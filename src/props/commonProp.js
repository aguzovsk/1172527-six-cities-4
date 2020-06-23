import PropTypes from 'prop-types';

const personProp = PropTypes.exact({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired
});

export {personProp};
