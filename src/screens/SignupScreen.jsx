import { View, Text, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, { FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';


const SignupScreen= () => {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full">
      <StatusBar barStyle={"light-content"}/>
      <Image className="h-full w-full absolute" source={require("../../assets/images/background.png")} />


      {/** light */}

<View className="absolute flex-row justify-around w-full">

<Animated.Image 
entering={FadeInUp.delay(200).duration(1000).springify()}
className="h-[225] w-[90]" source={require("../../assets/images/light.png")}/>
<Animated.Image 
entering={FadeInUp.delay(400).duration(1000).springify()} className="h-[160] w-[65]" source={require("../../assets/images/light.png")}/>

</View>

{/**title and form */}

<View className="flex justify-around w-full h-full pt-40 pb-10">

{/**Title */}
<View className="flex items-center">
  <Animated.Text 
  entering={FadeInUp.delay(200).duration(1000).springify()}
  className="text-white font-bold tracking-wider text-5xl">SignUp</Animated.Text>
</View>

{/**form */}
<View className="flex items-center mx-4 space-y-4">

<Animated.View
entering={FadeInUp.duration(1000).springify()}
 className="bg-black/5 p-5 rounded-2xl w-full">
<TextInput placeholder='UserName' placeholderTextColor={"gray"} />
</Animated.View>


<Animated.View
entering={FadeInUp.duration(1000).springify()}
 className="bg-black/5 p-5 rounded-2xl w-full">
<TextInput placeholder='E-mail' placeholderTextColor={"gray"} />
</Animated.View>


<Animated.View 
entering={FadeInUp.duration(1000).springify()}
className="bg-black/5 p-5 rounded-2xl w-full">
<TextInput placeholder='Password' placeholderTextColor={"gray"} 
secureTextEntry

/>
</Animated.View>

<View className="w-full">
  <TouchableOpacity className="w-full p-3 bg-sky-400 mb-3 rounded-2xl">
<Text className="text-2xl text-center font-bold text-white">SingUp</Text>
  </TouchableOpacity>
</View>

<Animated.View 
entering={FadeInUp.delay(400).duration(1000).springify()}
className="flex-row justify-center">
  <Text>Already have an account?</Text>
  <TouchableOpacity onPress={()=>navigation.navigate("Login")

  }>
    <Text className="text-sky-400 ">Login</Text>
  </TouchableOpacity>

</Animated.View>


</View>

</View>
</View>
    
  )
}

export default SignupScreen;