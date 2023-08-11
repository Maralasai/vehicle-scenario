import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={200} className="site-layout-background" style={{backgroundColor:"lightgrey"}}>
      <Menu style={{ height: '10%', borderRight: 0,backgroundColor:"lightgrey",fontWeight:550,marginTop:25}}>
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
          <Menu.Item key="addScenario">
            <Link to="/add-scenario">Add Scenario</Link>
          </Menu.Item>
          <Menu.Item key="allScenarios">
            <Link to="/all-scenarios">All Scenarios</Link>
          </Menu.Item>
        <Menu.Item key="addVehicle">
          <Link to="/add-vehicle">Add Vehicle</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
