import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Attendee from "./components/Attendee";

const data = [
  {
    name: "Connie Xu",
    college: "Engineering",
    year: 2020,
    hometown: "Dallas",
    favPL: "Python",
  },
  {
    name: "Kate Liang",
    college: "Engineering",
    year: 2020,
    hometown: "Houston",
    favPL: "Portland",
  },
  {
    name: "Joshua Yackin",
    college: "Mathematics",
    year: 2020,
    hometown: "Austin",
    favPL: "JavaScript",
  },
  {
    name: "Rocky Ali",
    college: "Physics",
    year: 2020,
    hometown: "Austin",
    favPL: "C#",
  },
];

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [favPL, setFavPL] = useState("");

  const handleDonePressed = () => {
    data.push({
      name: name,
      college: college,
      year: 2020,
      hometown: "Denton",
      favPL: favPL,
    });
    setName("");
    setCollege("");
    setFavPL("");
    setModalVisible(false);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerText}>My Classmates</Text>
        <ScrollView style={{ width: "100%" }}>
          {data.map((obj, index) => {
            return (
              <Attendee
                key={index}
                name={obj.name}
                college={obj.college}
                year={obj.year}
                hometown={obj.hometown}
                favPL={obj.favPL}
              />
            );
          })}
        </ScrollView>
      </View>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.plusSign}>+</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              value={name}
              style={styles.textInput}
              placeholder="Name"
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              value={college}
              style={styles.textInput}
              placeholder="College"
              onChangeText={(text) => setCollege(text)}
            />
            <TextInput
              value={favPL}
              style={styles.textInput}
              placeholder="Favorite PL"
              onChangeText={(text) => setFavPL(text)}
            />
            <TouchableOpacity onPress={handleDonePressed}>
              <Text>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    color: "#6666cc",
    textDecorationLine: "underline",
    textAlign: "center",
  },
  buttonStyle: {
    width: 50,
    height: 50,
    backgroundColor: "purple",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 25,
    right: 25,
  },
  plusSign: {
    fontSize: 40,
    color: "white",
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    height: "100%",
  },
  modalView: {
    width: "80%",
    height: "25%",
    backgroundColor: "#fff",
    borderWidth: 2,
    padding: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  textInput: {
    borderWidth: 1,
    padding: 5,
    width: "60%",
    marginTop: 10,
    borderRadius: 5,
    height: 35,
  },
});