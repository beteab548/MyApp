import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function TransferScreen() {
  const transfers = [
    { title: "saving - ETB- 4014", subtitle: "Balance : ETB 1200 .45" },
 
  ];
function handleBackPress() {
    // Handle back button press
    router.back();
  }

  const handlePress = () => {
        router.push("/accounts"); 
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#970e97ff"  onPress={handleBackPress}/>
        
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={22} color="#970e97ff" style={{ marginRight: 15 }} />
          <Text style={{ color: "#970e97ff", fontWeight: "500", marginRight: 15 }}>አማ</Text>
          <Ionicons name="refresh" size={22} color="#970e97ff" />
        </View>
      </View>
        <Text style={styles.headerText}>select</Text>

      {/* List */}
      <ScrollView style={styles.list}>
        {transfers.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item} onPress={handlePress}>
   
<Image
          source={require('../assets/officeicon.png')} 
           style={styles.officeicon}
        />
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="#d1cdd1ff" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Floating QR button */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="qr-code" size={26} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "#fffdfdff",
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "400",
    color: "#2E2E2E",
    textAlign: "center",
  },
  headerIcons: {
    flexDirection: "row",
  },
  list: {
    flex: 1,
  },
  svgicon: {
    marginRight: 15,
  },
  officeicon:{
  
    marginRight: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  icon: {
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#351C75",
  },
  subtitle: {
    fontSize: 13,
    color: "#777",
  },
  fab: {
    position: "absolute",
    bottom: 25,
    right: 25,
    backgroundColor: "#970e97ff",
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
