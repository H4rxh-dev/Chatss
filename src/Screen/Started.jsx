import { StyleSheet, Text, View ,Image} from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const Started = ({navigation}) => {
   const insets = useSafeAreaInsets();


   useEffect(()=>{

setTimeout(() => {
  navigation.replace("Mainstack")
},2000);

   },)

  return (
<SafeAreaView
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 20,
        },
      ]}
    >

      <View style={styles.content}>
        <Image
          source={require('../assets/Chats.jpeg')}
          style={styles.image}
          resizeMode="contain"
        />


        <Text style={styles.imageText}>
          Connected Together with{"\n"}Your Friends
        </Text>

        <Text style={styles.title}>
          Make it easy to connect with{"\n"}each other and send messages or{"\n"}call quickly and easily.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Started;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  image: {
    width: 220,
    height: 220,
  },
  lottie: {
    width: 100,
    height: 100,
  },
  imageText: {
    fontSize: 23,
    color: '#112f63',
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 12,
    color: '#4a4a4a',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
});