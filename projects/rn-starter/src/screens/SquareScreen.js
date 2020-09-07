import React, { useState, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ColorCounter from '../components/ColorCounter';

const INCREMENT = 20;

const onChange = (color) => {
  if (color < 256 && color >= 0) {
    return color;
  } else if (color > 256) {
    return 256;
  } else if (color < 0) {
    return 0;
  }
};

const reducer = (state, action) => {
  switch (action.color) {
    case 'red':
    case 'green':
    case 'blue': {
      return {
        ...state,
        [action.color]: onChange(state[action.color] + action.amount),
      };
    }
    case 'default': {
      return state;
    }
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  const NEGATIVE = -1 * INCREMENT;

  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() => dispatch({ color: 'red', amount: INCREMENT })}
        onDecrease={() => dispatch({ color: 'red', amount: NEGATIVE })}
      />
      <ColorCounter
        color="green"
        onIncrease={() => dispatch({ color: 'green', amount: INCREMENT })}
        onDecrease={() => dispatch({ color: 'green', amount: NEGATIVE })}
      />
      <ColorCounter
        color="blue"
        onIncrease={() => dispatch({ color: 'blue', amount: INCREMENT })}
        onDecrease={() => dispatch({ color: 'blue', amount: NEGATIVE })}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({});
