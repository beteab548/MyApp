import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ReceiptScreen() {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
         <View style={styles.HeaderTextContainer}>
 <Image
          source={require('../assets/shildicon.png')} 
           style={styles.shildIcon}
        />
        <View style={styles.footerTextContainer}>

        <Text style={styles.successText}>Thank You!</Text>
        <Text style={styles.status}>Success</Text>
        
         </View>
          <Image
          source={require('../assets/shareicon.png')} 
           style={styles.shareIcons}
        />
         <Image
          source={require('../assets/downloadicon.png')} 
           style={styles.downloadIcon}
        />
         <Image
          source={require('../assets/cancelicon.png')} 
           style={styles.cancelIcon}
        />
        </View>

        <View style={styles.messageContainer}>
          <Text style={styles.messagetext}>Message</Text>
          <Text style={styles.message}>
            ETB 10.00 debited from <Text style={styles.bold}>BETEAB BAYNESAGN BERHE</Text> for{' '}
            <Text style={styles.bold}>KALEAB DEREJE ASCHALEW–ETB–0768</Text> on 27–Sep–2025
            with transaction ID: FT2527022BD4. Total
             Amount Debited: ETB 10
            with Commission: ETB 0 | VAT (15%): ETB 0.00
          </Text>
        </View>

        <Image
          source={require('../assets/qrcode.jpg')} 
          style={styles.qr}
        />

        <TouchableOpacity style={styles.button}>
          <View style={styles.reciept}>

          <View>
              <Image
          source={require('../assets/recipt.png')} 
          style={styles.buttonIcon}
          />
          </View>
          <Text style={styles.buttonText}>VIEW RECEIPT</Text>
          </View>
        </TouchableOpacity>
<View style={styles.footer}>
  <Image
    source={require('../assets/cbe_logo.jpg')}
    style={styles.logo}
  />

  <View style={styles.footerTextContainer}>
    <Text style={styles.footerText}>Commercial Bank of Ethiopia</Text>
    <Text style={styles.subText}>The Bank You can always Rely on!</Text>
  </View>
</View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingVertical: 40,
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  messagetext:{
opacity:0.5,
  },
  shildIcon:{
    width: 45,
    height: 40,
    marginRight: 10,
    marginLeft: 5,
    marginTop:20,
  },
  shareIcons: {
    width: 50,
    height: 30,
  marginTop:20,
   marginLeft: 2,
  },
  downloadIcon: {
    marginTop:20,
    width: 50,
    height: 30,
    marginLeft: 5,
  },
  cancelIcon: {
    marginTop:20,
    width: 50,
    height: 30,
    marginLeft: 5,
  },

  successText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
 messageContainer: {
  backgroundColor: '#fff',
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 10,
  marginBottom: 20,
  alignSelf: 'stretch', // makes it take full width of the card
},
message: {
  fontSize: 16,
  textAlign: 'left', // 👈 aligns all text to the left side
  color: '#333',
  lineHeight: 20, // adds nice spacing between lines
},

  bold: {
    fontWeight: 'normal',
  },
  qr: {
    width: 210,
    height: 210,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#b8972eff',
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 50,
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: '600',
  },
 footer: {
  flexDirection: 'row',      // 👈 makes it horizontal
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  gap: 10,   
  padding: 15,  
  backgroundColor:"#f8f8f8ff"              // adds space between logo and text
},
buttonIcon: {
flexDirection: 'row',      // 👈 makes it horizontal
  alignItems: 'center',
  justifyContent: 'center',
  padding: 15,  
}
,
reciept: {
  flexDirection: 'row',      // 👈 makes it horizontal
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,   
  paddingVertical: 3,
},
logo: {
  width: 50,
  height: 50,
  resizeMode: 'contain',
},
footerTextContainer: {
  flexDirection: 'column',
  padding:10,
},
HeaderTextContainer:{
  paddingRight:20,
    flexDirection: 'row',      // 👈 makes it horizontal
  alignItems: "flex-start",
  justifyContent: 'flex-start',
  paddingLeft:5,
  backgroundColor:"#97ce2aff",
   width: 350,
},
footerText: {
  fontWeight: 'bold',
  fontSize: 16,
},
subText: {
  color: '#666',
  fontSize: 12,
},

});
