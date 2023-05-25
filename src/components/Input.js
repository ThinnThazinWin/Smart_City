import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../cont/COLORS";
const Input = ({
  label,
  iconName,
  password,
  error,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);

  return (
    <View style={{ marginBottom: 20 }}>
      <Text>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
          },
        ]}
      >
        <Icon
          name={iconName}
          style={{ fontSize: 22, color: COLORS.darkBlue, marginRight: 10 }}
        />
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onfocus();
            setIsFocused(true);
          }}
          style={{ color: COLORS.darkBlue, flex: 1 }}
          {...props}
          onBlur={() => {
            setIsFocused(false);
          }}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={{ fontSize: 22, color: COLORS.darkBlue }}
          />
        )}
      </View>
      {error && (
        <Text style={{ color: COLORS.red, fontSize: 12, marginTop: 7 }}>
          {error}
        </Text>
      )}
    </View>
  );
};



const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.grey,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
});

export default Input;