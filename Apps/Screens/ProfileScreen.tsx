import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, } from 'react-native';
import tw from 'twrnc';  // Tailwind CSS for styling
import CheckBox from '@react-native-community/checkbox'

const tasks = [
  { id: '1', title: 'Clean the kitchen', reward: '$3.00', date: '07/05/24 - 07/07/2024' },
  { id: '2', title: 'Trash the can', reward: '$3.00', date: '07/05/24 - 07/07/2024' },
  { id: '3', title: 'Read finance storybook', reward: '$3.00', date: '07/05/24 - 07/07/2024' },
];

const  ProfileScreen = () => {
  const [selectedDate, setSelectedDate] = useState(5);
  const [taskStatus, setTaskStatus] = useState({}); // To handle checked status for each task

  const renderTask = ({ item }) => (
    <View style={tw`flex-row items-center justify-between p-4 border-b border-gray-200`}>
      {/* <CheckBox
        value={taskStatus[item.id] || false}
        onValueChange={() => setTaskStatus({ ...taskStatus, [item.id]: !taskStatus[item.id] })}
      /> */}
      <View style={tw`flex-1 ml-4`}>
        <Text style={tw`font-semibold`}>{item.title}</Text>
        <Text style={tw`text-gray-400 text-xs`}>Reward - {item.reward}</Text>
        <Text style={tw`text-gray-400 text-xs`}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={tw`flex-1 bg-white px-4 py-6`}>
      {/* Task Count Stats */}
      <View style={tw`flex-row justify-around mb-4`}>
        <View style={tw`bg-yellow-100 p-4 rounded-lg items-center`}>
          <Text style={tw`text-lg font-bold`}>2</Text>
          <Text style={tw`text-gray-500 text-sm`}>tasks for today</Text>
        </View>
        <View style={tw`bg-yellow-100 p-4 rounded-lg items-center`}>
          <Text style={tw`text-lg font-bold`}>3</Text>
          <Text style={tw`text-gray-500 text-sm`}>with rewards</Text>
        </View>
        <View style={tw`bg-yellow-100 p-4 rounded-lg items-center`}>
          <Text style={tw`text-lg font-bold`}>1</Text>
          <Text style={tw`text-gray-500 text-sm`}>without reward</Text>
        </View>
      </View>

      {/* Task Dates */}
      <View>
        <Text style={tw`font-bold mb-2`}>Task Dates</Text>
        <View style={tw`flex-row justify-between items-center mb-6`}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <TouchableOpacity
              key={index}
              style={[
                tw`p-2 rounded-full`,
                selectedDate === index + 1 ? tw`bg-yellow-400` : null,
              ]}
              onPress={() => setSelectedDate(index + 1)}
            >
              <Text style={selectedDate === index + 1 ? tw`text-white` : tw`text-gray-700`}>
                {day[0]} {index + 1}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        style={tw`bg-gray-50 rounded-lg`}
      />
    </View>
  );
};

export default ProfileScreen;
