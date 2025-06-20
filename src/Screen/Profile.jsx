
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: insets.top + 10,
            paddingBottom: insets.bottom + 20,
          },
        ]}
      >
        {/* Header with Back Button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={25} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Profile</Text>
          {/* Placeholder to center the title */}
          <View style={{ width: 25 }} />
        </View>

        {/* Profile Info */}
        <View style={styles.profileSection}>
          <Image source={require('../assets/Chats.jpeg')} style={styles.avatar} />
          <Text style={styles.name}>Groot</Text>
          <Text style={styles.tagline}>I am groot</Text>
        </View>

        {/* Options */}
{/* Options */}
<View style={styles.options}>
  <TouchableOpacity style={styles.option}>
    <Ionicons name="document-text-outline" size={22} color="#000" />
    <Text style={styles.optionText}>Chats</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.option}>
    <Ionicons name="notifications-outline" size={22} color="#000" />
    <Text style={styles.optionText}>Notifications</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.option}>
    <Ionicons name="moon-outline" size={22} color="#000" />
    <Text style={styles.optionText}>Dark Mode</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.option}>
    <Ionicons name="settings-outline" size={22} color="#000" />
    <Text style={styles.optionText}>Settings</Text>
  </TouchableOpacity>
</View>

{/* Logout Button */}
<View style={styles.logoutContainer}>
  <TouchableOpacity style={styles.logoutButton}>
    <Ionicons name="log-out-outline" size={22} color="#fff" />
    <Text style={styles.logoutText}>Logout</Text>
  </TouchableOpacity>
</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
      borderWidth: 2, // <- adds the border
  borderColor: '#88c3fd'
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  tagline: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
options: {
  paddingHorizontal: 20,
  backgroundColor: 'white',
  borderRadius: 12,
},

option: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 20,
  paddingHorizontal: 10,
  borderBottomWidth: 1,
  borderColor: '#e0e0e0',
  gap: 20,
},
  optionText: {
    fontSize: 16,
    color: '#000',
  },logoutContainer: {
  marginTop: 30,
  paddingHorizontal: 20,
},

logoutButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#88c3fd',
  paddingVertical: 16,
  borderRadius: 10,
  gap: 10,
},

logoutText: {
  fontSize: 16,
  color: '#fff',
  fontWeight: '600',
},

});
