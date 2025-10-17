import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // ✅ useRouter for navigation
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, { G, Path } from "react-native-svg";
import WindowsLoader from "./windowsloader";

export default function TransferScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const transfers = [
    { title: "Transfer to CBE Account", subtitle: "Transfer to CBE Account" },
    { title: "Transfer to CBE/Birr Wallet", subtitle: "Bank to CBE/Birr Wallet transfer" },
    { title: "Make Payment to Beneficiary", subtitle: "Transfer to your beneficiaries" },
    { title: "Own Account Transfer", subtitle: "Transfer between your accounts" },
    { title: "Local Money Transfer", subtitle: "Transfer to any non CBE customer" },
    { title: "Transfer to own Telebirr Wallet", subtitle: "Transfer to own Telebirr Wallet" },
    { title: "Transfer to Other Banks", subtitle: "Transfer to Other Banks" },
    { title: "Transfer to Wallet", subtitle: "Transfer to Wallets" },
    { title: "Transfer to Micro Finance Institution", subtitle: "Deposit Micro Finance Institution" },
    { title: "Transfer to CBE/Birr Agent", subtitle: "Transfer to CBE/Birr Agent" },
  ];

  const handlePress = (index: number) => {
    if (index === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        router.push("/sendersavingpage"); 
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#970e97ff" />
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={22} color="#970e97ff" style={{ marginRight: 15 }} />
          <Text style={{ color: "#970e97ff", fontWeight: "500", marginRight: 15 }}>አማ</Text>
          <Ionicons name="refresh" size={22} color="#970e97ff" />
        </View>
      </View>

      <Text style={styles.headerText}>transfer</Text>
      <ScrollView style={styles.list}>
        {transfers.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item} onPress={() => handlePress(index)}>
            <Svg viewBox="0 0 64 64" width={36} height={36} stroke="#800080" strokeWidth="2" style={styles.svgicon}>
              <G transform="rotate(90, 32, 32)" fill="#970e97ff">
                <Path d="M22.15,39.23a.53.53,0,0,0-.71,0L17,43.72V32A15.06,15.06,0,0,1,32,17a.5.5,0,0,0,.5-.5V12.77a.5.5,0,0,0-.5-.5A19.75,19.75,0,0,0,12.27,32V43.72L7.78,39.23a.5.5,0,0,0-.35-.14h0a.52.52,0,0,0-.35.14L4.46,41.85a.5.5,0,0,0,0,.71l9.79,9.79a.51.51,0,0,0,.36.15.5.5,0,0,0,.35-.15l9.8-9.79a.51.51,0,0,0,0-.71Z"/>
                <Path d="M59.53,21.44l-9.79-9.79a.5.5,0,0,0-.71,0l-9.8,9.79a.51.51,0,0,0,0,.71l2.62,2.62a.53.53,0,0,0,.71,0L47,20.28V32A15.06,15.06,0,0,1,32,47a.5.5,0,0,0-.5.5v3.69a.5.5,0,0,0,.5.5A19.75,19.75,0,0,0,51.73,32V20.28l4.49,4.49a.5.5,0,0,0,.35.14h0a.52.52,0,0,0,.35-.14l2.61-2.62A.5.5,0,0,0,59.53,21.44Z"/>
              </G>
            </Svg>
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

      {/* Loading Spinner */}
      {loading && (
        <View style={styles.loadingOverlay}>
          {/* <ActivityIndicator size="large" color="#970e97ff" />
         */}
         <WindowsLoader/>
          <Text style={styles.loader}>Loading.....</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "#fffdfdff",
    paddingVertical: 20,
  },
  headerText: { fontSize: 24, fontWeight: "400", color: "#2E2E2E", textAlign: "center" },
  headerIcons: { flexDirection: "row" },
  list: { flex: 1 },
  svgicon: { marginRight: 15 },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  title: { fontSize: 16, fontWeight: "500", color: "#351C75" },
  subtitle: { fontSize: 13, color: "#777" },
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
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: { marginTop: 10, fontSize: 30, color: "#970e97ff" },
});
