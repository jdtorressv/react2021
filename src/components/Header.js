import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        onClick={onAdd}
        color={showAddTask ? 'red' : 'green'}
        text={showAddTask ? 'Close' : 'Add'}
      />
    </header>
  );
};

Header.defaultProps = { title: 'Task Tracker' };

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
