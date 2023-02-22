import React from 'react';
import {TextInput} from 'react-native';
import {black} from '../Components/Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 100, color: black, paddingHorizontal: 10, width: '70%',height:'8%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
      placeholderTextColor={black}></TextInput>
  );
};

export default Field;
