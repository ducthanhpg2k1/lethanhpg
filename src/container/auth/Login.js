import { useEffect, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import styles from './index.module.css';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Card,
  CardHeader,
  TitleCard,
  DescribeCard,
  Link,
  Stack,
  IconEye,
  Column,
  Row,
  CardContent,
  Label,
  Input,
  Checkbox,
  LabelRemember,
  Button,
  Loading,
  Container,
  Relative,
  ItemsStart,
  ItemsCenter,
  IconCaution,
  LabelError,
  FormErrorText,
} from './style';
import { mockData } from '../mock/mockData';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
  });

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const {
    control,
    formState: { errors, isSubmitting, isValid },
  } = methods;

  const onSubmit = (data) => {
    const dataMock = [...mockData];
    const emailCheck = dataMock.find(
      (item) => item.email === data.email
    )?.email;
    const passwordCheck = dataMock.find(
      (item) => item.password_hash === data.password
    )?.password_hash;
    if (data.email === emailCheck && data.password === passwordCheck) {
      navigate('/home');
    } else {
      setError(true);
    }
  };

  return (
    <FormProvider methods={methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Container>
          <Card>
            <CardHeader>
              <TitleCard>Login</TitleCard>
              <Row>
                <DescribeCard>Do not have an account?</DescribeCard>
                <Link href="#">Sign up here</Link>
              </Row>
            </CardHeader>
            <CardContent>
              <Column>
                <Label>Email</Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState: { error } }) => {
                    console.log(error, 'error');
                    return (
                      <Column>
                        <Input
                          {...field}
                          id="email"
                          placeholder="name@company.com"
                        />

                        {!!error && (
                          <FormErrorText>
                            <IconCaution
                              className="text-"
                              fill="rgb(248, 113, 113)"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm42-104c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42zm-81.37-211.401l6.8 136c.319 6.387 5.591 11.401 11.985 11.401h41.17c6.394 0 11.666-5.014 11.985-11.401l6.8-136c.343-6.854-5.122-12.599-11.985-12.599h-54.77c-6.863 0-12.328 5.745-11.985 12.599z" />
                            </IconCaution>
                            <LabelError>{errors.email.message}</LabelError>
                          </FormErrorText>
                        )}
                      </Column>
                    );
                  }}
                />
              </Column>
              <Column>
                <Label>Password</Label>
                <Controller
                  name="password"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Column>
                      <Relative>
                        <Input
                          className="pr-14"
                          {...field}
                          type={showPassword ? 'text' : 'password'}
                          id="password"
                          placeholder="Enter your password"
                        />

                        <IconEye
                          onClick={() => setshowPassword(!showPassword)}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                          fill={showPassword ? 'rgb(34, 197, 94)' : 'black'}
                        >
                          <path d="M12.8488 7.74419C12.8488 7.66861 12.3953 6.53488 11.1102 5.55233C11.1858 5.47674 11.2614 5.40116 11.337 5.32558L12.0929 3.81395C12.2441 3.43604 12.0929 2.98256 11.7905 2.8314C11.4126 2.68024 10.9591 2.8314 10.8079 3.13372L10.052 4.64535C10.052 4.72093 9.97638 4.79652 9.97638 4.8721C9.37166 4.56977 8.61575 4.34302 7.70867 4.26744V2.75581C7.70867 2.30233 7.40631 2 6.95276 2C6.49922 2 6.19686 2.30233 6.19686 2.75581V4.26744C5.28977 4.34302 4.53387 4.56977 3.92914 4.8721C3.92914 4.79652 3.92914 4.72093 3.85355 4.64535L3.09764 3.13372C2.94646 2.75581 2.49293 2.60466 2.11498 2.8314C1.73703 2.98256 1.58583 3.43604 1.8126 3.81395L2.5685 5.32558C2.64409 5.40116 2.7197 5.47674 2.79529 5.55233C1.51025 6.53488 1.05669 7.66861 1.05669 7.74419C0.981102 7.89536 0.981102 8.1221 1.05669 8.27326C1.13228 8.42442 2.41734 11.75 7.02836 11.75C11.6394 11.75 13 8.34884 13 8.27326C12.9244 8.1221 12.9244 7.97094 12.8488 7.74419ZM6.87717 10.314C4.00473 10.314 2.79529 8.72675 2.41734 8.04651C2.79529 7.36628 4.00473 5.77907 6.87717 5.77907C9.74961 5.77907 10.959 7.36628 11.337 8.04651C10.959 8.72675 9.74961 10.314 6.87717 10.314Z" />
                          <path d="M7 9.5C7.82843 9.5 8.5 8.82843 8.5 8C8.5 7.17157 7.82843 6.5 7 6.5C6.17157 6.5 5.5 7.17157 5.5 8C5.5 8.82843 6.17157 9.5 7 9.5Z" />
                        </IconEye>
                      </Relative>
                      {!!error && (
                        <FormErrorText>
                          <IconCaution
                            className="text-"
                            fill="rgb(248, 113, 113)"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm42-104c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42zm-81.37-211.401l6.8 136c.319 6.387 5.591 11.401 11.985 11.401h41.17c6.394 0 11.666-5.014 11.985-11.401l6.8-136c.343-6.854-5.122-12.599-11.985-12.599h-54.77c-6.863 0-12.328 5.745-11.985 12.599z" />
                          </IconCaution>
                          <LabelError>{errors.password.message}</LabelError>
                        </FormErrorText>
                      )}
                    </Column>
                  )}
                />
              </Column>
              <Stack>
                <ItemsStart>
                  <ItemsCenter>
                    <Checkbox id="green-checkbox" type="checkbox" value="" />
                  </ItemsCenter>
                  <LabelRemember for="remember">
                    Remember my account
                  </LabelRemember>
                </ItemsStart>
                <Link href="#">Forgot password?</Link>
              </Stack>
              {error && (
                <ItemsCenter>
                  <IconCaution
                    fill="rgb(248, 113, 113)"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm42-104c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42zm-81.37-211.401l6.8 136c.319 6.387 5.591 11.401 11.985 11.401h41.17c6.394 0 11.666-5.014 11.985-11.401l6.8-136c.343-6.854-5.122-12.599-11.985-12.599h-54.77c-6.863 0-12.328 5.745-11.985 12.599z" />
                  </IconCaution>
                  <LabelError>Account information incorreect</LabelError>
                </ItemsCenter>
              )}

              {/* <Loading>PROCESSING...</Loading> */}
              <Button type="submit">LOGIN</Button>
            </CardContent>
          </Card>
        </Container>
      </form>
    </FormProvider>
  );
};
export default Login;
