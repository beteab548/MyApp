import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Welcome to My App</Text>
      <Button title="Go to Receipt" onPress={() => router.push('/receipt')} />
              <Button title="Go to transfer page" onPress={() => router.push('/transferpage')} />
  <Button title="Go to saving page" onPress={() => router.push('/savingpage')} />
    </View>
  );
}
