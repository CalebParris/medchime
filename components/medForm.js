import React from "react";
import { TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import Btn from "../components/btn";

const medSchema = yup.object({
  name: yup.string().required(),
  dosage: yup.string().required(),
});

export default function MedForm({ addMed }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          name: "",
          dosage: "",
          note: "",
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
                style={globalStyles.input}
                placeholder="Medication Dosage"
                onChangeText={props.handleChange("dosage")}
                value={props.values.dosage}
              />
              <Text style={globalStyles.errMessage}>
                {props.touched.dosage && props.errors.dosage}
              </Text>

              <TextInput
                multiline
                style={globalStyles.input}
                placeholder="Extra Notes"
                onChangeText={props.handleChange("note")}
                value={props.values.note}
              />

              <Btn text="Sumbit" onPress={props.handleSubmit} />
            </View>
          );
        }}
      </Formik>
    </View>
  );
}
