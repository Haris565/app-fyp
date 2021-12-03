import React, {useEffect} from 'react'
import { StyleSheet, Text, View,Dimensions, ActivityIndicator,ScrollView } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'
import { Entypo } from '@expo/vector-icons';
import COLORS from '../consts/color';
import {userAppointments} from "../redux/actions/salon"

const BookingList = () => {
    const appointments = useSelector(state => state.salon.accepted)
    const loading = useSelector(state => state.salon.loading)
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    console.log("fetched", appointments)
    const dispatch = useDispatch()
   
    useEffect(() => {
      dispatch(userAppointments())
    }, [])



    // if (appointments == null){
    //     return (
    //       <View style={{flex:1, justifyContent:"center", alignItems:"center", top:windowHeight/3 }}>
    //           <Entypo name="emoji-sad" size={40} color="black" />
    //           <Text>You didnt have any upcoming appointments</Text>
             
    //       </View>
    //     )
    // }
    // if(appointments.length == 0){
    //   return (
    //     <View style={{flex:1, justifyContent:"center", alignItems:"center", top:windowHeight/3 }}>
    //       <Entypo name="emoji-sad" size={70} color={COLORS.primary} />
    //         <Text style={{fontSize:16, fontWeight:'bold', color:COLORS.primary}}>You didnt have any upcoming appointments</Text>
    //     </View>
    //   )
    // }
    return (

      <>
      {loading ? 
      
      <View style={{flex:1, justifyContent:"center", alignItems:"center", top:windowHeight/3 }}>
        <ActivityIndicator size="large" color={COLORS.primary} /> 
      </View>
     
      
      :
      <ScrollView style={{marginBottom:200}}>
        
        {appointments && appointments.length !== 0 ? appointments.map((item, index)=>{
          return (
            <View key={index} style={{backgroundColor:COLORS.gray, marginVertical:10 , paddingVertical:10, marginHorizontal:15, borderRadius:8,}}>
              <View style={{paddingVertical:5, paddingHorizontal:10, justifyContent:"flex-end", flexDirection:"row"}}>
                <Text style={{}}>
                  Status: {item.status}
                </Text>
              </View>
              
          
            <View  style={{
                backgroundColor:COLORS.gray, marginVertical:10 , paddingVertical:10,
                marginHorizontal:15, borderRadius:8, paddingHorizontal:10, flexDirection:'row',
                justifyContent:"space-around",
                alignItems:"center"
              }}
            > 
            
                <View style={{}}>
                  <Text style={{}}>
                      8th October at 4:32
                  </Text>
                  <Text style={{}}>
                    Services: {item.services.map((i,ind)=> `${i.title}, `)}
                  </Text>
                  <Text style={{}}>
                    {item.profile_id.name}
                  </Text>
                  <Text style={{}}>
                    {item.profile_id.address.address}
                  </Text>
                </View>
                <View style={{}}>
                  <Text style={{}}>
                    120$
                  </Text>
                </View>
              
            </View>
            </View>
          )
        }): 
        <View style={{ justifyContent:"center", alignItems:"center", top:windowHeight/3 }}>
            <Entypo name="emoji-sad" size={70} color={COLORS.primary} />
            <Text style={{fontSize:16, fontWeight:'bold', color:COLORS.primary}}>You didnt have any upcoming appointments</Text>
        </View>
        }
        
      </ScrollView>
      }
      </>
        
    )
}

export default BookingList

const styles = StyleSheet.create({})
