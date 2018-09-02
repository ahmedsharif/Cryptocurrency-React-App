import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListCurrencies from "../pages/List";
import DetailTicker from "../pages/DetailTicker";
import Temp from "../pages/temp";


const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Switch>
        <Route path="/" component={ListCurrencies} exact={true} />
        <Route path="/detail" component={DetailTicker} />
        <Route path="/temp" component={Temp} />
        </Switch>
    </div>
    </BrowserRouter>  
);

export default AppRouter;