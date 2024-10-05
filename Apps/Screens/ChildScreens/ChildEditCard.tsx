import React, { useState } from "react";
import { View, Text, TextInput, Image , ScrollView } from "react-native";
import tw from "twrnc"; // Using Tailwind for styling
import { useNavigation } from "@react-navigation/native";
import HeaderWithBackButton from "../../Components/HeaderWithBackButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const ChildEditCard = () => {
  const navigation = useNavigation();

  // Form state
  const [cardHolderName, setCardHolderName] = useState("Micah Saman");
  const [cardNumber, setCardNumber] = useState("5061 2345 6789 1732");
  const [cardPin, setCardPin] = useState("2456");
  const [expiryDate, setExpiryDate] = useState("06/2025");
  const [cvv, setCvv] = useState("040");

  // Focus state for border color change
  const [focusedField, setFocusedField] = useState(null);

  // Method to handle input focus
  const handleFocus = (field) => setFocusedField(field);

  // Method to handle input blur
  const handleBlur = () => setFocusedField(null);

  return (
    <ScrollView style={tw`flex-1 bg-[#FFFAF0] p-4`}>
      {/* Profile Header */}
      <HeaderWithBackButton title={"Edit Card"} />

      {/* Profile Image */}
      <View style={tw`bg-white rounded-4x mb-4`}>
        <View style={tw`mx-auto items-center justify-center w-[330px] h-[174px]`}>
          <Image
            source={require("../../../assests/images/MasterCard.png")}
            style={tw`w-[330px] h-[174px]`}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Card Information Form */}
      <Text style={tw`text-16px font-600 mb-4`}>Card Information</Text>

      {/* Cardholder Name */}
      <Text style={tw`mb-2 text-gray-700 font-500 text-14px`}>Cardholder Name</Text>
      <TextInput
        value={cardHolderName}
        onChangeText={setCardHolderName}
        style={tw`border p-3 rounded-lg mb-4 bg-white ${
          focusedField === "cardHolderName" ? "border-[#FA9874]" : "border-[#D0D5DD]"
        }`}
        onFocus={() => handleFocus("cardHolderName")}
        onBlur={handleBlur}
        placeholder="Cardholder Name"
      />

      {/* Card Number */}
      <Text style={tw`mb-2 text-gray-700 font-500 text-14px`}>Card Number</Text>
      <TextInput
        value={cardNumber}
        onChangeText={setCardNumber}
        style={tw`border p-3 rounded-lg mb-4 bg-white ${
          focusedField === "cardNumber" ? "border-[#FA9874]" : "border-[#D0D5DD]"
        }`}
        onFocus={() => handleFocus("cardNumber")}
        onBlur={handleBlur}
        placeholder="Card Number"
        keyboardType="numeric"
      />

      {/* Card Pin */}
      <Text style={tw`mb-2 text-gray-700 font-500 text-14px`}>Card Pin</Text>
      <TextInput
        value={cardPin}
        onChangeText={setCardPin}
        style={tw`border p-3 rounded-lg mb-4 bg-white ${
          focusedField === "cardPin" ? "border-[#FA9874]" : "border-[#D0D5DD]"
        }`}
        onFocus={() => handleFocus("cardPin")}
        onBlur={handleBlur}
        placeholder="Card Pin"
        keyboardType="numeric"
        secureTextEntry={true}
      />

      {/* Expiry Date and CVV */}
      <View style={tw`flex-row justify-between`}>
        <View style={tw`w-[48%]`}>
          <Text style={tw`mb-2 text-gray-700 font-500 text-14px`}>Expiry Date</Text>
          <TextInput
            value={expiryDate}
            onChangeText={setExpiryDate}
            style={tw`border p-3 rounded-lg bg-white ${
              focusedField === "expiryDate" ? "border-[#FA9874]" : "border-[#D0D5DD]"
            }`}
            onFocus={() => handleFocus("expiryDate")}
            onBlur={handleBlur}
            placeholder="MM/YYYY"
            keyboardType="numeric"
          />
        </View>
        <View style={tw`w-[48%]`}>
          <Text style={tw`mb-2 text-gray-700 font-500 text-14px`}>CVV</Text>
          <TextInput
            value={cvv}
            onChangeText={setCvv}
            style={tw`border p-3 rounded-lg bg-white ${
              focusedField === "cvv" ? "border-[#FA9874]" : "border-[#D0D5DD]"
            }`}
            onFocus={() => handleFocus("cvv")}
            onBlur={handleBlur}
            placeholder="CVV"
            keyboardType="numeric"
            secureTextEntry={true}
          />
        </View>
      </View>
    </ ScrollView>
  );
};

export default ChildEditCard;
