import React from "react"
import {StyleSheet, View, Text, ScrollView, Image} from "react-native"


const HomeDetailsScreen = () => {
    return (
       <ScrollView>
           <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.title}>Dummy Title</Text>
                </View>
                <View>
                    <Image 
                    style={styles.image}
                    source={require("../assets/house1.jpeg")} />
                </View>
                <View style={styles.group}>
                    <Text style={styles.label}>Home Type:</Text>
                    <Text style={styles.value}> Flat</Text>
                </View>
                <View style={styles.group}>
                    <Text style={styles.label}>Price:</Text>
                    <Text style={styles.value}> $200</Text>
                </View>
                <View style={styles.group}>
                    <Text style={styles.label}>Year Built:</Text>
                    <Text style={styles.value}> 2022</Text>
                </View>
                <View style={styles.group}>
                    <Text style={styles.label}>Address:</Text>
                    <Text style={styles.value}> This the address</Text>
                </View>
                <View style={styles.group}>
                    <Text style={styles.label}>Description:</Text>
                    <Text style={styles.value}> This the description</Text>
                </View>
           </View>
       </ScrollView>
    )
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
    },
    heading: {
        marginHorizontal: 20,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
    },
    image: {
        width: "100%",
        height: 200,
    },
    group: {
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: "row",
    },
    label: {
        fontSize: 18,
    },
    value: {
        fontSize: 18,
        fontWeight: "bold",
        flexShrink: 1,
    }
})

export default HomeDetailsScreen