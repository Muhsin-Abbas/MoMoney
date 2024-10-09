import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tw from '../../tw';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const ParentQuizFour = ({ route }) => {
  const { progress: initialProgress } = route.params; // Get passed progress
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [progress, setProgress] = useState(initialProgress); // Initialize with passed progress

  const navigation = useNavigation(); // Hook for navigation

  const answers = [
    "Interest",
    "Saving",
    "Income",
    "Debt"
  ];

  const answerColors = ['bg-blue-500', 'bg-teal-500', 'bg-yellow-500', 'bg-pink-500'];
  const correctAnswerIndex = 1; // Index of the correct answer

  const handleAnswerSelection = (index) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      setProgress(prevProgress => Math.min(prevProgress + 25, 100)); 

      // Navigate to Congrats after a short delay
      setTimeout(() => {
        console.log('Navigating to Congrats'); // Debug log
        navigation.navigate('Congrats'); 
      }, 300); // Adjust the timeout duration if needed
    }
  };

  return (
    <View style={tw`flex-1 bg-gray-100 p-2.5 mt-7`}>
      {/* Header */}
      <View style={tw`flex-row items-center bg-blue-500 rounded-full p-2 mb-8`}>
        <Image
          source={require('../../assests/images/child.png')}
          style={tw`w-10 h-10 rounded-full mr-2`}
        />
        <Text style={tw`text-black font-bold flex-grow`}>Micha</Text>
        <TouchableOpacity style={tw`bg-white rounded-full px-3 py-3`}>
          <Text style={tw`text-black font-bold text-15px`}>Level 1</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={tw`bg-gray-200 rounded-full h-2.5 mb-4`}>
        <View style={[tw`bg-blue-600 h-2.5 rounded-full`, { width: `${progress}%` }]} />
      </View>

      {/* Question */}
      <Text style={tw`text-32px font-500 text-center mb-8`}>
        What is the term {'\n'} for the money you {'\n'} earn from{'\n'} Workig?
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
              source={require('../../assests/icons/tk.png')}
              style={tw`w-35px h-35px absolute right--1`} 
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ParentQuizFour;
