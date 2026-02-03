import { Text, TextInput, View, Alert } from "react-native";
import Button from "../button";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "expo-router";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be atleast 8 characters!")
    .required("Password is required"),
  FirstName: Yup.string().required("First Name is required"),
  LastName: Yup.string().required("Last Name is required"),
});

export default function LoginComponent() {
  const router = useRouter();
  const handleSubmit = (values: Yup.InferType<typeof LoginSchema>) => {
    Alert.alert(
      "Form Submitted!",
      `Email: ${values.email}\n Password: ${values.password}\n First Name: ${values.FirstName}\n Last Name: ${values.LastName}`
    );
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", FirstName: "", LastName: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={{ padding: 30 }}>
          <TextInput
            placeholder="Email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              marginBottom: 5,
            }}
          />

          {touched.email && errors.email ? (
            <Text style={{ color: "red", marginBottom: 10 }}>
              {errors.email}
            </Text>
          ) : null}

          <TextInput
            placeholder="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            secureTextEntry
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              marginBottom: 5,
            }}
          />

          {touched.password && errors.password ? (
            <Text style={{ color: "red", marginBottom: 10 }}>
              {errors.password}
            </Text>
          ) : null}

          <TextInput
            placeholder="First Name"
            onChangeText={handleChange("FirstName")}
            onBlur={handleBlur("FirstName")}
            value={values.FirstName}
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              marginBottom: 5,
            }}
          />
          <TextInput
            placeholder="Last Name"
            onChangeText={handleChange("LastName")}
            onBlur={handleBlur("LastName")}
            value={values.LastName}
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              marginBottom: 5,
            }}
          />

          <View style={{ marginTop: 30 }} />
          <Button
            label="Login"
            theme="secondary"
            onPress={() => router.push("/(main)/Home")}
            width={300}
            height={60}
          />
        </View>
      )}
    </Formik>
  );
}
