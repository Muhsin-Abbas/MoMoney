import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import tw from "twrnc";
import GreetingHeader from "../../Components/GreetingHeader";

const ChildHomeScreen = () => {
  const brandDeals = [
    {
      id: 1,
      image: require("../../../assests/images/invest.png"),
      title: "Enjoy 30% discount on",
      subtitle: "premium features",
      code: "MOMENEY5",
      buttonText: "Subscribe now",
    },
    {
      id: 2,
      image: require("../../../assests/images/invest.png"),
      title: "Get 20% off on",
      subtitle: "annual subscriptions",
      code: "SAVEBIG20",
      buttonText: "Get offer",
    },
    // Add more deals as needed
  ];
  return (
    <ScrollView style={tw`bg-[#FFFBEA]`}>
      <View style={tw`p-4`}>
        {/* Header */}
        <GreetingHeader name={"Hello, Micah"}/>

        {/* Spending and Balance */}
        <View style={tw`bg-[#4B3F1D] rounded-xl p-5 mb-8 mt-8`}>
          <View style={tw`flex-row justify-around mb-5`}>
            <View>
              <Text style={tw`text-white text-24px font-bold ml-2`}>
                $24.20
              </Text>
              <Text style={tw`text-white`}>Spent this week</Text>
            </View>
            <View>
              <Text style={tw`text-white text-2xl font-bold ml-4`}>$9.50</Text>
              <Text style={tw`text-white`}>Available to spend</Text>
            </View>
          </View>
          <View style={tw`flex-row justify-between`}>
            <TouchableOpacity
              style={tw`bg-white rounded-full py-2 px-5.5 h-[36px]`}
            >
              <Text style={tw`text-[#4B3F1D] font-semibold`}>+ Add money</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`border border-white rounded-full py-2 px-4 flex-row items-center h-[36px]`}
            >
              <Text style={tw`text-white font-semibold text-14px `}>
                ⬆ Quick Transfer
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Brand Deals */}
        <Text style={tw`text-xl font-bold mb-4 font-rubik`}>Brand Deals</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`mb-8`}
        >
          {brandDeals.map((deal) => (
            <View
              key={deal.id}
              style={tw`rounded-5x mr-4 overflow-hidden h-[136px] w-[284px]`}
            >
              {/* Image as background */}
              <Image source={deal.image} style={tw`w-full h-full absolute`} />

              {/* Overlaying text */}
              <View style={tw`p-2`}>
                <View style={tw`ml-10px`}>
                  <Image
                    source={require("../../../assests/images/logos.png")}
                    style={tw`w-[93px] h-[29px]`}
                  />

                  <Text style={tw`text-white font-bold mt-1px text-13px`}>
                    {deal.title}
                  </Text>
                  <Text style={tw`text-white font-bold text-13px`}>
                    {deal.subtitle}
                  </Text>
                  <Text style={tw`text-gray-200 text-xs mb-2 text-6px`}>
                    Use code "{deal.code}"
                  </Text>
                </View>
                <TouchableOpacity
                  style={tw`bg-green-500 rounded-full py-1.5 px-4 self-end`}
                >
                  <Text style={tw`text-white font-semibold mr-10px`}>
                    {deal.buttonText}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Account Summary */}
        <View style={tw`bg-[#FFD700] rounded-7x p-6 mb-8`}>
          <View style={tw`items-center mb-4`}>
            <View
              style={tw`bg-white rounded-full w-14 h-14 items-center justify-center mb-2`}
            >
              <Image
                source={require("../../../assests/images/Avatars.png")}
                style={tw`h-[64px] w-[64px]`}
              />
            </View>
            <Text style={tw`font-semibold`}>Micah</Text>
          </View>
          <View style={tw`flex-row justify-between mb-4`}>
            <View>
              <Text style={tw`text-2xl font-bold`}>$24.50</Text>
              <Text>On your card</Text>
            </View>
            <View>
              <Text style={tw`text-2xl font-bold ml-13px`}>$9.50</Text>
              <Text>In your savings</Text>
            </View>
          </View>
          <View style={tw`flex-row justify-between items-center`}>
            <Text>Your money in total</Text>
            <Text style={tw`text-2xl font-bold`}>$34.00</Text>
          </View>
        </View>

        {/* Invite a Friend */}
        <TouchableOpacity
          style={tw`bg-[#A0C4FF] rounded-5x items-center mb-8 h-[120px] justify-center`}
        >
          <View
            style={tw``}
          >
            <Image
              source={require("../../../assests/images/Avatars.png")}
              style={tw`h-[64px] w-[64px]`}
            />
          </View>
          <Text style={tw`text-14px font-semibold mt-7px`}>
            Invite a friend and split your bills
          </Text>
        </TouchableOpacity>

        {/* Next Allowance */}
        <View
          style={tw`flex-row items-center bg-[#E0F7FA] rounded-xl p-4`}
        >
          <Image source={require('../../../assests/images/Avatars.png')} style={tw `w-[24px] h-[24px]`}/>
          
          <Text style={tw`text-14px ml-3`}>Next allowance is in 5 hours</Text>
       
          <Text style={tw`text-14px font-500 ml-7`}>$10.00</Text>
          
        </View>
      </View>
    </ScrollView>
  );
};

export default ChildHomeScreen;

