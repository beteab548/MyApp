// Dashboard.tsx
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { FC, useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// NOTE: Navigation removed from this file. Your index.tsx (or router) should handle navigation to this page.
// Example (in index.tsx with a router available):
// <Button title="dashboard" onPress={() => router.push('/dashboard')} />

const { width } = Dimensions.get("window");

const Dashboard: FC = () => {
  const [transferVisible, setTransferVisible] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Top bar icons */}
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="menu" size={26} color="#8B1C9A" />
          </TouchableOpacity>

          <View style={styles.topRightIcons}>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons
                name="notifications-outline"
                size={22}
                color="#8B1C9A"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="refresh" size={22} color="#8B1C9A" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Card: account summary */}
        <ImageBackground
          style={styles.card}
          imageStyle={styles.cardImage}
          source={require("../assets/images/cardpattern.jpg")}
        >
          <View style={styles.cardTopRow}>
            <Image
              source={require("../assets/cbe_logo2.jpg")}
              style={styles.logo}
            />
            <View style={{ flex: 1 }} />
            <TouchableOpacity style={styles.copyBtn}>
              <Ionicons name="copy-outline" size={18} color="#E5C072" />
            </TouchableOpacity>
          </View>

          <Text style={styles.bankTitle}>Commercial Bank of Ethiopia</Text>
          <Text style={styles.bankSubtitle}>
            The Bank You can always Rely on!
          </Text>

          <Text style={styles.userName}>BETEAB BAYNESAGN BERHE</Text>

          <View style={styles.balanceRow}>
            <Text style={styles.stars}>*****</Text>
            <Text style={styles.currency}> Br.</Text>
            <TouchableOpacity style={styles.eyeBtn}>
              <Ionicons name="eye" size={20} color="#E5C072" />
            </TouchableOpacity>
          </View>

          <Text style={styles.accountType}>Saving - 1000*****4014</Text>

          <Text style={styles.dateStamp}>Oct 16, 2025 9:52:47 PM</Text>
        </ImageBackground>

        {/* Quick Pay */}
        <View style={styles.quickPayWrap}>
          <LinearGradient
            colors={["#b252d6", "#8B1C9A"]}
            style={styles.quickPayButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.quickPayText}>Quick Pay</Text>
          </LinearGradient>

          <Text style={styles.servicesLabel}>Services</Text>

          {/* Services grid */}
          <View style={styles.servicesContainer}>
            <View style={styles.serviceRow}>
              <ServiceCard
                icon={
                  <Ionicons name="swap-horizontal" size={28} color="#8B1C9A" />
                }
                label="Transfer"
                onPress={() => setTransferVisible(true)}
              />
              <ServiceCard
                icon={
                  <Ionicons name="phone-portrait" size={28} color="#8B1C9A" />
                }
                label="Telecom Service"
              />
            </View>

            <View style={styles.serviceRow}>
              <ServiceCard
                icon={
                  <FontAwesome5 name="house-user" size={26} color="#8B1C9A" />
                }
                label="Utilities"
              />
              <ServiceCard
                icon={<Ionicons name="help-circle" size={28} color="#8B1C9A" />}
                label="help"
              />
            </View>

            <View style={styles.serviceRow}>
              <ServiceCard
                icon={<Ionicons name="business" size={28} color="#8B1C9A" />}
                label="Banking"
              />
              <ServiceCard
                icon={<Ionicons name="calendar" size={28} color="#8B1C9A" />}
                label="events"
              />
            </View>
          </View>
        </View>

        {/* Padding at bottom so content sits above bottom nav */}
        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Floating QR button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => Alert.alert("QR", "Open QR scanner (not implemented) ")}
      >
        <View style={styles.fabInner}>
          <MaterialCommunityIcons name="qrcode-scan" size={22} color="#fff" />
        </View>
      </TouchableOpacity>

      {/* Bottom nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="grid" size={22} color="#fff" />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cash" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="business" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="time" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Transfer modal (no navigation required) */}
      <TransferModal
        visible={transferVisible}
        onClose={() => setTransferVisible(false)}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

type ServiceCardProps = {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
};

const ServiceCard: FC<ServiceCardProps> = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.serviceButton}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.iconWrapper}>{icon}</View>
      <Text style={styles.serviceLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const TransferModal: FC<{ visible: boolean; onClose: () => void }> = ({
  visible,
  onClose,
}) => {
  const [account, setAccount] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [note, setNote] = useState<string>("");

  function handleSend() {
    if (!account.trim())
      return Alert.alert("Error", "Please enter recipient account number.");
    const num = Number(amount);
    if (!amount || isNaN(num) || num <= 0)
      return Alert.alert("Error", "Enter a valid amount.");

    Alert.alert("Confirm Transfer", `Send ${amount} Br. to ${account}?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Send",
        onPress: () => {
          setAccount("");
          setAmount("");
          setNote("");
          Alert.alert("Success", "Transfer completed (simulated).");
          onClose();
        },
      },
    ]);
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={modalStyles.overlay}>
        <View style={modalStyles.container}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#111" }}>
              Transfer
            </Text>
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={22} color="#8B1C9A" />
            </TouchableOpacity>
          </View>

          <Text style={{ marginBottom: 6, color: "#444", fontWeight: "600" }}>
            Recipient Account
          </Text>
          <TextInput
            value={account}
            onChangeText={setAccount}
            placeholder="Enter account number"
            keyboardType="number-pad"
            style={inputStyle}
          />

          <Text
            style={{
              marginTop: 12,
              marginBottom: 6,
              color: "#444",
              fontWeight: "600",
            }}
          >
            Amount (Br.)
          </Text>
          <TextInput
            value={amount}
            onChangeText={setAmount}
            placeholder="0.00"
            keyboardType="numeric"
            style={inputStyle}
          />

          <Text
            style={{
              marginTop: 12,
              marginBottom: 6,
              color: "#444",
              fontWeight: "600",
            }}
          >
            Note (optional)
          </Text>
          <TextInput
            value={note}
            onChangeText={setNote}
            placeholder="Reason for transfer"
            style={inputStyle}
          />

          <TouchableOpacity
            style={styles.sendBtn}
            onPress={handleSend}
            activeOpacity={0.85}
          >
            <Text style={styles.sendBtnText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const inputStyle = {
  borderWidth: 1,
  borderColor: "#eee",
  borderRadius: 8,
  paddingHorizontal: 12,
  paddingVertical: 10,
  backgroundColor: "#fff",
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: 20,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 2,
  },
  iconBtn: {
    padding: 6,
  },
  topRightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },

  /* CARD */
  card: {
    width: "100%",
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#1f2933",
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  cardImage: {
    resizeMode: "stretch",
    width: "100%",
  },
  cardTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  logo: {
    width: 46,
    height: 46,
    resizeMode: "contain",
  },
  copyBtn: {
    marginLeft: 8,
  },
  bankTitle: {
    color: "#E5C072",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 4,
  },
  bankSubtitle: {
    color: "#E5C072",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 8,
  },
  userName: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 6,
    letterSpacing: 0.4,
  },
  balanceRow: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  stars: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "600",
  },
  currency: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "700",
    marginLeft: 6,
  },
  eyeBtn: {
    marginLeft: 8,
  },
  accountType: {
    color: "#F3DFA5",
    fontSize: 13,
    textAlign: "center",
    marginTop: 6,
  },
  dateStamp: {
    color: "#fff",
    fontSize: 11,
    textAlign: "center",
    marginTop: 8,
    opacity: 0.9,
  },

  /* QUICK PAY and SERVICES */
  quickPayWrap: {
    alignItems: "center",
    marginBottom: 4,
  },
  quickPayButton: {
    width: width * 0.58,
    height: 44,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    elevation: 3,
  },
  quickPayText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  servicesLabel: {
    fontSize: 16,
    color: "#8B1C9A",
    fontWeight: "600",
    marginBottom: 12,
    alignSelf: "flex-start",
    marginLeft: 6,
  },
  servicesContainer: {
    width: "100%",
  },
  serviceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  serviceButton: {
    width: "48%",
    height: 100,
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#F0E6F5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  iconWrapper: {
    marginBottom: 8,
    color: "#8B1C9A",
  },
  serviceLabel: {
    color: "#6a2e7b",
    fontSize: 14,
    fontWeight: "600",
    textTransform: "capitalize",
  },

  /* Floating QR button */
  fab: {
    position: "absolute",
    right: 18,
    bottom: 76,
  },
  fabInner: {
    width: 58,
    height: 58,
    borderRadius: 58,
    backgroundColor: "#8B1C9A",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#8B1C9A",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },

  /* Bottom nav */
  bottomNav: {
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 12,
    height: 64,
    backgroundColor: "#8B1C9A",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 6,
    shadowColor: "#8B1C9A",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navTextActive: {
    color: "#fff",
    fontSize: 12,
    marginTop: 4,
    fontWeight: "600",
  },

  sendBtn: {
    marginTop: 20,
    backgroundColor: "#8B1C9A",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  sendBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});

const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#fff",
    padding: 18,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});
