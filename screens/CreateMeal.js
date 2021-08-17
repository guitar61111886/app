import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal, Alert, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CreateMeal = ({ navigation, route }) => {
    const getDetails = (type) => {
        if (route.params) {
            // console.log(route.params)
            switch (type) {
                case "meal":
                    return route.params.meal
                case "time":
                    return route.params.time
                case "slave":
                    return route.params.slave
            }
        } return ""
    }
    const [meal, setMeal] = useState(getDetails("meal"))
    const [time, setTime] = useState(getDetails("time"))
    const [slave, setSlave] = useState(getDetails("slave"))
    const [modal, setModal] = useState(false)

    const submitData = () => {
        fetch("http://172.20.10.5:3000/send-data", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                meal: meal,
                time: time,
                slave: slave
            })
        })
            .then((res) => res.json())
            .then(data => {
                // Alert.alert('Form Data', data);
                // console.log(data);
                Alert.alert(`${data.meal} is saved successfully`)
                navigation.navigate("Home")
            })
            .catch(err => {
                Alert.alert("Someting went wrong")
            })
    }

    const updateData = () =>{
        fetch("http://172.20.10.5:3000/update", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:route.params._id,
                meal: meal,
                time: time,
                slave: slave
            })
        })
            .then((res) => res.json())
            .then(data => {
                // Alert.alert('Form Data', data);
                // console.log(data);
                Alert.alert(`${data.meal} is updated successfully`)
                navigation.navigate("Home")
            })
            .catch(err => {
                Alert.alert("Someting went wrong")
            })
    }

    return (
        <View style={styles.root}>
            <KeyboardAvoidingView>
                <TextInput
                    label="Meal"
                    style={styles.inputStyle}
                    value={meal}
                    theme={theme}
                    mode="outlined"
                    onChangeText={text => setMeal(text)}
                />

                <TextInput
                    label="Time"
                    style={styles.inputStyle}
                    value={time}
                    theme={theme}
                    mode="outlined"
                    onChangeText={text => setTime(text)}
                />

                <TextInput
                    label="Slave"
                    style={styles.inputStyle}
                    value={slave}
                    theme={theme}
                    mode="outlined"
                    onChangeText={text => setSlave(text)}
                />

                {/* <View style={styles.uploadButton}>
                <Button icon="upload"
                    mode="contained"
                    theme={theme}
                    onPress={() => setModal(true)}>
                    Upload Image
                </Button>
            </View> */}

                {route.params ?
                    <View style={styles.saveButton}>
                        <Button icon="content-save"
                            mode="contained"
                            theme={theme}
                            // onPress={() => console.log("save")}>
                            onPress={() => updateData()}>
                            Update
                        </Button>
                    </View>
                    :
                    <View style={styles.saveButton}>
                        <Button icon="content-save"
                            mode="contained"
                            theme={theme}
                            // onPress={() => console.log("save")}>
                            onPress={() => submitData()}>
                            Save
                        </Button>
                    </View>
                }

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modal}
                    onRequestClose={() => {
                        setModal(false)
                    }}
                >
                    <View style={styles.modalView}>
                        <View style={styles.modalButtomView}>
                            <Button icon="camera"
                                theme={theme}
                                mode="contained"
                                onPress={() => console.log("presses")}>
                                camera
                            </Button>

                            <Button icon="image-area"
                                mode="contained"
                                theme={theme}
                                onPress={() => console.log("presses")}>
                                gallery
                            </Button>
                        </View>

                        <Button onPress={() => setModal(false)}>
                            cancel
                        </Button>
                    </View>
                </Modal>
            </KeyboardAvoidingView>
        </View>
    )
}

const theme = {
    colors: {
        primary: "#3A3F58"
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    inputStyle: {
        margin: 15
    },
    modalView: {
        position: "absolute",
        bottom: 2,
        width: "100%",
        backgroundColor: "#F9AC67"
    },
    modalButtomView: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    uploadButton: {
        marginLeft: 20,
        marginRight: 20
    },
    saveButton: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20
    }
})

export default CreateMeal;