import { useState } from "react";
import { PrivateRoute, PublicRoute } from "./route";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ROUTES from "./route/route";

function App() {
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(null);



  return loading === true ? (
    <div>loading</div>
  ) : (
      <Router>
        <Switch>
          {ROUTES.map((route, index) => {
            if (route.isPrivate) {
              return (
                <PrivateRoute
                  key={index}
                  authenticated={authenticated}
                  {...route}
                />
              );
            } else {
              return (
                <PublicRoute
                  key={index}
                  authenticated={authenticated}
                  {...route}
                />
              );
            }
          })}
        </Switch>
      </Router>
  );
}

export default App;
