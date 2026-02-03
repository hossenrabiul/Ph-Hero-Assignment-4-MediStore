"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { authClient } from "@/lib/auth-client";
const formSchema = z.object({
  email: z.email(),
  password: z.string().min(8, "Password lenght must be minimum 8"),
});

const LoginForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      const data = {
        email: value.email,
        password: value.password,
      };
      
      const res = await authClient.signIn.email(data)
      console.log(res)
    },
    validators: {
      onSubmit: formSchema,
    },
  });

  const handleGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "http://localhost:3000",
    });
  };

  return (
    <div>
      <Card className="w-full sm:max-w-md">
        <CardHeader>
          <CardTitle>Login Form</CardTitle>
        </CardHeader>

        <CardContent>
          <form
            id="login-form"
            onSubmit={(e) => {
              console.log("first");
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <FieldGroup>
              <form.Field
                name="email"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        type="email"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              ></form.Field>
              <form.Field
                name="password"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        type="password"
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              ></form.Field>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <button
            form="login-form"
            className="w-full px-4 py-2 rounded text-[15px] bg-gray-900 hover:bg-gray-800 text-white"
            type="submit"
          >
            Login
          </button>
          <button
            onClick={handleGoogle}
            type="submit"
            className="w-full px-4 py-2 rounded text-[15px] bg-gray-800 hover:bg-gray-900 text-white"
          >
            Login with google
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
