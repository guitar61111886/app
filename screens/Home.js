import { text } from 'express';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, FlatList, Alert } from 'react-native';
import { Card, FAB } from 'react-native-paper';

const Home = ({ navigation }) => {

    // const data = [
    //     { _id: "1", meal: "เช้าก่อนอาหาร", slave: "S1", time: "07:30", picture: "https://images.unsplash.com/photo-1601914757958-84916c07e4c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvY2t8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    //     { _id: "2", meal: "เช้าหลังอาหาร", slave: "S2", time: "08:30", picture: "https://images.unsplash.com/photo-1598046937895-2be846402c0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" },
    //     { _id: "3", meal: "เที่ยงก่อนอาหาร", slave: "S3", time: "11:30", picture: "https://images.unsplash.com/photo-1612540943832-09d119939e87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" },

    //     // { id: 2, meal: "เช้าหลังอาหาร", slave: "S2", time: "08:30" },
    //     // { id: 3, meal: "เที่ยงก่อนอาหาร", slave: "S3", time: "11:30" },
    //     // { id: 4, meal: "เช้าหลังอาหาร", slave: "S4", time: "12:30" },
    //     // { id: 5, meal: "เช้าก่อนอาหาร", slave: "S1", time: "07:30" },
    //     // { id: 6, meal: "เช้าหลังอาหาร", slave: "S2", time: "08:30" },
    //     // { id: 7, meal: "เที่ยงก่อนอาหาร", slave: "S3", time: "11:30" },
    //     // { id: 8, meal: "เช้าหลังอาหาร", slave: "S4", time: "12:30" },
    // ]

    const [data, setData] = useState([])
    const [loading, setloading] = useState(true)

    const fetchData = () => {
        fetch("http://172.20.10.5:3000/")
            .then(res => res.json())
            .then(results => {
                // console.log(results)
                setData(results)
                setloading(false)
            }).catch(err => {
                Alert.alert("Someting went wrong")
            })
    }

    useEffect(() => {
        fetchData()
        // fetch("http://172.20.10.5:3000/")
        //     .then(res => res.json())
        //     .then(results => {
        //         console.log(results)
        //         setData(results)
        //         setloading(false)
        //     })
    }, [])

    const renderList = ((item) => {
        return (
            <Card style={styles.mycard}
                // key={item.id}
                onPress={() => navigation.navigate("Information", { item })}
            >
                <View style={styles.cardView}>
                    <Image
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                        source={{ uri: "https://i.pinimg.com/736x/82/a6/ba/82a6bac99d3a9c2942724f5fc8dfca86.jpg" }}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.text}>{item.meal}</Text>
                        <Text style={styles.text}>{item.slave}</Text>
                        <Text style={styles.text}>{item.time}</Text>
                    </View>
                </View>
            </Card>
        )
    })

    return (
        <View style={{ flex: 1 }}>
            {/* {renderList} */}
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return renderList(item)
                }}
                keyExtractor={item => item._id}
                onRefresh={()=>fetchData()}
                refreshing={loading}
            />

            <FAB onPress={() => navigation.navigate("Create")}
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{ colors: { accent: "#EE6A59" } }}
            // onPress={() => console.log('Pressed')}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    mycard: {
        margin: 5,
    },
    cardView: {
        flexDirection: 'row',
        padding: 6,
    },
    text: {
        fontSize: 20,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },

})
export default Home;