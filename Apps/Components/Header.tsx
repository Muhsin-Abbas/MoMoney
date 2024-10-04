import React from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import tw from "../../tw"; 

const Header = ({ onAddMoneyPress }) => {
  const [roundupPurchase, setRoundupPurchase] = React.useState(false);

  return (
    <View style={tw`p-4 bg-white rounded-lg mt-10`}>
      <View style={tw`flex-row justify-between items-start`}>
        {/* Wallet Balance */}
        <View>
          <Text style={tw`text-2xl font-bold`}>$1,402.35</Text>
          <Text style={tw`text-gray-500 mt-2`}>My wallet Balance:</Text>
        </View>

        {/* Roundup Purchase */}
        <View style={tw`items-end`}>
      {/* Roundup Purchase Text Above Switch */}
      <Text style={tw`text-sm text-orange-500`}>Roundup purchase</Text>
      <View style={tw`items-center mr-9`}>
        {/* Switch */}
        <Switch
          value={roundupPurchase}
          onValueChange={(value) => setRoundupPurchase(value)}
          thumbColor={roundupPurchase ? "#FFFFFF" : "#FFFFFF"} // Thumb color for the switch
          trackColor={{ false: "#767577", true: "#FE4A02" }} // Track color when switch is on/off
        />
        {/* Switch Status */}
        <Text style={tw`text-xs text-gray-500`}>{roundupPurchase ? "on" : "off"}</Text>
      </View>
    </View>

      </View>

      {/* Action Buttons */}
      <View style={tw`flex-row mt-7 justify-between`}>
        <TouchableOpacity style={tw`bg-blue-500 w-[128px] h-[36px] rounded-full mr-2 items-center`}    onPress={onAddMoneyPress}>
          <Text style={tw`text-white text-center mt-2`}>+ Add money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`border border-blue-500 w-[140px] h-[36px] rounded-full flex-row items-center`}>
          <Text style={tw`text-blue-500 text-center ml-3`}>$ Set up autofund</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
