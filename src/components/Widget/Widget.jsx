/* eslint-disable react/jsx-curly-brace-presence */
// import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button/Button';
import './Widget.scss';
import { changeJoke } from '../store/actions/jokeAction';

function Widget() {
  const newJoke = useSelector((state) => state.joke.value);

  const dispatch = useDispatch();

  dispatch(changeJoke);

  return (
    <article className="widget">
      {!changeJoke ? (
        <div>Loader</div>
      ) : (
        <p className="widget-content">{newJoke}</p>
      )}
      <Button
        handleClick={() => dispatch(changeJoke())}
        text={'Afficher une blague'}
        backgroundColor="lightpink"
      />
    </article>
  );
}

export default Widget;
