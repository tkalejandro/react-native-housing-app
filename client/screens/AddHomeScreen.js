import React from "react"
import { StyleSheet, View, Text, ScrollView, TextInput, Button } from "react-native"
import { Formik } from "formik"
import * as yup from "yup"

const formSchema = yup.object({
    title: yup.string().required().min(3).max(50),
    price: yup.number().required(),
    yearBuilt: yup.number().required(),
    image: yup.string().required(),
    address: yup.string().required(),
    description: yup.string().required().min(10).max(10),
    homeType: yup.string().required(),
})


const AddHomeScreen = () => {
    //? ScrollView To make sure small phones has no problems.
    return (


        <ScrollView>

            <Formik
                initialValues={{
                    title: "",
                    image: "",
                    homeType: "",
                    price: "",
                    yearBuilt: "",
                    address: "",
                    description: ""
                }}
                validationSchema={formSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {(props) => (
                    <View style={styles.form}>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Title</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={props.handleChange('title')}
                                onBlur={props.handleBlur('title')}
                                value={props.values.title}
                            />
                            <Text style={styles.error}>{props.touched.title && props.errors.title}</Text>
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Image URL</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={props.handleChange('image')}
                                onBlur={props.handleBlur('image')}
                                value={props.values.image}
                            />
                            <Text style={styles.error}>{props.touched.image && props.errors.image}</Text>
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Home Type</Text>
                            <TextInput style={styles.input}
                                onChangeText={props.handleChange('homeType')}
                                onBlur={props.handleBlur('homeType')}
                                value={props.values.homeType}
                            />
                            <Text style={styles.error}>{props.touched.homeType && props.errors.homeType}</Text>
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Price</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                onChangeText={props.handleChange('price')}
                                onBlur={props.handleBlur('price')}

                                value={props.values.price}
                            />
                            <Text style={styles.error}>{props.touched.price && props.errors.price}</Text>
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Year Built</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                onChangeText={props.handleChange('yearBuilt')}
                                onBlur={props.handleBlur('yearBuilt')}
                                value={props.values.yearBuilt}
                            />
                            <Text style={styles.error}>{props.touched.yearBuilt && props.errors.yearBuilt}</Text>
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Address</Text>
                            <TextInput
                                multiline
                                style={styles.input}
                                onChangeText={props.handleChange('address')}
                                onBlur={props.handleBlur('address')}
                                value={props.values.address}
                            />
                            <Text style={styles.error}>{props.touched.address && props.errors.address}</Text>
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Description</Text>
                            <TextInput
                                multiline
                                style={styles.input}
                                onChangeText={props.handleChange('description')}
                                onBlur={props.handleBlur('description')}
                                value={props.values.description}
                            />
                            <Text style={styles.error}>{props.touched.description && props.errors.description}</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                title="Add Home"
                                onPress={props.handleSubmit}
                            />
                        </View>
                    </View>
                )}
            </Formik>



        </ScrollView>
      
       
    )
}

const styles = StyleSheet.create({
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
    },
    error: {
        color: "red",
    }
})

export default AddHomeScreen