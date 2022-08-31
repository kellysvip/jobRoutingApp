import { useForm } from "react-hook-form";
import {
  Stack,
  Alert,
  InputAdornment,
  Typography,
  IconButton,
} from "@mui/material";
// import { VisibilityOffIcon, VisibilityIcon } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState, useContext } from "react";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { FCheckBox, FTextField, FormProvider } from "../form";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  // const defaultValues = {
  //   email: "saobien",
  //   password: "123",
  //   remember: "false",
  // };

  const methods = useForm({});
  const {
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const login = async () => {
    return new Promise((resolve) => {
      resolve("1");
    });
  };

  const onSubmit = async (data) => {
    try {
      await login();
      auth.setIsLogged(true);
      navigate("/");
      console.log(auth.isLogged);
    } catch (error) {
      console.log(error);
      setError("afterSubmit", {
        message: "Invalid email or password",
      });
    }
  };

  return (
    <div className="form">
      <Typography variant="h3" textAlign="center" mb={3}>
        Login
      </Typography>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack sx={{ width: 400 }} spacing={3}>
          {!!errors.afterSubmit && <Alert>{errors.afterSubmit.message}</Alert>}

          <FTextField name="email" label="Email Address" />
          <FTextField
            name="password"
            label="Password..."
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          sx={{ my: 2 }}
        >
          <FCheckBox name="remember" label="Remember me" />
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </FormProvider>
    </div>
  );
};

export default LoginPage;
