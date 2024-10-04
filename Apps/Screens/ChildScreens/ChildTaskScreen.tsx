import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList,ScrollView,Image } from "react-native";
import tw from "twrnc"; // Tailwind CSS for styling
import DateTimePicker from "@react-native-community/datetimepicker";
import {CheckBox} from "react-native-elements";
import GreetingHeader from "../../Components/GreetingHeader";

const tasks = [
  {
    id: "1",
    title: "Clean the kitchen",
    reward: "$3.00",
    date: "07/05/24 - 07/07/2024",
  },
  {
    id: "2",
    title: "Trash the can",
    reward: "$3.00",
    date: "07/05/24 - 07/07/2024",
  },
  {
    id: "3",
    title: "Read finance storybook",
    reward: "$3.00",
    date: "07/05/24 - 07/07/2024",
  },
];

const ChildTaskScreen = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(5);
  const [taskStatus, setTaskStatus] = useState({}); // To handle checked status for each task
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };
  const showDatepicker = () => {
    setShowDatePicker(true);
  };

 
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const renderTask = ({ item }) => (
    <View
      style={tw`flex-row items-center justify-between p-4 border-b border-gray-200`}
    >
      <CheckBox
      checked={taskStatus[item.id] || false}
      onPress={() => setTaskStatus({ ...taskStatus, [item.id]: !taskStatus[item.id] })}
     
      checkedColor="#FEF3C2"
      containerStyle={tw`w-[3px] ml--12px`} 
    />
      <View style={tw`flex-1 ml-4`}>
      <Text style={tw`text-gray-400 text-xs mt-2`}>{item.date}</Text>
      <Text style={tw`font-semibold mt-2`}>{item.title}</Text>
        <Text style={tw`text-gray-400 text-12px font-400 mt-2`}>Reward - {item.reward}</Text>

      </View>
    </View>
  );

  return (
    <View style={tw`flex-1 bg-white px-4 py-6`}>
      <GreetingHeader name={"Tasks"} />
      {/* Task Count Stats */}
      <ScrollView
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={tw`flex-row justify-between mt-7`}
      >
        {/* Task 1 */}
        
        <View style={tw`bg-yellow-100 p-4 rounded-lg mr-4 w-[116px] h-[98px] border border-[#FDD831]`}>
          <Text style={tw`text-lg font-bold`}>2</Text>
          <Text style={tw`text-gray-500 text-sm`}>tasks for {"\n"} today</Text>
        </View>

        {/* Task 2 */}
       
        <View style={tw`bg-yellow-100 p-4 rounded-lg mr-4 w-[116px] h-[98px] border border-[#FDD831]`}>
          <Text style={tw`text-lg font-bold`}>3</Text>
          <Text style={tw`text-gray-500 text-sm`}>with {"\n"} rewards</Text>
        </View>

        {/* Task 3 */}
        <View style={tw`bg-yellow-100 p-4 rounded-lg w-[116px] h-[98px] border border-[#FDD831]`}>
          <Text style={tw`text-lg font-bold`}>1</Text>
          <Text style={tw`text-gray-500 text-sm`}>without {"\n"} reward</Text>
        </View>
      </ScrollView>

      {/* Task Dates */}
      <View style={tw`flex-row justify-between items-center mb-2`}>
        <Text style={tw`text-lg font-semibold`}>Task Dates</Text>
        <TouchableOpacity onPress={showDatepicker}>
         <Image source={require('../../../assests/icons/calendar.png')} style={tw `w-[20px] h-[20px] bg-yellow-100`}/>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-row justify-between mb-4`}>
        {days.map((day, index) => (
          <View key={day} style={tw`items-center`}>
            <Text style={tw`mb-2`}>{day}</Text>
            <TouchableOpacity
              style={tw`w-10 h-10 rounded-full ${
                date.getDay() === index ? "bg-[#FEF3C2]" : "bg-white"
              } items-center justify-center`}
            >
              <Text
                style={tw`${
                  date.getDay() === index ? "text-black" : "text-black"
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

export default ChildTaskScreen;
