import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Card, Title, Button } from 'react-native-paper'

const Information = (props) => { 

    const {id,meal,slave,time,picture} = props.route.params.item
    return (
        <View style={styles.root}>
            <LinearGradient
                colors={["#FCAF38", "#EE6A59"]}
                style={{ height: "20%" }}
            />
            {/* <Text>Alarm Data</Text> */}

            <View style={{ alignItems: "center" }}>
                <Image
                    style={{ width: 140, height: 140, borderRadius: 140 / 2, marginTop: -50 }}
                    source={{ uri: picture }}
                />
            </View>

            <View style={{ alignItems: 'center',margin:15 }}>
                <Title>{meal}</Title>
                <Text style={styles.mytext}>{slave}</Text>
            </View>

            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <Text style={styles.mytext}>{meal}</Text>
                </View>
            </Card>

            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <Text style={styles.mytext}>{slave}</Text>
                </View>
            </Card>

            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <Text style={styles.mytext}>{time}</Text>
                </View>
            </Card>

            <View style={{ flexDirection: "row", justifyContent: "space-around", padding:10 }}>
                <Button
                    icon="playlist-edit"
                    mode="contained"
                    theme={theme}
                    onPress={() => console.log('Pressed')}>
                    Edit
                </Button>

                <Button
                    icon="delete"
                    mode="contained"
                    theme={theme}
                    onPress={() => console.log('Pressed')}>
                    Delete
                </Button>
            </View>
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
    myCard: {
        margin: 3
    },
    cardContent: {
        flexDirection: 'row',
        padding: 8
    },
    mytext: {
        fontSize: 18
    }
})

export default Information;