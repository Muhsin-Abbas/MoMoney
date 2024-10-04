import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView,Image } from 'react-native';
import tw from '../../tw';
import HeaderWithBackButton from '../Components/HeaderWithBackButton';
import { useNavigation } from '@react-navigation/native';

export default function CreatePocket() {
  const navigation= useNavigation();
  return (
    <ScrollView style={[tw`flex-1 bg-gray-100`, { backgroundColor: "#F9FAFB" }]}>
      <View style={tw`p-4`}>
        <HeaderWithBackButton title={"Create A New Pocket"}/>

        <View style={tw`items-center mb-6`}>
          <View style={tw`bg-white w-[358px] h-20 items-center justify-center mb-2 mt-8`}>
            <Image source={require('../../assests/images/Avatars.png')} style={tw `h-[48px] w-[48px]`}/>
          </View>
          <TouchableOpacity style={tw `mt-5`}>
            <Text style={tw`text-blue-500 text-12px`}>+  Add Photo</Text>
          </TouchableOpacity>
        </View>

        <View style={tw`bg-white rounded-lg p-2 `}>
        {/* Form Header */}
        <Text style={tw`text-[16px] font-rubik mb-6`}>Create Pocket</Text>

        {/* Pocket Name Input */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-[14px] mb-2`}>Pocket Name</Text>
          <TextInput
            style={tw`bg-white border border-gray-300 rounded-lg p-3 text-14px`}
            placeholder="Summer school fee"
          />
        </View>

        {/* Target Amount Input */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-[14px] mb-2`}>Enter Target Amount</Text>
          <TextInput
            style={tw`bg-white border border-gray-300 rounded-lg p-3 text-14px`}
            placeholder="$5,000"
            keyboardType="numeric"
          />
        </View>

        {/* Description Input */}
        <View style={tw`mb-6`}>
          <Text style={tw`text-[14px] mb-2`}>Add Description</Text>
          <TextInput
            style={tw`bg-white border border-gray-300 rounded-lg p-3 text-14px h-14`}
            placeholder="This is a goal target towards"
            multiline
          />
        </View>
      </View>

        <TouchableOpacity style={tw`bg-blue-500 rounded-full py-4 items-center`}
        // onPress={()=>navigation.navigate("Vocation-Kids")}
        >
          <Text style={tw`text-white text-15px font-semibold`}>Create Pocket Now</Text>
        </TouchableOpacity>
      </View>

     
    </ScrollView>
  );
}