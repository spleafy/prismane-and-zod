import { z } from "zod";
import { useForm } from "@prismane/core/hooks";
import {
  Center,
  Card,
  Form,
  Button,
  TextField,
  PasswordField,
} from "@prismane/core";

import p from "./zodToPrismane";

function App() {
  // const { handleSubmit, handleReset, register } = useForm({
  //   fields: {
  //     username: {
  //       value: "",
  //       validators: {
  //         required: (v) => p(v, z.string()),
  //         min: (v) => p(v, z.string().min(5)),
  //       },
  //     },
  //     password: {
  //       value: "",
  //       validators: {
  //         required: (v) => p(v, z.string()),
  //         min: (v) => p(v, z.string().min(5)),
  //       },
  //     },
  //   },
  // });

  const { handleSubmit, handleReset, register } = useForm({
    fields: {
      username: {
        value: "",
        validators: {
          required: (v) =>
            p(
              v,
              z.string({
                required_error: "The username field is required!",
              })
            ),
          min: (v) =>
            p(
              v,
              z.string().min(5, {
                message: "Username must be longer than 5 characters!",
              })
            ),
        },
      },
      password: {
        value: "",
        validators: {
          required: (v) =>
            p(
              v,
              z.string({
                required_error: "The password field is required!",
              })
            ),
          min: (v) =>
            p(
              v,
              z.string().min(5, {
                message: "Password must be longer than 5 characters!",
              })
            ),
        },
      },
    },
  });

  return (
    <Center w="100vw" h="100vh">
      <Card w={300}>
        <Form
          onSubmit={(e: any) => {
            handleSubmit(e, (v: any) => console.log(v));
          }}
          autoComplete="off"
          onReset={() => handleReset()}
        >
          <TextField
            placeholder="Enter username: "
            label="Username:"
            {...register("username")}
          />
          <PasswordField
            placeholder="Enter password: "
            label="Password:"
            {...register("password")}
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </Center>
  );
}

export default App;
