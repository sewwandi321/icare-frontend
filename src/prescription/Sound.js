import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function Sound() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../../assets/Test.wav')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
    // sound.unloadAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
        
        }
      : undefined;
  }, [sound]);

  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}
