// import necessary utility from rrd
import { Redirect, Route } from "react-router";

// create component here
const PrivateRoute = ({ component: Component, ...rest }) => {
  // Declare Variable for check status
  const isSignin = false;

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isSignin ? <Component {...props} /> : <Redirect to="/signin" />
        }
      />
    </>
  );
};

export default PrivateRoute;
