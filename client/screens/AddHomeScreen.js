import React from "react"
import {StyleSheet, View, Text, ScrollView, TextInput, Button} from "react-native"


const AddHomeScreen = () => {
    //? ScrollView To make sure small phones has no problems.
    return (
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Image URL</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Home Type</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Price</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Year Built</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput 
                    multiline
                    style={styles.input} />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput 
                    multiline
                    style={styles.input} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="Add Home"
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles  = StyleSheet.create({
    form: {
        margin: 20,
        backgroundColor: "#ffffff",
        padding: 20,
        borderRadius: 10,
    },
    formGroup: {
        width: "100%",
    },
    label: {
        marginVertical: 10,
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 8,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    buttonContainer: {
        marginTop: 20,
    }
})

export default AddHomeScreen