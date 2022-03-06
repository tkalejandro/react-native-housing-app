import React from "react"
import {StyleSheet, View, Text} from "react-native"
import Card from "../components/Card/Card"
import { FloatingAction } from "react-native-floating-action";
const HomeListScreen = () => {
    return (
        <View style={styles.container}>
            <Card />
            <FloatingAction
                position="right"
                //animated={false}
                shadowBackground={false}
                onPressMain={() => console.log("u press me")}
             />
        </View>
    )
}

const styles  = StyleSheet.create({
    container:{
        flex: 1,
    }
})

export default HomeListScreen