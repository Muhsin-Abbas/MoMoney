import React from 'react';
import { View, Text, Image, ProgressBarAndroid, ScrollView } from 'react-native';
import tw from '../../tw';

const SavingGoals = () => {
  return (
    <View style={tw`p-4 mt-4`}>
      <Text style={tw`text-xl font-bold mb-4`}>Saving Goals</Text>
      {/* Scrollable goals section */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={tw`flex-row`}>
          {/* Goal 1 */}
          <View style={tw`w-[270px] p-2`}>
            <View style={tw`rounded-7x`}>
              <Image
                source={require('../../assests/images/frame.png')}
                style={tw`w-[232px] h-[232px]`}
              />
            </View>
            <Text style={tw`font-bold mt-2`}>Summer High School</Text>
            <Text style={tw`text-gray-500`}>This will serve Micah this summer</Text>
            <Text style={tw`font-400 mt-2`}>$8,000 saved of $15,000 goal</Text>
            {/* Progress bar */}
            <ProgressBarAndroid
              style={{ width: 232 }} 
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.5}
              color="#4FADF7"
            />
          </View>

          {/* Goal 2 */}
          <View style={tw`w-[250px] p-2`}>
            <View style={tw`rounded-lg`}>
              <Image
                source={require('../../assests/images/frame.png')}
                style={tw`w-[232px] h-[232px]`}
              />
            </View>
            <Text style={tw`font-bold mt-2`}>Summer High School</Text>
            <Text style={tw`text-gray-500`}>This will serve Micah this summer</Text>
            <Text style={tw`font-400 mt-2`}>$8,000 saved of $15,000 goal</Text>
            {/* Progress bar */}
            <ProgressBarAndroid
              style={{ width: 232 }} // Set width to match the image width
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.53}
              color="#4FADF7"
            />
          </View>

          {/* Add more goals as needed */}
        </View>
      </ScrollView>
    </View>
  );
};

export default SavingGoals;
