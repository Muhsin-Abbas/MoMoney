import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from '../../tw';

const Notifications = () => {
  const notifications = [
    { message: "Add money to wallet for next allowance for Micah", time: "5:32 PM", image: require('../../assests/images/Avatars.png') },
    { message: "Reactivate Omar’s card", time: "4:11 AM", image: require('../../assests/images/Avatars.png') },
    { message: "Steven completed Reading tips task", time: "2:40 AM", image: require('../../assests/images/Avatars.png') },
    { message: "Steven completed Reading tips task", time: "2:40 AM", image: require('../../assests/images/Avatars.png') },
    { message: "Steven completed Reading tips task", time: "2:40 AM", image: require('../../assests/images/Avatars.png') },
  ];

  return (
    <View style={tw`p-2.6 bg-white mt-4 rounded-4x border border-gray-300`}>
      <View style={tw`flex-row justify-between items-center mb-4`}>
        <Text style={tw`font-rubik text-18px font-bold`}>Notifications</Text>
        <Text style={tw`text-green-500 border-b border-green-500`}>View all</Text>
      </View>

      <View style={tw`h-0.3 bg-gray-300 mb-4`} />

      {notifications.map((note, index) => (
        <View key={index} style={tw`flex-row items-center mb-3`}>
          <Image 
            source={note.image} 
            style={tw`w-8 h-8 rounded-full mr-1.6`} 
            resizeMode="cover"
          />
          <View style={tw`mt-1`}>
          
            <Text style={tw`font-rubik text-[14px] font-500 leading-[20px] text-gray-700`}>
              {note.message}
            </Text>
            <Text style={tw`text-gray-400 text-xs`}>{note.time}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Notifications;
