import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import { useRoute } from '@react-navigation/native'; // Import useRoute
import { useNavigation } from '@react-navigation/native';
const ChildQuestionTwo = () => {
    const navigation=useNavigation();
  const route = useRoute(); // Get the route to retrieve passed params
  const { progress: passedProgress } = route.params || { progress: 0 };

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [progress, setProgress] = useState(passedProgress); 

  const totalQuestions = 4; // Assume 4 questions for example
  const answers = [
    "To look nice in a wallet",
    "To exchange for goods and services",
    "To play with",
    "To exchange for goods and services"
  ];

  const answerColors = ['bg-blue-500', 'bg-teal-500', 'bg-yellow-500', 'bg-pink-500'];
  const correctAnswerIndex = 1; // Index of the correct answer

  const handleAnswerSelection = (index) => {
    setSelectedAnswer(index);
    // Increment progress based on total questions

    
    const newProgress = Math.min(progress + (100 / totalQuestions), 100);
    setProgress(newProgress);

    
    setTimeout(() => {
        navigation.navigate('ChildQuestionThree', { progress: newProgress }); // Pass progress to the next screen
      }, 1000);
    
  };

  return (
    <View style={tw`flex-1 bg-[#FFFBEB] p-2.5 mt-7`}>
      {/* Header */}
      <View style={tw`flex-row items-center bg-[#FDD831] rounded-full p-2 mb-8`}>
        <Image
          source={require('../../../assests/images/child.png')}
          style={tw`w-10 h-10 rounded-full mr-2`}
        />
        <Text style={tw`text-black font-bold flex-grow`}>Micha</Text>
        <TouchableOpacity style={tw`bg-white rounded-full px-3 py-3`}>
          <Text style={tw`text-black font-bold text-15px`}>Level 1</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={tw`bg-gray-200 rounded-full h-2.5 mb-4`}>
        <View style={[tw`h-2.5 rounded-full`, { width: `${progress}%`, backgroundColor: '#FDD831' }]} />
      </View>

      {/* Question */}
      <Text style={tw`text-2xl font-bold text-center mb-8`}>
        What is the {'\n'} primary purpose of {'\n'}money?
      </Text>

      {/* Answer options */}
      {answers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={tw`${answerColors[index]} rounded-4x p-5 mb-2 flex-row items-center relative`}
          onPress={() => handleAnswerSelection(index)}
        >
          <Text style={tw`text-white text-center text-15px font-rubik flex-grow`}>{answer}</Text>
          {selectedAnswer === index && (
            <Image
              source={require('../../../assests/icons/tk.png')}
              style={tw`w-35px h-35px absolute right--1`} 
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ChildQuestionTwo;
