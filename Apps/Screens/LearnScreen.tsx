import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import tw from '../../tw';
import { useNavigation } from '@react-navigation/native';

const LessonCard = ({ title, duration, imageSource, isNew }) => (
  <View style={tw`bg-blue-500 rounded-3x mb-1 overflow-hidden mt-2`}>
    <Image
      source={imageSource}
      style={tw`w-full h-32`}
      resizeMode="cover"
    />
    <View style={tw`p-3`}>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-16px font-rubik text-white`}>{title}</Text>
        <View style={tw`flex-row items-center mt-1`}>
          <Image source={require('../../assests/images/Avatars.png')} style={tw`w-20px h-20px`}/>
          <Text style={tw`text-gray-600 ml-1 text-white`}>{duration}</Text>
        </View>
      </View>
    </View>
  </View>
);

const Tab = ({ title, isActive, onPress }) => (
  <TouchableOpacity
    style={tw`flex-1 items-center py-4`}
    onPress={onPress}
  >
    <Text style={tw`text-20px font-rubik ${isActive ? 'font-bold text-blue-500' : 'text-gray-500'}`}>{title}</Text>
    {isActive && <View style={tw`absolute bottom-0 left-0 right-0 h-0.3 bg-blue-500`} />}
  </TouchableOpacity>
);

const GameInterface = ({ navigation }) => (
  <View style={tw `p-3 mt-3`}>
  <View style={tw`flex-1 bg-white p-4 rounded-3x`}>
    <Text style={tw` font-bold text-15px mb-2`}>Hello Micah</Text>
    <Text style={tw` mb-4 text-14px font-rubik`}>Explore our interactive games designed {'\n'}to make learning about money fun and {'\n'}easy.</Text>
    <Image
      source={require('../../assests/images/game.png')}
      style={tw`w-full h-64 mb-4`}
      resizeMode="contain"
    />
  
  </View>
    <TouchableOpacity
    style={tw`bg-blue-500 rounded-full py-3 px-6 mt-7`}
    onPress={() => navigation.navigate("QuizQuestion")}
  >
    <Text style={tw`text-black text-center font-bold`}>START GAME</Text>
  </TouchableOpacity>
  </View>
);

export default function LearnScreen() {
  const [activeTab, setActiveTab] = useState('Lessons');
  const navigation = useNavigation();

  const lessons = [
    {
      title: "Saving vs. Spending",
      duration: "22:24",
      imageSource: require('../../assests/images/first.png'),
      isNew: true
    },
    {
      title: "What is Money?",
      duration: "22:24",
      imageSource: require('../../assests/images/first.png'),
      isNew: false
    },
    {
      title: "Budgeting Basics",
      duration: "18:30",
      imageSource: require('../../assests/images/first.png'),
      isNew: true
    }
  ];

  return (
    <View style={tw`flex-1 bg-gray-100 mt-4`}>
      <View style={tw`flex-row bg-white`}>
        <Tab 
          title="Lessons" 
          isActive={activeTab === 'Lessons'} 
          onPress={() => setActiveTab('Lessons')} 
        />
        <Tab 
          title="Games" 
          isActive={activeTab === 'Games'} 
          onPress={() => setActiveTab('Games')} 
        />
      </View>
      <ScrollView style={tw`flex-1`}>
        {activeTab === 'Lessons' && lessons.map((lesson, index) => (
          <LessonCard 
            key={index}
            title={lesson.title}
            duration={lesson.duration}
            imageSource={lesson.imageSource}
            isNew={lesson.isNew}
          />
        ))}
        {activeTab === 'Games' && (
          <GameInterface navigation={navigation} />
        )}
      </ScrollView>
    </View>
  );
}