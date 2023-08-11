import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/pages/Home';
import AddScenario from './components/pages/AddScenario';
import AllScenarios from './components/pages/AllScenarios';
import AddVehicle from './components/pages/AddVehicle';
import './components/slider.css';

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Content style={{ padding: '16px' }}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/add-scenario" component={AddScenario} />
              <Route path="/all-scenarios" component={AllScenarios} />
              <Route path="/add-vehicle" component={AddVehicle} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
