import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {

  // useEffect(_ => {
  //   if(!isLoading){
  //     console.log('Dispatched')
  //     dispatch(verifyToken())
  //   }
  //   console.log('Verify Token from priv route')
  // }, [isLoading])

  console.log(localStorage.getItem('token'))
  const token = localStorage.getItem('token')

  return (
    <Route
      {...rest}
      render={props =>
        token ? 
            <Component {...props} />
            :
            <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;