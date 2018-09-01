import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListCurrencies from "../pages/List";


const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Switch>
        <Route path="/" component={ListCurrencies} exact={true} />
        </Switch>
    </div>
    </BrowserRouter>  
);

export default AppRouter;