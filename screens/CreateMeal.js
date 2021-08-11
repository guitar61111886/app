import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CreateMeal = () => {
    const [Meal, setMeal] = useState("")
    const [Time, setTime] = useState("")
    const [Slave, setSlave] = useState("")
    const [modal, setModal] = useState(false)

    

    return (
        <View style={styles.root}>
            <TextInput
                label="Meal"
                style={styles.inputStyle}
                value={Meal}
                theme={theme}
                mode="outlined"
                onChangeText={text => setMeal({ text })}
            />

            <TextInput
                label="Time"
                style={styles.inputStyle}
                value={Time}
                theme={theme}
                mode="outlined"
                onChangeText={text => setTime({ text })}
            />

            <TextInput
                label="Slave"
                style={styles.inputStyle}
                value={Slave}
                theme={theme}
                mode="outlined"
                onChangeText={text => setSlave({ text })}
            />

            <View style={styles.uploadButton}>
                <Button icon="upload"
                    mode="contained"
                    theme={theme}
                    onPress={() => setModal(true)}>
                    Upload Image
                </Button>
            </View>
            <View style={styles.saveButton}>
                <Button icon="content-save"
                    mode="contained"
                    theme={theme}
                    onPress={() => console.log("saved")}>
                    Save
                </Button>
            </View>

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