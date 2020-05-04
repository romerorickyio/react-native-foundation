import React from 'react';
import { View } from 'react-native';
import { Svg, Path, G } from 'react-native-svg';
import { colors, utils } from '../../../design';

const ecommerceHouseSvg = ({ color, style }) => (
  <View style={[{
    width: 30, height: 30, justifyContent: 'center', alignItems: 'center',
  }, style]}
  >
    <Svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 30" preserveAspectRatio="xMidYMid meet">
      <G id="Layer-41" data-name="Layer" fill={utils.hslaToRgba(color)}>
        <Path d="M20.68,2.74A1.21,1.21,0,0,0,19.57,2H4.43a1.21,1.21,0,0,0-1.11.74L.19,10.34A1.2,1.2,0,0,0,1.3,12H2.78v8H2a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2H20.78V12H22.7a1.2,1.2,0,0,0,1.11-1.66ZM8.78,20V15h2v4.72a.88.88,0,0,0,.06.28Zm4,0a1.26,1.26,0,0,0,0-.28V15h2v5Zm6.05,0h-2V14.2a1.2,1.2,0,0,0-1.2-1.2H8a1.2,1.2,0,0,0-1.2,1.2V20h-2V12H6.43a1.18,1.18,0,0,0,.71-.23l2.11-1.53,2,1.48a1.2,1.2,0,0,0,1.42,0l2-1.48,2.11,1.53a1.17,1.17,0,0,0,.7.23h1.22Zm-1-10L15.46,8.28a1.2,1.2,0,0,0-1.42,0L12,9.76,10,8.28a1.2,1.2,0,0,0-1.42,0L6.17,10H2.49L5,4H19l2.48,6Z" />
      </G>
    </Svg>
  </View>
);

ecommerceHouseSvg.defaultProps = {
  color: colors.grayLightest,
  style: null,
};

export default React.memo(ecommerceHouseSvg);