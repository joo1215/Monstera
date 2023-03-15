import PropTypes from 'prop-types';
import { Link as ReactRouterLink } from 'react-router-dom';
import './link.css';

export const Link = (props) => {
  return <ReactRouterLink to={props.path}>{props.label}</ReactRouterLink>;
};

Link.propTypes = {
  path: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

Link.defaultProps = {
  path: '/',
  label: '홈 페이지로 돌아가기',
};
