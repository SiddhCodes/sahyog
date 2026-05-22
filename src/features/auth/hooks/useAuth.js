import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginEmployee } from "../state/authThunk";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegisterSubmit = (data) => {
    console.log(data);
    reset();
  };

  const onLogInSubmit = (data) => {
    dispatch(loginEmployee(data));
    reset();
  };
  return {
    register,
    handleSubmit,
    errors,
    onRegisterSubmit,
    onLogInSubmit,
    navigate,
  };
};
