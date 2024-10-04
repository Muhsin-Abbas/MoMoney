import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import tw from '../../tw';
import HeaderWithBackButton from '../Components/HeaderWithBackButton';

export default function VacationKids() {
  return (
    <ScrollView style={[tw`flex-1 bg-gray-100`, { backgroundColor: "#F9FAFB" }]}>
      <View style={tw`p-4`}>
        <HeaderWithBackButton title={"Vacation for Kids"} />

        {/* Current Section */}
        <View style={tw`items-center mb-6`}>
          <View style={tw`bg-white w-[358px] h-20 items-center justify-center mb-2 mt-8`}>
            <Image source={require('../../assests/images/Avatars.png')} style={tw`h-[48px] w-[48px]`} />
          </View>
          <View style={tw`mt-5 items-center`}>
            <Text style={tw`text-black text-12px`}>Save Anytime</Text>
            <Text style={tw`text-black text-12px font-700`}>$4.00</Text>
          </View>
        </View>

        {/* New Button Grid Section with Icons - Two Column */}
        <View style={tw`flex-row flex-wrap justify-between mt-4`}>
          <TouchableOpacity style={tw`bg-gray-100 w-[48%] h-[50px] rounded-full flex-row justify-center items-center mb-4`}>
            <Image source={require('../../assests/images/plus.png')} style={tw`w-4 h-4 mr-2`} />
            <Text style={tw`text-blue-500 text-12px`}>Add Money</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={tw`bg-gray-100 w-[48%] h-[50px] rounded-full flex-row justify-center items-center mb-4`}>
            <Image source={require('../../assests/images/plus.png')} style={tw`w-4 h-4 mr-2`} />
            <Text style={tw`text-blue-500 text-12px`}>Withdraw</Text>
          </TouchableOpacity>

          <TouchableOpacity style={tw`bg-gray-100 w-[48%] h-[50px] rounded-full flex-row justify-center items-center mb-4`}>
            <Image source={require('../../assests/images/plus.png')} style={tw`w-4 h-4 mr-2`} />
            <Text style={tw`text-blue-500 text-12px`}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity style={tw`bg-gray-100 w-[48%] h-[50px] rounded-full flex-row justify-center items-center mb-4`}>
            <Image source={require('../../assests/images/plus.png')} style={tw`w-4 h-4 mr-2`} />
            <Text style={tw`text-blue-500 text-12px`}>Edit</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}
