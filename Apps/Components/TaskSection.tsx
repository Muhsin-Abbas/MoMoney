import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tw from '../../tw';

const TaskSection = () => {
  return (
    <View style={tw`p-4 bg-white mt-4 rounded-lg`}>
      {/* Today Section */}
      <Text style={tw`text-black font-bold text-lg mb-4`}>Today</Text>
      
      {/* Task Row */}
      <View style={tw`flex-row items-center justify-between`}>
        <View style={tw`flex-row items-center`}>
          {/* Profile Icon */}
          <View style={tw`bg-pink-100 p-4 rounded-full`}>
            <Image
              source={require('../../assests/images/Avatars.png')}
              style={tw`w-6 h-6`} 
            />
          </View>
          <View style={tw`ml-3`}>
            {/* Task Info */}
            <Text style={tw`text-black font-medium`}>Micah</Text>
            <Text style={tw`text-gray-500`}>0 of 0 tasks are completed</Text>
          </View>
        </View>

        {/* Add Task Button */}
      
      </View>
      <View style={tw`flex-row justify-between items-center mt-4`}>
  {/* Add Task Button */}
  {/* Upcoming Tasks Text */}
  <Text style={tw`text-gray-500`}>Upcoming tasks</Text>
  <TouchableOpacity style={tw`bg-blue-500 w-[121px] h-[28px] rounded-full flex-row items-center justify-center`}>
    <Text style={tw`text-white font-bold`}>+    Add Task</Text>
  </TouchableOpacity>
</View>
    </View>
  );
};

export default TaskSection;
