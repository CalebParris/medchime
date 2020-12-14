import React from "react";
import { TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import Btn from "../components/btn";

const medSchema = yup.object({
  name: yup.string().required(),
  instructions: yup.string().required(),
});

export default function MedForm({ addMed }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          name: "",
          instructions: "",
        }}
        validationSchema={medSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addMed(values);
        }}
      >
        {(props) => {
          return (
            <View>
              <Text style={globalStyles.formHeader}>
                Enter New Medicine Information Below:
              </Text>

              <TextInput
                style={globalStyles.input}
                placeholder="Name of Medicine"
                onChangeText={props.handleChange("name")}
                value={props.values.name}
              />
              <Text style={globalStyles.errMessage}>
                {props.touched.name && props.errors.name}
              </Text>

              <TextInput
                multiline
                style={globalStyles.instructions}
                placeholder="Medication Instructions"
                onChangeText={props.handleChange("instructions")}
                value={props.values.instructions}
              />
              <Text style={globalStyles.errMessage}>
                {props.touched.instructions && props.errors.instructions}
              </Text>

              <Btn text="Sumbit" onPress={props.handleSubmit} />
            </View>
          );
        }}
      </Formik>
    </View>
  );
}
