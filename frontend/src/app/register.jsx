import {View , Text  , Button , Pressable, TextInput} from "react-native";
import { useState } from "react";
import {router} from "expo-router";
export default function RegisteUser(){
    const[name , setName] = useState("")
    const[password , setPassword] = useState("")
    const handleRegister = async()=>{
        //  const obj1 ={
        //     name : name ,
        //     password : password
        //  } 
         console.log( "Checking",obj1);
         
        const response = await fetch("http://localhost:3000/api/register" , 
            {
            method : "POST" ,
            headers : { "Content-Type" : "application/json"},
            body :JSON.stringify({ name : name , password : password})
         }
        )
        
        const data = await response.json();
        console.log(data);

        if(data.success){
            // redirect 

            router.replace("/")
            // return(
            //     <View>
            //         <Text>Login done</Text>
            //     </View>
            // )
        }
    }
    return (
        <View style ={{flex : 1 , justifyContent : "center" , alignItems : "center"}}>
            <TextInput placeholder="Enter name" value={name} onChangeText={setName} />
            <TextInput placeholder="Enter password" value={password} onChangeText={setPassword} />
            <Pressable onPress={handleRegister}>
                <Text>Register as User</Text>
            </Pressable>
        </View>
    )
}