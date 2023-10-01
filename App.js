import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

import Button from './components/button';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Sidenav}>
        <View style={styles.menu}>
          <MaterialCommunityIcons
            name="menu"
            size={30}
            color="black"
          />
        </View>
        <View style={styles.home}>
          <AntDesign 
            name="home" 
            size={30} 
            color="black" 
          />
        </View>
        <View style={styles.folder}>
          <FontAwesome
            name="folder-o"
            size={30}
            color="black"
          />
        </View>
        <View style={styles.calendar}>
          <MaterialCommunityIcons
            name="calendar-blank"
            size={30}
            color="black"
          />
        </View>
        <View style={styles.stats}>
          <MaterialCommunityIcons
            name="chart-line"
            size={30}
            color="black"
          />
        </View>
        <View style={styles.notif}>
          <Feather
           name="bell"
           size={30}
           color="black"
          />
        </View>
        <View style={styles.setting}>
          <Feather
           name="settings"
           size={30}
           color="black"
          />
        </View>
        <View style={styles.selected}>
        </View>
      </View>
      <Text>Dashboard Start</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Sidenav: {
    width: 57,
    height: 994,
    backgroundColor: '#B9FFEE',
    display: 'flex',
    position: 'absolute',
    isolation: 'isolate',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '0px',
    boxSizing: 'border-box',
    left: '9px',
    top: '6px',
    borderRadius: 15,
  },
  menu:{
    paddingTop: 29,
    paddingLeft: 16,
    paddingRight: 16,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
  },
  home: {
    position: 'absolute',
    paddingTop: 112,
    paddingLeft: 16,
    paddingRight: 16,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    
  },
  folder: {
    paddingTop: 179,
    paddingLeft: 16,
    paddingRight: 16,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
  },
  calendar: {
    position: 'absolute',
    paddingTop: 247,
    paddingLeft: 16,
    paddingRight: 16,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',

  },
  stats: {
    position: 'absolute',
    paddingTop: 315,
    paddingLeft: 16,
    paddingRight: 16,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',

  },
  notif:{
    position: 'absolute',
    paddingTop: 383,
    paddingLeft: 16,
    paddingRight: 16,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',

  },
  setting: {
    position: 'absolute',
    paddingTop: 945,
    paddingLeft: 16,
    paddingRight: 16,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  
  selected:{
    backgroundColor: "#AEAEAE",
    paddingTop: 40,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    marginTop: '108px',
    width: '100%',
    zIndex: -1,
  },
});
