import PropTypes from 'prop-types';
import React from 'react';
import {View, Image, Platform} from 'react-native';
import styleConstructor from './style';

const Dot = props => {
  const {theme, marked, disabled, inactive, color, today, selected} = props;
  const style = styleConstructor(theme);
  const dotStyle = [style.dot];
  if (marked) {
    dotStyle.push(style.visibleDot);
    if (today) {
      dotStyle.push(style.todayDot);
    }
    if (disabled) {
      dotStyle.push(style.disabledDot);
    }
    if (inactive) {
      dotStyle.push(style.inactiveDot);
    }
    if (selected) {
      dotStyle.push(style.selectedDot);
    }
    if (color) {
      dotStyle.push({backgroundColor: color});
    }
  }
  const {customDot} = props;

  const colourNameToHex = (colour: string) =>
  {
    var colours = {"red" : "#FF7078", "purple": "#B072FF", "blue": "#00D1FF"};

    if (typeof colours[colour.toLowerCase()] != 'undefined')
        return colours[colour.toLowerCase()];

    return '#ffffff';
  }

  return (
    <View style={dotStyle}>
      {customDot[0].marked ? (
        <View
          style={{
            height: 22,
            width: 22,
            backgroundColor: colourNameToHex(customDot[0].color) ,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 28,
            right: 22,
            elevation: Platform.OS === 'ios' ? 20 : 5,
            bottom: Platform.OS === 'ios' ? 5 : 10,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 1,
            shadowRadius: 1,
          }}
        >
          <Image source={require('../../img/beer.png')}></Image>
        </View>
      ) : null}
    </View>
  );
};
export default Dot;
Dot.propTypes = {
  theme: PropTypes.object,
  color: PropTypes.string,
  marked: PropTypes.bool,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  inactive: PropTypes.bool,
  today: PropTypes.bool
};
