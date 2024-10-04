import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import tw from '../../tw';

const MoneyCategory = ({ children }) => {
  return (
    <View style={tw`mt-4`}>
      <View style={tw `flex-row justify-between`}>
        {children.map((child, index) => (
          <View key={index} style={tw`items-center`}>
            <Image
              source={child.image}
              style={tw`w-16 h-16 rounded-full`}
              resizeMode="cover"
            />
            <Text style={tw`mt-2`}>{child.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MoneyCategory;
