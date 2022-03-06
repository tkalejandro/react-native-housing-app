import React from "react"
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity} from "react-native"


const Card = (props) => {
    return(
        <TouchableOpacity
            onPress={() => props.navigation.navigate("HomeDetails")}
        >
            <View style={styles.card}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Title</Text>
            </View>
            <View style={styles.imageContainer}>
                <ImageBackground source={require("../../assets/house1.jpeg")} style={styles.image}>
                    <Text style={styles.price}>
                        $200.000
                    </Text>
                    <View style={styles.year}>
                        <Text style={styles.yearText}>2022</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>This is the description.</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0.2, height: 0.2},
        shadowRadius: 8,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        elevation: 5,
        height: 300,
        margin: 10,

    },
    titleContainer: {
        height: "15%",
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "gray",
    },
    imageContainer: {
        width: "100%",
        height: "65%",
    },
    image: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
        
    },
    price: {
        fontSize: 30,
        color: "#fff",
        margin: 10
    },
    year: {
        margin: 10,
        backgroundColor: "#2652b0",
        height: 25,
        width: 80,
        borderRadius: 5,
    },
    yearText: {
        fontSize: 20,
        color: "#fff",
        textAlign: "center"
    }
})

export default Card