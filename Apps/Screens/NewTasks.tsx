// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import DateTimePicker from '@react-native-community/datetimepicker';
// import HeaderExitButton from "../Components/HeaderExit";
// import tw from "../../tw";

// export default function NewTasks() {
//   const [task, setTask] = useState("");
//   const [reward, setReward] = useState("");
//   const [date, setDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [repeatOption, setRepeatOption] = useState("Doesn't repeat");

//   const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//   const repeatOptions = ["Doesn't repeat", 'Daily', 'Every weekend', 'Every', 'custom'];

//   const onChangeDate = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowDatePicker(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const showDatepicker = () => {
//     setShowDatePicker(true);
//   };
//   return (
//     <ScrollView
//       style={[tw`flex-1 bg-gray-100 p-4`, { backgroundColor: "#F9FAFB" }]}
//     >
//       <HeaderExitButton title="New task" />

//       <Text style={tw`text-lg font-semibold mb-1`}>Task</Text>
//       <TextInput
//         style={tw`bg-gray-100 p-3 rounded-lg mb-4`}
//         placeholder="Type here"
//         value={task}
//         onChangeText={setTask}
//       />

//       <Text style={tw`text-lg font-semibold mb-2`}>Child</Text>
//       <View style={tw`mb-4`}>
//         <View
//           style={tw`w-12 h-12 bg-gray-300 rounded-full mr-3 items-center justify-center`}
//         >
//           <Text style={tw`text-white text-2xl`}>✓</Text>
//         </View>
//         <Text style={tw`text-12px ml-2`}>Micah</Text>
//       </View>

//       <Text style={tw`text-lg font-semibold mb-2`}>Reward</Text>
//       <TextInput
//         style={tw`bg-gray-100 p-3 rounded-lg mb-4`}
//         placeholder="Enter amount here"
//         value={reward}
//         onChangeText={setReward}
//         keyboardType="numeric"
//       />

//       <View style={tw`flex-row justify-between items-center mb-2`}>
//         <Text style={tw`text-lg font-semibold`}>Set date</Text>
//         <TouchableOpacity onPress={showDatepicker}>
//             <Text style={tw`text-2xl text-gray-500`}>📅</Text>
//           </TouchableOpacity>
//       </View>
//       <View style={tw`flex-row justify-between mb-4`}>
//         {days.map((day, index) => (
//           <View key={day} style={tw`items-center`}>
//             <Text style={tw`mb-2`}>{day}</Text>
//             <TouchableOpacity
//                 style={tw`w-10 h-10 rounded-full ${date.getDay() === index ? 'bg-blue-500' : 'bg-gray-200'} items-center justify-center`}
//               >
//                 <Text style={tw`${date.getDay() === index ? 'text-white' : 'text-black'}`}>{date.getDate() + index - date.getDay()}</Text>
//               </TouchableOpacity>
//           </View>
//         ))}
//       </View>
//       {showDatePicker && (
//           <DateTimePicker
//             testID="dateTimePicker"
//             value={date}
//             mode={'date'}
//             is24Hour={true}
//             display="default"
//             onChange={onChangeDate}
//           />
//         )}
//       <Text style={tw`text-lg font-semibold mb-2`}>Repeat</Text>
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={tw`mb-4`}
//       >
//         {repeatOptions.map((option) => (
//           <TouchableOpacity
//             key={option}
//             style={tw`px-4 py-1 rounded-full h-[26px] ml-1 ${
//               repeatOption === option ? "bg-blue-500" : "bg-gray-200"
//             }`}
//             onPress={() => setRepeatOption(option)}
//           >
//             <Text
//               style={tw`${
//                 repeatOption === option ? "text-white" : "text-black"
//               } text-[12px]`}
//             >
//               {option}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       <TouchableOpacity
//         style={tw`bg-blue-500 p-3 rounded-full items-center mt-4`}
//       >
//         <Text style={tw`text-white text-lg font-semibold`}>Save</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import HeaderExitButton from "../Components/HeaderExit";
import tw from "../../tw";
import { useNavigation } from '@react-navigation/native';

export default function NewTasks() {
  const navigation= useNavigation();
  const [task, setTask] = useState("");
  const [reward, setReward] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [repeatOption, setRepeatOption] = useState("Doesn't repeat");
  const [customRepeatValue, setCustomRepeatValue] = useState(1);
  const [customRepeatType, setCustomRepeatType] = useState("day");

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const repeatOptions = [
    "Doesn't repeat",
    "Daily",
    "Every weekend",
    "Every",
    "custom",
  ];

  const periodOptions = ["day", "week", "month", "year"]; // For custom repeat

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const increaseCustomRepeat = () => {
    setCustomRepeatValue(customRepeatValue + 1);
  };

  const decreaseCustomRepeat = () => {
    if (customRepeatValue > 1) setCustomRepeatValue(customRepeatValue - 1);
  };

  return (
    <ScrollView
      style={[tw`flex-1 bg-gray-100 p-4`, { backgroundColor: "#F9FAFB" }]}
    >
      <HeaderExitButton title="New task" />

      <Text style={tw`text-lg font-semibold mb-1`}>Task</Text>
      <TextInput
        style={tw`bg-gray-100 p-3 rounded-lg mb-4`}
        placeholder="Type here"
        value={task}
        onChangeText={setTask}
      />

      <Text style={tw`text-lg font-semibold mb-2`}>Child</Text>
      <View style={tw`mb-4`}>
        <TouchableOpacity onPress={()=>navigation.navigate('Parent-Task')}>
        <Image source={require('../../assests/images/Avatars.png')} style={tw `w-[64px] h-[64px]`}/>
        </TouchableOpacity>
        <Text style={tw`text-12px ml-4`}>Micah</Text>
      </View>

      <Text style={tw`text-lg font-semibold mb-2`}>Reward</Text>
      <TextInput
        style={tw`bg-gray-100 p-3 rounded-lg mb-4`}
        placeholder="Enter amount here"
        value={reward}
        onChangeText={setReward}
        keyboardType="numeric"
      />

      <View style={tw`flex-row justify-between items-center mb-2`}>
        <Text style={tw`text-lg font-semibold`}>Set date</Text>
        <TouchableOpacity onPress={showDatepicker}>
         <Image source={require('../../assests/images/calender.png')} style={tw `w-[20px] h-[20px]`}/>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-row justify-between mb-4`}>
        {days.map((day, index) => (
          <View key={day} style={tw`items-center`}>
            <Text style={tw`mb-2`}>{day}</Text>
            <TouchableOpacity
              style={tw`w-10 h-10 rounded-full ${
                date.getDay() === index ? "bg-blue-500" : "bg-gray-200"
              } items-center justify-center`}
            >
              <Text
                style={tw`${
                  date.getDay() === index ? "text-white" : "text-black"
                }`}
              >
                {date.getDate() + index - date.getDay()}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
        />
      )}

      <Text style={tw`text-lg font-semibold mb-2`}>Repeat</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`mb-4`}
      >
        {repeatOptions.map((option) => (
          <TouchableOpacity
            key={option}
            style={tw`px-4 py-1 rounded-full h-[26px] ml-1 ${
              repeatOption === option ? "bg-blue-500" : "bg-gray-200"
            }`}
            onPress={() => setRepeatOption(option)}
          >
            <Text
              style={tw`${
                repeatOption === option ? "text-white" : "text-black"
              } text-[12px]`}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Custom Repeat Option */}
      {repeatOption === "custom" && (
        <>
          {/* Horizontal text for day, week, month, year */}
          <View style={tw`flex-row justify-around mb-2`}>
            {periodOptions.map((period) => (
              <Text key={period} style={tw`text-12px font-400 mx-2 `}>
                {period}
              </Text>
            ))}
          </View>

          {/* "Every 1 day" with increment and decrement buttons */}
          <View
            style={tw`border border-gray-300 rounded-lg px-3 py-2 mb-4 mt-2`}
          >
            <View style={tw`flex-row items-center justify-between`}>
              {/* Left Side: Display "Every 1 year" */}
              <Text style={tw`text-12px font-400`}>
                Every {customRepeatValue} {customRepeatType}
              </Text>

              {/* Right Side: Increase/Decrease Icons with Borders */}
              <View style={tw`flex-row items-center`}>
                <TouchableOpacity
                  onPress={decreaseCustomRepeat}
                  style={tw`border border-gray-300 rounded-lg px-2`}
                >
                  <Text style={tw`text-xl text-blue-500`}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={increaseCustomRepeat}
                  style={tw`border border-gray-300 rounded-lg px-2 ml-2`}
                >
                  <Text style={tw`text-xl text-blue-500`}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
      )}

      <TouchableOpacity
        style={tw`bg-blue-500 p-3 rounded-full items-center mt-4`}
      >
        <Text style={tw`text-white text-lg font-semibold`}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
