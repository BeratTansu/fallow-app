import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useFonts, CormorantGaramond_400Regular, CormorantGaramond_600SemiBold } from '@expo-google-fonts/cormorant-garamond';
import { DMMono_400Regular } from '@expo-google-fonts/dm-mono';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    CormorantGaramond_400Regular,
    CormorantGaramond_600SemiBold,
    DMMono_400Regular
  });

  const [selectedEnergy, setSelectedEnergy] = useState(0);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FALLOW</Text>
      <Text style={styles.greeting}>Günaydın, Berat</Text>
      <Text style={styles.question}>Bugün nasıl hissediyorsun?</Text>
      <Text style={styles.date}>Pazartesi, 30 Mart</Text>

      <View style={styles.energyGrid}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <TouchableOpacity
            key={num}
            style={[
              styles.energyButton,
              selectedEnergy === num && styles.energyButtonSelected
            ]}
            onPress={() => setSelectedEnergy(num)}
          >
            <Text style={[
              styles.energyButtonText,
              selectedEnergy === num && styles.energyButtonTextSelected
            ]}>
              {num}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Devam Et</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d1117',
    paddingHorizontal: 20,
  },
  logo: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    fontSize: 36,
    color: '#ffffff',
    letterSpacing: 8,
    marginBottom: 4,
  },
  greeting: {
    fontFamily: 'CormorantGaramond_400Regular',
    fontSize: 18,
    color: '#8b949e',
    marginBottom: 6,
  },
  date: {
    fontFamily: 'DMMono_400Regular',
    fontSize: 11,
    color: '#484f58',
    letterSpacing: 2,
    marginBottom: 48,
  },
  question: {
    fontFamily: 'DMMono_400Regular',
    fontSize: 11,
    color: '#238636',
    letterSpacing: 3,
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  energyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 48,
  },
  energyButton: {
    width: 54,
    height: 54,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#21262d',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161b22',
  },
  energyButtonSelected: {
    backgroundColor: '#0f2c1a',
    borderColor: '#238636',
  },
  energyButtonText: {
    fontFamily: 'DMMono_400Regular',
    fontSize: 15,
    color: '#484f58',
  },
  energyButtonTextSelected: {
    color: '#3fb950',
  },
  continueButton: {
    width: '100%',
    paddingVertical: 16,
    backgroundColor: '#238636',
    borderRadius: 8,
    alignItems: 'center',
  },
  continueText: {
    fontFamily: 'DMMono_400Regular',
    fontSize: 13,
    color: '#ffffff',
    letterSpacing: 3,
  },
});