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

  return (
    <View style={dotStyle}>
      {customDot[0].marked ? (
        <View
          style={{
            height: 22,
            width: 22,
            backgroundColor: customDot[0].color,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 28,
            right: 22,
            bottom: Platform.OS === 'ios' ? 5 : 10
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
