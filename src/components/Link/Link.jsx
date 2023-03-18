import PropTypes from 'prop-types';
import { Link as ReactRouterLink } from 'react-router-dom';
import './link.css';

export const Link = (props) => {
  const mode =
    props.option === 1
      ? 'storybook-link—primary'
      : props.option === 2
      ? 'storybook-link—secondary'
      : 'storybook-link—third';
  return (
    <ReactRouterLink
      to={props.path}
      className={mode}
      style={{ width: props.width }}
    >
      {props.label}
    </ReactRouterLink>
  );
};

Link.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  option: PropTypes.number,
  width: PropTypes.number,
};

Link.defaultProps = {
  path: '/login',
  option: 1,
  label: '로그인',
  width: 400,
};
