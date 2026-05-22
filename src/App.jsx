import { useEffect } from "react";
import { AppRoutes } from "./app/routes/AppRoutes";
import { useDispatch } from "react-redux";
import { logedInEmployee } from "./features/auth/state/authThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logedInEmployee());
  }, [dispatch]);
  return <AppRoutes />;
}

export default App;
