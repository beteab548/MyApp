import React, { useState } from "react";
import {
    Dimensions,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import Svg, { Path } from "react-native-svg";
const { width } = Dimensions.get("window");

const SAMPLE_RESULTS = [
  {
    id: "1",
    name: "DEREJE REGASSA GORED",
    number: "1000018511208",
  },
  {
    id: "2",
    name: "TAMIRE GEBISA BIRU",
    number: "1000200148529",
  },
  {
    id: "3",
    name: "ZINE ABADIR ABAJIRU",
    number: "1000654797254",
  },
  {
    id: "4",
    name: "KALID A/DEGA A/JIRU",
    number: "1000654797254",
  },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>‹</Text>
        </TouchableOpacity>

        <View style={styles.topBarActions}>
          <TouchableOpacity style={styles.topIcon}>
          
<Svg width="20px" height="15px" >
  <Path
    stroke={"#970e97ff"}
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8.60124 1.25086C8.60124 1.75459 8.26278 2.17927 7.80087 2.30989C10.1459 2.4647 12 4.41582 12 6.79999V10.25C12 11.0563 12.0329 11.7074 12.7236 12.0528C12.931 12.1565 13.0399 12.3892 12.9866 12.6149C12.9333 12.8406 12.7319 13 12.5 13H8.16144C8.36904 13.1832 8.49997 13.4513 8.49997 13.75C8.49997 14.3023 8.05226 14.75 7.49997 14.75C6.94769 14.75 6.49997 14.3023 6.49997 13.75C6.49997 13.4513 6.63091 13.1832 6.83851 13H2.49999C2.2681 13 2.06664 12.8406 2.01336 12.6149C1.96009 12.3892 2.06897 12.1565 2.27638 12.0528C2.96708 11.7074 2.99999 11.0563 2.99999 10.25V6.79999C2.99999 4.41537 4.85481 2.46396 7.20042 2.3098C6.73867 2.17908 6.40036 1.75448 6.40036 1.25086C6.40036 0.643104 6.89304 0.150421 7.5008 0.150421C8.10855 0.150421 8.60124 0.643104 8.60124 1.25086ZM7.49999 3.29999C5.56699 3.29999 3.99999 4.86699 3.99999 6.79999V10.25L4.00002 10.3009C4.0005 10.7463 4.00121 11.4084 3.69929 12H11.3007C10.9988 11.4084 10.9995 10.7463 11 10.3009L11 10.25V6.79999C11 4.86699 9.43299 3.29999 7.49999 3.29999Z"
    fill="purple"
  />
</Svg>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topIcon}>
            <Text style={styles.topIconText}>አማ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topIcon}>
                  <Svg width="25px" height="15px" fill="none">
  <Path
  stroke={"#970e97ff"}
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z"
    fill="purple"
  />
</Svg>
          </TouchableOpacity>
        </View>
      </View>

      {/* Title card */}
      <View style={styles.titleCard}>
        {/* Replace fontFamily with a handwritten font for exact match */}
        <Text style={styles.titleText}>Saving - etb - 4014</Text>
      </View>

      {/* Input area */}
   <View style={styles.inputWrapper}>
  <View style={styles.inputBox}>
    <TextInput
      value={query}
      keyboardType="default"
      onChangeText={(t) => {
        setQuery(t);
        setShowResults(true);
      }}
      placeholder=""
      placeholderTextColor="#7b6b6b"
      style={styles.inputText}
    />
  </View>

  {/* Floating results card — positioned absolutely so it doesn’t push other elements */}
  {showResults && (
    <View style={styles.resultsCardAbsolute}>
      <FlatList
        data={SAMPLE_RESULTS}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.resultRow}
            onPress={() => {
              setQuery(item.number);
              setShowResults(false);
            }}
          >
            <View style={styles.avatarContainer}>
              <View style={styles.avatarPlaceholder}>
            <Svg width={20} height={20} fill="#970e97ff">
  <Path stroke="#970e97ff" d="M15 8.5C15 10.433 13.433 12 11.5 12C9.567 12 8 10.433 8 8.5C8 6.567 9.567 5 11.5 5C13.433 5 15 6.567 15 8.5Z" />
  <Path
    d="M17.6305 20H5.94623C5.54449 20 5.31716 19.559 5.56788 19.2451C6.68379 17.8479 9.29072 15 12 15C14.7275 15 17.0627 17.8864 18.0272 19.2731C18.2474 19.5897 18.0161 20 17.6305 20Z"
    stroke="#970e97ff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</Svg>
   </View>
            </View>

            <View style={styles.resultTextBlock}>
              <Text style={styles.resultName}>{item.name}</Text>
              <Text style={styles.resultNumber}>{item.number}</Text>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )}

  {/* Accept button — not affected by floating card */}
  <TouchableOpacity
    style={styles.acceptButton}
    onPress={() => {
      console.log("Accepted number:", query);
      // trigger your backend or navigation here
    }}
  >
    <Text style={styles.acceptButtonText}>Accept</Text>
  </TouchableOpacity>
</View>


      
    </SafeAreaView>
  );
}

const purple = "#970e97ff"; // use to mimic the magenta/purple in screenshot

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  iconButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 28,
    color: "#4a4a4a",
  },
  topBarActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  topIcon: {
    marginHorizontal: 8,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  topIconText: {
    fontSize: 16,
    color: purple,
  },
  resultsCardAbsolute: {
  position: "absolute",
  top: 70, // 👈 adjust based on inputBox height + marginTop
  left: 0,
  right: 0,
  backgroundColor: "#fff",
  borderRadius: 8,
  elevation: 3,
  shadowColor: "#000",
  shadowOpacity: 0.06,
  shadowOffset: { width: 0, height: 3 },
  shadowRadius: 6,
  overflow: "hidden",
  maxHeight: 220,
  zIndex: 10, // 👈 makes sure it appears above everything else
},

acceptButton: {
  backgroundColor: purple,
  borderRadius: 8,
  paddingVertical: 14,
  alignItems: "center",
  marginTop: 16,
  elevation: 2,
  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowOffset: { width: 0, height: 3 },
},
acceptButtonText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "600",
},

  titleCard: {
    marginHorizontal: 18,
    marginTop: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    alignItems: "center",
  },
  titleText: {
    // For exact match, set fontFamily to a handwritten font you've linked
    fontSize: 24,
    color: "#2e2e2e",
    fontWeight: "600",
    // fontFamily: 'YourHandwrittenFont'
  },

  inputWrapper: {
    marginHorizontal: 18,
    marginTop: 18,
  },
  inputBox: {
    borderWidth: 2,
    borderColor: purple,
    borderRadius: 8,
    padding: 12,
    minHeight: 56,
    justifyContent: "center",
  },
  inputText: {
    fontSize: 20,
    color: "#111",
    // fontFamily: 'YourHandwrittenFont'
  },

  resultsCard: {
  marginTop: 10,
  backgroundColor: "#fff",
  borderRadius: 8,
  elevation: 3,
  shadowColor: "#000",
  shadowOpacity: 0.06,
  shadowOffset: { width: 0, height: 3 },
  shadowRadius: 6,
  overflow: "hidden",
  maxHeight: 220,   // 👈 limit visible height
},

  resultRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  avatarContainer: {
    width: 48,
  
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f1eeeeff",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInitial: {
    fontSize: 18,
  },
  resultTextBlock: {
    marginLeft: 12,
    flex: 1,
  },
  resultName: {
    color: purple,
    fontWeight: "700",
    fontSize: 16,
    // fontFamily: 'YourHandwrittenFont'
  },
  resultNumber: {
    marginTop: 6,
    color: "#6b6b6b",
    fontSize: 14,
    // fontFamily: 'YourHandwrittenFont'
  },
  separator: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginLeft: 72,
  },

  keyboard: {
    backgroundColor: "#fff",
    borderTopWidth: 0.5,
    borderTopColor: "#e6e6e6",
  },
  suggestionsRow: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  suggestionText: {
    fontSize: 14,
    color: "#3a3a3a",
  },

  keysGrid: {
    padding: 8,
    backgroundColor: "#faf7f9",
  },
  keysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    flexWrap: "nowrap",
  },
  key: {
    width: (width - 32) / 10 - 6,
    height: 48,
    borderRadius: 6,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.02,
    shadowOffset: { width: 0, height: 1 },
    marginHorizontal: 3,
  },
  keySmall: {
    width: (width - 32) / 9 - 6,
    height: 48,
    borderRadius: 6,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 3,
  },
  keyText: {
    fontSize: 18,
    // fontFamily: 'YourHandwrittenFont'
  },

  bottomKeysRow: {
    alignItems: "center",
  },
  keyWide: {
    flex: 1,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  keySpace: {
    flex: 3.5,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
