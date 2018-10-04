import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => {
  // one way to remove need to use props.players and props.title etc. Also can add object indside function params to grab just those props instead of all the props like I did above instead of just calling 'props' inside the ()
  // const { players, title } = props;
  return (
    <header>
      <Stats players={players}/>
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
};

Header.defaultProps = {
  title: 'Scoreboard'
};

export default Header;
