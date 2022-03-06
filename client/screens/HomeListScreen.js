import React, { useEffect } from "react"
import {StyleSheet, View, Text} from "react-native"
import Card from "../components/Card/Card"
import { FloatingAction } from "react-native-floating-action";
import { useDispatch } from "react-redux";
import * as houseAction from "../redux/actions/houseAction"
const HomeListScreen = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(houseAction.fetchHouses())
    }, [dispatch])
    return (
        <View style={styles.container}>
            <Card navigation={props.navigation} />
            <FloatingAction
                position="right"
                animated={false}
                shadowBackground={false}
                onPressMain={() => props.navigation.navigate("AddHome")}
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