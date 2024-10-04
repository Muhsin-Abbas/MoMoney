// import React, { useState } from 'react';
// import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
// import tw from 'twrnc';
// import { useNavigation } from '@react-navigation/native';

// const LessonCard = ({ title, duration, imageSource, isNew }) => (
//   <View style={tw`bg-[#FDD831] rounded-3x mb-1 overflow-hidden mt-2`}>
//     <Image
//       source={imageSource}
//       style={tw`w-full h-32`}
//       resizeMode="cover"
//     />
//     <View style={tw`p-3`}>
//       <View style={tw`flex-row justify-between items-center`}>
//         <Text style={tw`text-16px font-rubik text-white`}>{title}</Text>
//         <View style={tw`flex-row items-center mt-1`}>
//           <Image source={require('../../../assests/icons/calendar.png')} style={tw`w-20px h-20px`}/>
//           <Text style={tw`text-gray-600 ml-1 text-white`}>{duration}</Text>
//         </View>
//       </View>
//     </View>
//   </View>
// );

// const Tab = ({ title, isActive, onPress }) => (
//   <TouchableOpacity
//     style={tw`flex-1 items-center py-4`}
//     onPress={onPress}
//   >
//     <Text style={tw`text-20px font-rubik ${isActive ? 'font-bold text-yellow-400' : 'text-gray-500'}`}>{title}</Text>
//     {isActive && <View style={tw`absolute bottom-0 left-0 right-0 h-0.3 bg-yellow-400`} />}
//   </TouchableOpacity>
// );

// const GameInterface = ({ navigation }) => (
//   <View style={tw `p-3 mt-3`}>
//   <View style={tw`flex-1 bg-white p-4 rounded-3x`}>
//     <Text style={tw` font-bold text-15px mb-2`}>Hello Micah</Text>
//     <Text style={tw` mb-4 text-14px font-rubik`}>Explore our interactive games designed {'\n'}to make learning about money fun and {'\n'}easy.</Text>
//     <Image
//       source={require('../../../assests/images/game.png')}
//       style={tw`w-full h-64 mb-4`}
//       resizeMode="contain"
//     />
  
//   </View>
//     <TouchableOpacity
//     style={tw`bg-[#FDD831] rounded-full py-3 px-6 mt-7`}
//     onPress={() => navigation.navigate("QuizQuestion")}
//   >
//     <Text style={tw`text-black text-center font-bold`}>START GAME</Text>
//   </TouchableOpacity>
//   </View>
// );

// export default function ChildLearnScreen() {
//   const [activeTab, setActiveTab] = useState('Lessons');
//   const navigation = useNavigation();

//   const lessons = [
//     {
//       title: "Saving vs. Spending",
//       duration: "22:24",
//       imageSource: require('../../../assests/images/first.png'),
//       isNew: true
//     },
//     {
//       title: "What is Money?",
//       duration: "22:24",
//       imageSource: require('../../../assests/images/first.png'),
//       isNew: false
//     },
//     {
//       title: "Budgeting Basics",
//       duration: "18:30",
//       imageSource: require('../../../assests/images/first.png'),
//       isNew: true
//     }
//   ];

//   return (
//     <View style={tw`flex-1 bg-[#FFFBE] mt-4`}>
//       <View style={tw`flex-row bg-white`}>
//         <Tab 
//           title="Lessons" 
//           isActive={activeTab === 'Lessons'} 
//           onPress={() => setActiveTab('Lessons')} 
//         />
//         <Tab 
//           title="Games" 
//           isActive={activeTab === 'Games'} 
//           onPress={() => setActiveTab('Games')} 
//         />
//       </View>
//       <ScrollView style={tw`flex-1`}>
//         {activeTab === 'Lessons' && lessons.map((lesson, index) => (
//           <LessonCard 
//             key={index}
//             title={lesson.title}
//             duration={lesson.duration}
//             imageSource={lesson.imageSource}
//             isNew={lesson.isNew}
//           />
//         ))}
//         {activeTab === 'Games' && (
//           <GameInterface navigation={navigation} />
//         )}
//       </ScrollView>
//     </View>
//   );
// }
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';

const QuizQuestion = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [progress, setProgress] = useState(0);

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
    setProgress(prevProgress => Math.min(prevProgress + 25, 100)); 
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
        <View style={tw`bg-blue-600 h-2.5 rounded-full`} style={{width: `${progress}%`}} />
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

export default QuizQuestion;


