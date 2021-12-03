import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { Avatar, Header, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from "../consts/color";
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';



const Left = ({navigation}) =>{
    return(
    <TouchableOpacity onPress={()=> navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="white" />
    </TouchableOpacity>)
}


const Profile = ({navigation}) => {
    const user = useSelector(state => state.auth.user)
    console.log(user)

    const [name, setName] = useState(user.name)
    const [email, setemail] = useState(user.email)
    const [phone, setphone] = useState(user.number)
    return (
        <View style={{flex:1}}>

               <Header backgroundColor={COLORS.primary} containerStyle={{height:80}}
                    leftComponent={ <Left navigation={navigation} />}
                    centerComponent={{ text: 'Profile', style: { color: '#fff', fontSize:18 } }}
            
                />

            <ScrollView style={{}}>
            {/* <View style={{ justifyContent:'flex-start', alignItems:'center' , marginTop: 20,}}>
                <Avatar
                    
                    rounded
                    size="xlarge"
                    title="H"
                    source={{
                        uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    }}
                />
                <TouchableOpacity style={{position:'absolute', bottom:5, right:100, backgroundColor: COLORS.primary, width:40, height:40, borderRadius: 30, alignItems:'center', justifyContent:'center'}}>
                     <AntDesign name="edit" size={30} color="white" />
                </TouchableOpacity>
               
            </View> */}

            <View style={{}}>

                <View style={styles.inputContainer} >
                    <Text style={{paddingLeft:5}}>
                        Name
                    </Text>
                    <TextInput value={name} placeholder=""  onChangeText={setName} style={styles.input} />
                </View>

                <View style={styles.inputContainer} >
                    <Text style={{paddingLeft:5}}>
                        Email
                    </Text>
                    <TextInput value={email} placeholder=""  onChangeText={setemail} style={styles.input} />
                </View>

                <View style={styles.inputContainer} >
                    <Text style={{paddingLeft:5}}>
                        Phone#
                    </Text>
                    <TextInput value={phone} placeholder=""  onChangeText={setphone} style={styles.input} />
                </View>
                
   

                <View style={{ justifyContent:'center', alignItems:'center', marginBottom: 20, flex:1
                }}>
                        <TouchableOpacity style={styles.btnPrimary} activeOpacity={0.8}>
                                <Text style={{color:'#fff', fontWeight: 'bold', fontSize: 18}}>Update</Text>
                        </TouchableOpacity>
                </View>


            </View>
                    
            </ScrollView>
            
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column', 
        marginVertical: 10,
        borderRadius:10,
        borderBottomColor:COLORS.primary,
        backgroundColor:COLORS.gray,
        marginHorizontal:20,
        paddingHorizontal:20,
        paddingVertical:30,
        
    },
    input: {
       flex:1,
       borderBottomWidth:2,
       borderRadius:10,
       paddingHorizontal:5,
       paddingVertical:5,
       
    },
    btnPrimary: {
        backgroundColor: COLORS.primary,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        width:'60%'
        
    },
})
