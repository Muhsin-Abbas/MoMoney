import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import tw from '../../tw';

const ChildrenList = ({ children }) => {
  return (
    <View style={tw`mt-4`}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {children.map((child, index) => (
          <View key={index} style={tw`items-center mr-4`}>
            <Image
              source={child.image}
              style={tw`w-16 h-16 rounded-full`}
              resizeMode="cover"
            />
            <Text style={tw`mt-2`}>{child.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ChildrenList;
