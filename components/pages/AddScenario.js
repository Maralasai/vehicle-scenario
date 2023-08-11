import React, { useState } from 'react';
import {Form,Input,Button} from 'antd';

const AddScenario = () => {
  const [scenarios,setScenarios]=useState('');
  const [newScenario,setNewScenario]=useState('')
  const [formValue, setformValue] = React.useState({
   scenarioName: '',
    scenarioTime: ''
  });
  const handleClick = () => {
    setformValue({
      scenarioName: '',
      scenarioTime: ''
    })
  };
  const handleAdd= () => {
    if (newScenario.trim() === '') return;
    setScenarios([...scenarios, { name:newScenario,time:newScenario }]);
    setNewScenario('');
  };
  return( 
  <div>
    <div style={{marginLeft:20,fontSize:14,color:"white"}}>Scenario/add</div><br/><br/>
    <div  style={{marginLeft:20,fontSize:20,fontWeight:500,color:"white"}}>Add Scenario</div><br/>
    <Form
        name="basic"
        className="loginForm"
        autoComplete="off"
    >
        <Form.Item className="contact">
                <Input.Group compact>
                  <Form.Item
                    label={
                        <span className="label-scenario" style={{marginTop:10,marginLeft:45 }}>
                          Scenario Name
                        </span>
                      }
                      name="scenarioName"
                  >
                     <Input 
                     type='text'
                     value={formValue.scenarioName}
                     id='textScenario'
                      placeholder="Test Scenario"
                      style={{ width:200,backgroundColor:"#1d1c1c",color:"white",marginLeft:-105,marginTop:32}} 
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item
                        label={
                            <span className="label-scenario" style={{marginTop:10,marginLeft:150 }}>
                              Scenario Time (seconds)
                            </span>
                          }
                      name={["scenariotime", "number"]}
                      rules={[
                        { required: true, message: <span className="scenariotime-required" style={{marginLeft:-155}}>Scenario is required </span>},

                      ]}
                    >
                      <Input
                        type='text'
                        value={formValue.scenarioTime}
                        name="scenarioTime"
                        id='textScenario'
                        placeholder="10"
                        style={{ width: 200,marginTop:32,backgroundColor:"#1d1c1c",color:"white",marginLeft:-160}}
                      />
                    </Form.Item>
                  </Form.Item>
                </Input.Group>
              </Form.Item>

    </Form>
    <Button
        className="addBtn" onClick={handleAdd}
                style={{  color: "white",backgroundColor:"Green", fontSize: 15,marginLeft:20}}
                type="primary"
                htmlType="add"
    >Add
            
    </Button>
    <Button onClick={handleClick}
        className="resetBtn"
                style={{  color: "white",backgroundColor:"orange", fontSize: 15,marginLeft:20}}
                type="primary"
                htmlType="reset"
    >Reset
            
    </Button>
    <Button
        className="gobackBtn"
                style={{ color: "white",backgroundColor:"blue", fontSize: 15,marginLeft:20}}
                type="primary"
                htmlType="goback"
    >Go Back
            
    </Button>
  </div>
    
  );
  
};

export default AddScenario;
