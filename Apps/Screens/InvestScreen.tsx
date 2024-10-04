import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from '../../tw'; 
import HeaderWithBackButton from '../Components/HeaderWithBackButton';

export default function InvestScreen() {
  const navigation = useNavigation();

  const cards = [
    {
      title: 'Invest',
      description: 'Kids buy real stocks with as little as $1. Parents approve every trade.',
      image: require('../../assests/images/invest.png'),
    },
    {
      title: 'Learn',
      description: 'Track performance together by learning mode to give your kids an edge',
      image: require('../../assests/images/investImg.png'),
    },
    // Add more cards if necessary
  ];

  return (
    <SafeAreaView style={[tw`flex-1 bg-gray-100`, { backgroundColor: "#F9FAFB" }]}>
      <ScrollView>
        <View style={tw`p-4`}>
          <HeaderWithBackButton title={"Invest"} />

          {/* Two-column layout */}
          <View style={tw`flex-row flex-wrap justify-between mt-5`}>
            {cards.map((card, index) => (
              <View
                key={index}
                style={tw`w-[48%] bg-white mb-4  rounded-lg`}
              >
                <Image source={card.image} style={tw`w-full h-40 mb-1`} />
                <Text style={tw`text-xl font-600 text-16px`}>{card.title}</Text>
                <Text style={tw`text-gray-600 text-12px font-400`}>{card.description}</Text>
              </View>
            ))}

            {/* Duplicate cards for additional content */}
            {cards.map((card, index) => (
              <View
                key={index + cards.length}
                style={tw`w-[48%] bg-white mb-4 rounded-lg`}
              >
                <Image source={card.image} style={tw`w-full h-40  mb-1`} />
                <Text style={tw`text-xl font-600 text-16px `}>{card.title}</Text>
                <Text style={tw`text-gray-600  text-12px font-400`}>{card.description}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={tw`bg-white rounded-full py-3 items-center mt-4 border border-blue-300`}>
            <Text style={tw`text-blue-500 text-lg font-semibold`}>Learn more</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
