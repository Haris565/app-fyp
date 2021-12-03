import React, {useEffect, useState} from 'react';
import { FlatList, Text, ImageBackground, KeyboardAvoidingView, View, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import BG from '../assets/BG.png';
import InputBox from '../Components/InputBox';
import ChatMessage from './../Components/ChatMessage';
import COLORS from './../consts/color';
import { useSelector } from 'react-redux';
import { local_ip } from './../consts/ip';
import axios  from 'axios';



const ChatRoomScreen = () => {
      const [messages, setMessages] = useState([]);
      const user = useSelector(state => state.auth.user)
      const route = useRoute()
      console.log("user_id",user._id)
    



      useEffect(() => {
        (async () => {
        
          try {
            let res = await axios.get(`http://${local_ip}:5000/api/user/getMessage/${route.params.data._id}`)
            console.log("res", res.data)
            setMessages(res.data)
          }
          catch(err){
            console.log(err)
          }
        })
        ()
        
      }, [])


//   const route = useRoute();

//   const fetchMessages = async () => {
//     const messagesData = await API.graphql(
//       graphqlOperation(
//         messagesByChatRoom, {
//           chatRoomID: route.params.id,
//           sortDirection: "DESC",
//         }
//       )
//     )

//     console.log("FETCH MESSAGES")
//     setMessages(messagesData.data.messagesByChatRoom.items);
//   }

//   useEffect(() => {
//     fetchMessages();
//   }, [])

//   useEffect(() => {
//     const getMyId = async () => {
//       const userInfo = await Auth.currentAuthenticatedUser();
//       setMyId(userInfo.attributes.sub);
//     }
//     getMyId();
//   }, [])

//   useEffect(() => {
//     const subscription = API.graphql(
//       graphqlOperation(onCreateMessage)
//     ).subscribe({
//       next: (data) => {
//         const newMessage = data.value.data.onCreateMessage;

//         if (newMessage.chatRoomID !== route.params.id) {
//           console.log("Message is in another room!")
//           return;
//         }

//         fetchMessages();
//         // setMessages([newMessage, ...messages]);
//       }
//     });

//     return () => subscription.unsubscribe();
//   }, [])

//   console.log(`messages in state: ${messages.length}`)

  return (
    <View  style={{backgroundColor: COLORS.white,  height: '100%',
    }} >
      <FlatList
        data={messages}
        keyExtractor={(item,index)=>index}
        renderItem={({ item }) => <ChatMessage message={item} myId={user?._id} />}
        inverted
      />
        
        <InputBox conversationId={route.params.data._id} sender={user?._id} />
        

   
   
    </View>
  );
}

export default ChatRoomScreen;

