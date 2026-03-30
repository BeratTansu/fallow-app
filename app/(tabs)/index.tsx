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
    backgroundColor: '#0d1f14',
    paddingHorizontal: 24,
  },
  logo: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    fontSize: 38,
    color: '#ffffff',
    letterSpacing: 6,
    marginBottom: 4,
  },
  greeting: {
    fontFamily: 'CormorantGaramond_400Regular',
    fontSize: 18,
    color: '#8a9e8f',
    marginBottom: 8,
  },
  date: {
    fontFamily: 'DMMono_400Regular',
    fontSize: 12,
    color: '#4a6650',
    marginBottom: 40,
    letterSpacing: 1,
  },
  question: {
    fontFamily: 'CormorantGaramond_400Regular',
    fontSize: 13,
    color: '#4a6650',
    letterSpacing: 2,
    marginBottom: 16,
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
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#1e3d28',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111f16',
  },
  energyButtonSelected: {
    backgroundColor: '#2d6a3f',
    borderColor: '#3d8a52',
  },
  energyButtonText: {
    fontFamily: 'DMMono_400Regular',
    fontSize: 16,
    color: '#4a6650',
  },
  energyButtonTextSelected: {
    color: '#ffffff',
  },
  continueButton: {
    paddingHorizontal: 48,
    paddingVertical: 16,
    backgroundColor: '#2d6a3f',
    borderRadius: 8,
  },
  continueText: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    fontSize: 18,
    color: '#ffffff',
    letterSpacing: 2,
  },
});