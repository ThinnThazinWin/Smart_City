import {
  Alert,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../cont/COLORS";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../components/Button";
import Input from "../components/Input";

export default function RegisterOld({ navigation }) {
  const [inputs, setInputs] = useState({
    email: "",
    fullName: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
      handleError("please input email", "email");
      valid = false;
    }
    if (!inputs.name) {
      handleError("please input name", "name");
      valid = false;
    }
    if (!inputs.phone) {
      handleError("please input phone", "phone");
      valid = false;
    } else if (inputs.phone.length < 6) {
      handleError("please input phone must greater than 5", "phone");
      valid = false;
    }
    if (!inputs.password) {
      handleError("please input password", "password");
      valid = false;
    }
    if (valid) {
      register();
    }
  };

  const register = () => {
    //setLoading(true);
   // setTimeout(() => {
     // setLoading(false);

      try {
        AsyncStorage.setItem("user", JSON.stringify(inputs));
        navigation.navigate("Login");
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
      }
   // }, 3000);
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  return (
    <View style={{ flex: 1, marginHorizontal: 20, marginTop: 40 }}>
   {/*  <Loader visible={loading} /> */}
      <Text>Register</Text>
      <Text>Enter details to register</Text>
      <View style={{ marginVertical: 20 }}>
        <Input
          placeholder="Enter email"
          iconName="email-outline"
          label="Email"
          error={errors.email}
          onChangeText={(text) => handleOnChange(text, "email")}
          onFocus={() => {
            handleError(null, "email");
          }}
        />
        <Input
          placeholder="Enter name"
          iconName="account-outline"
          label="Name"
          error={errors.name}
          onChangeText={(text) => handleOnChange(text, "name")}
          onFocus={() => {
            handleError(null, "name");
          }}
        />
        <Input
          placeholder="Enter phone"
          keyboardType="numeric"
          iconName="phone-outline"
          label="Phone"
          error={errors.phone}
          onChangeText={(text) => handleOnChange(text, "phone")}
          onFocus={() => {
            handleError(null, "phone");
          }}
        />
        <Input
          placeholder="Enter password"
          iconName="lock-outline"
          label="Password"
          error={errors.password}
          onChangeText={(text) => handleOnChange(text, "password")}
          onFocus={() => {
            handleError(null, "password");
          }}
        />
        <Button title="Register" onPress={validate} />
        <Text
          onPress={() => navigation.navigate("Login")}
          style={{
            color: COLORS.black,
            textAlign: "center",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Already have an account ? Login
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});