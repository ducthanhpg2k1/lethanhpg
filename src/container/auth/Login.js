import { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import styles from "./index.module.css";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Card,
  CardHeader,
  TitleCard,
  DescribeCard,
  Link,
  CardContent,
  Label,
  Input,
  Checkbox,
  LabelRemember,
  Button,
} from "./style";

const Login = () => {
  const [showPassWord, setShowPassWord] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = (data) => {
    console.log(data, "data");
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <Card>
          <CardHeader>
            <TitleCard>Login</TitleCard>
            <div className="flex">
              <DescribeCard>Do not have an account?</DescribeCard>
              <Link href="#">Sign up here</Link>
            </div>
          </CardHeader>
          <CardContent>
            <div>
              <Label>Email</Label>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    type="email"
                    id="email"
                    placeholder="name@company.com"
                  />
                )}
              />
            </div>
            <div>
              <Label>Password</Label>
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    type={"password"}
                    id="password"
                    placeholder="Enter your password"
                  />
                )}
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <Checkbox id="remember" type="checkbox" value="" required />
                </div>
                <LabelRemember for="remember">
                  Remember my account
                </LabelRemember>
              </div>
              <Link href="#">Forgot password?</Link>
            </div>
            <Button type="submit">Login</Button>
          </CardContent>
        </Card>
      </div>
    </FormProvider>
  );
};
export default Login;
