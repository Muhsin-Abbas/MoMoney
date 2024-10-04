import React from "react";
import { View, Text, TouchableOpacity, ScrollView,Image } from "react-native";
import tw from "twrnc";
import GreetingHeader from "../../Components/GreetingHeader";
import { useNavigation } from "@react-navigation/native";

const PocketItem = ({ title, total, completed }) => (
  <View
    style={tw`bg-white rounded-lg mb-4 flex-row justify-between items-center`}
  >
    <View style={tw`flex-1`}>
      <Text style={tw`text-14px font-semibold mb-2`}>{title}</Text>
      <Text style={tw`text-12px text-gray-600 mb-2`}>
        ${completed} of ${total} tasks are completed
      </Text>
      <View style={tw`bg-gray-200 h-1 rounded-full`}>
        <View
          style={[tw`bg-blue-500 h-1 rounded-full`, { width: `${(completed / total) * 100}%` }]}
        />
      </View>
    </View>
    <View
      style={tw`bg-pink-100 w-10 h-10 rounded-full ml-4 items-center justify-center`}
    >
      {/* <Image source={require('../../../assests/images/Avatars.png')} style={tw `w-[48px] h-[48px]`}/> */}
    </View>
  </View>
);

export default function ChildSaveScreen() {
  const navigation= useNavigation();

  const pocketData = [
    { title: "Buy playstation for Christmas", total: 2000, completed: 0 },
    { title: "Camping with my friends", total: 1000, completed: 500 },
    { title: "Skating board", total: 150, completed: 8 },

  ];

  return (
    <ScrollView style={[tw`flex-1 bg-gray-100`, { backgroundColor: "#FFFBEF" }]}>
      <View style={tw`p-4`}>
        {/* Greeting Header */}
        <GreetingHeader name={"Save"} />

        {/* Savings Balance Section */}
        <View style={tw`bg-white rounded-lg p-4 mb-6 mt-5`}>
          <Text style={tw`text-10px font-rubik text-gray-600 mb-2`}>Savings Balance</Text>
          <Text style={tw`text-16px font-bold mb-4`}>$4.00</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('ChildPocketSave')}
            style={tw`bg-[#FDD831] rounded-full flex-row justify-center w-[126px] h-[36px] items-center`}
          >
            <Text style={tw`text-black text-lg font-semibold mr-2`}>+</Text>
            <Text style={tw`text-black text-12px font-semibold`}>Add Goals
            </Text>
          </TouchableOpacity>
        </View>

        {/* Combined Pocket Section */}
        <View style={tw`bg-white rounded-lg p-4 mb-6`}>
          <Text style={tw`text-16px font-bold mb-4`}>My Goals</Text>

          {/* Render Pocket Items */}
          {pocketData.map((pocket, index) => (
            <PocketItem key={index} {...pocket} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
//   Image,
// } from "react-native";
// import tw from "twrnc";
// // import HeaderWithBackButton from '../../Components/HeaderWithBackButton';
// import { useNavigation } from "@react-navigation/native";
// import ChildBack from "../../Components/ChildComponents/ChildBackButton";

// export default function CreatePocket() {
//   const navigation = useNavigation();
//   return (
//     <ScrollView
//       style={[tw`flex-1 bg-gray-100`, { backgroundColor: "#FFFBEF" }]}
//     >
//       <View style={tw`p-4`}>
//         <ChildBack title={"Create A New Pocket"} />

//         <View style={tw`items-center mb-6`}>
//           <View
//             style={tw`bg-white w-[358px] h-20 items-center justify-center mb-2 mt-8`}
//           >
//             <Image
//               source={require("../../../assests/images/Avatars.png")}
//               style={tw`h-[48px] w-[48px]`}
//             />
//           </View>
//           <TouchableOpacity
//             style={tw`mt-5 border-2 border-yellow-500 rounded-6x p-2`}
//           >
//             <Text style={tw`text-blue-500 text-12px`}>+     Add Photo</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={tw`bg-white rounded-lg p-2 `}>
//           {/* Form Header */}
//           <Text style={tw`text-[16px] font-rubik mb-6`}>Create Pocket</Text>

//           {/* Pocket Name Input */}
//           <View style={tw`mb-4`}>
//             <Text style={tw`text-[14px] mb-2`}>Pocket Name</Text>
//             <TextInput
//               style={tw`bg-white border border-gray-300 rounded-lg p-3 text-14px`}
//               placeholder="Summer school fee"
//             />
//           </View>

//           {/* Target Amount Input */}
//           <View style={tw`mb-4`}>
//             <Text style={tw`text-[14px] mb-2`}>Enter Target Amount</Text>
//             <TextInput
//               style={tw`bg-white border border-gray-300 rounded-lg p-3 text-14px`}
//               placeholder="$5,000"
//               keyboardType="numeric"
//             />
//           </View>

//           {/* Description Input */}
//           <View style={tw`mb-6`}>
//             <Text style={tw`text-[14px] mb-2`}>Add Description</Text>
//             <TextInput
//               style={tw`bg-white border border-gray-300 rounded-lg p-3 text-14px h-14`}
//               placeholder="This is a goal target towards"
//               multiline
//             />
//           </View>
//         </View>

//         <TouchableOpacity
//           style={tw`bg-blue-500 rounded-full py-4 items-center`}
//           onPress={() => navigation.navigate("Vocation-Kids")}
//         >
//           <Text style={tw`text-white text-15px font-semibold`}>
//             Create Pocket Now
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }
