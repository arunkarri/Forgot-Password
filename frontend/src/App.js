import { Route, BrowserRouter, Switch } from 'react-router-dom';
import routes from './routes';
import ForgotPassword from './forgot-password';

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ForgotPassword}></Route>
        {routes.map((ele, index) => (
          <Route key={index} path={`/${ele.route}`} component={ele.component}></Route>
        ))}
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
