import React, { useState } from 'react';
import { Select,Table,Button} from 'antd';
const Home = () => {
  const [scenarios,setScenarios]=useState('');
  const columns=[
    {
      title:'Vehicle Id',
      dataIndex:'vehicleId',
    },
    {
      title:'Vehicle Name',
      dataIndex:'vehicleName',
    },
    {
      title:'Position X',
      dataIndex:'positionX',
    },
    {
      title:'Position Y',
      dataIndex:'positionY',
    },
    {
      title:'Speed',
      dataIndex:'speed',
    },
    {
      title:'Direction',
      dataIndex:'direction',
    },
    {
      title:'Edit',
      dataIndex:'edit',
    },
    {
      title:'Delete',
      dataIndex:'delete',
    },
    
  ]
  
  return(
    <div>
          <p style={{color:'white',marginLeft:15,marginTop:-10}}>Scenario</p>
            <Select
                  placeholder="Select Scenario"
                  style={{ width:200,backgroundColor:"#1d1c1c",color:"white",marginLeft:10,marginTop:-10}} 
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: 'Test Scenario',
                      label: 'Test Scenario',
                    },
                    {
                      value: 'My Scenario',
                      label: 'My Scenario',
                    },
                   
                  ]}
                 /><br/><br/><br/><br/><br/>
        
       <Table columns={columns} dataSource={scenarios} rowKey="id"  size='small'/><br/>
       <div className='btn' style={{float:'right'}}>
              <Button style={{backgroundColor:"green",color:'white',borderRadius:2,border:'none'}}>Start Simulation</Button>&nbsp;&nbsp;&nbsp;&nbsp;
              <Button style={{backgroundColor:'blue',color:'white',borderRadius:2,border:'none'}}>Stop Simulation</Button>
       </div>
    </div>
  )
};

export default Home;
