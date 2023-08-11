import React from 'react';
import {Form,Input,Button,Select} from 'antd';

const AddVehicle = () => {
  return( 
  <div>
    <div style={{marginLeft:20,fontSize:14,color:"white"}}>Vechile/add</div><br/><br/>
    <div  style={{marginLeft:20,fontSize:20,fontWeight:500,color:"white"}}>Add Vehicle</div><br/>
    <Form
        name="basic"
        className="loginForm"
        autoComplete="off"
    >
        <Form.Item className="vehicle">
                <Input.Group compact>
                  <Form.Item
                    label={
                        <span className="label-scenario" style={{marginTop:10,marginLeft:45 }}>
                          Scenarios List
                        </span>
                      }
                    name="scenarioName"
                  >
                   <Select
                  placeholder="Select Scenario"
                  style={{ width:200,backgroundColor:"#1d1c1c",color:"white",marginLeft:-100,marginTop:32}} 
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
                 />
                     {/* <Input 
                     type='text'
                     id='textScenario'
                      placeholder="Select Scenario"
                      style={{ width:200,backgroundColor:"#1d1c1c",color:"white",marginLeft:-100,marginTop:32}} 
                    /> */}
                  </Form.Item>
                  <Form.Item
                        label={
                            <span className="label-scenario" style={{marginTop:10,marginLeft:65 }}>
                              Vehicle Name
                            </span>
                          }
                     >
                      <Input
                        type='text'
                        id='textScenario'
                        placeholder="Target abc"
                        style={{ width: 200,marginTop:32,backgroundColor:"#1d1c1c",color:"white",marginLeft:-97}}
                      />
                    </Form.Item>
                    <Form.Item
                        label={
                            <span className="label-scenario" style={{marginTop:10,marginLeft:65 }}>
                              Speed
                            </span>
                          }
                     >
                      <Input
                        type='text'
                        id='textScenario'
                        placeholder="2"
                        style={{ width: 200,marginTop:32,backgroundColor:"#1d1c1c",color:"white",marginLeft:-50}}
                      />
                    </Form.Item>
                    <Form.Item
                    label={
                        <span className="label-scenario" style={{marginTop:-10,marginLeft:32 }}>
                          Position X
                        </span>
                      }
                    name="positionX"
                    rules={[
                      { required: true, message: <span className="positionX-required" style={{marginLeft:-75,fontWeight:300}}>Position X should not be {">"} 800 and {"<"}  0</span>},

                    ]}
                  >
                     <Input 
                     type='text'
                     id='textScenario'
                      placeholder="1000"
                      style={{ width:200,backgroundColor:"#1d1c1c",color:"white",marginLeft:-75,marginTop:23}} 
                    />
                  </Form.Item>
                  <Form.Item
                        label={
                            <span className="label-scenario" style={{marginTop:-35,marginLeft:65,alignItems:'center' }}>
                              Position Y
                            </span>
                          }
                     >
                      <Input
                        type='text'
                        id='textScenario'
                        placeholder="20"
                        style={{ width: 200,marginTop:23,backgroundColor:"#1d1c1c",color:"white",marginLeft:-77}}
                      />
                    </Form.Item>
                    <Form.Item
                        label={
                            <span className="label-scenario" style={{marginTop:-35,marginLeft:69 }}>
                              Direction
                            </span>
                          }
                     >
                  <Select
                  placeholder="Select Direction"
                  style={{ width:200,backgroundColor:"#1d1c1c",color:"white",marginLeft:-67,marginTop:23}} 
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: 'Towards',
                      label: 'Towards',
                    },
                    {
                      value: 'Backwards',
                      label: 'Backwards',
                    },
                    {
                      value: 'Upwards',
                      label: 'Upwards',
                    },
                    {
                      value: 'Downwards',
                      label: 'Downwards',
                    },
                   
                  ]}
                 />
                      {/* <Input
                        type='text'
                        id='textScenario'
                        placeholder="Select Direction"
                        style={{ width: 200,marginTop:23,backgroundColor:"#1d1c1c",color:"white",marginLeft:-67}}
                      /> */}
                    </Form.Item>
                </Input.Group>
              </Form.Item>
              {/* <Form.Item className="addvehicle">
                <Input.Group compact>
                  <Form.Item
                    label={
                        <span className="label-scenario" style={{marginTop:-26,marginLeft:45 }}>
                          Position X
                        </span>
                      }
                    name="positionX"
                    rules={[
                      { required: true, message: <span className="positionX-required" style={{marginLeft:-155}}>Position X should not be {">"} 800 and {"<"}  0</span>},

                    ]}
                  >
                     <Input 
                     type='text'
                     id='textScenario'
                      placeholder="1000"
                      style={{ width:200,backgroundColor:"#1d1c1c",color:"white",marginLeft:-105,marginTop:32}} 
                    />
                  </Form.Item>
                  <Form.Item
                        label={
                            <span className="label-scenario" style={{marginTop:10,marginLeft:65 }}>
                              position Y
                            </span>
                          }
                     >
                      <Input
                        type='text'
                        id='textScenario'
                        placeholder="20"
                        style={{ width: 200,marginTop:32,backgroundColor:"#1d1c1c",color:"white",marginLeft:-97}}
                      />
                    </Form.Item>
                    <Form.Item
                        label={
                            <span className="label-scenario" style={{marginTop:10,marginLeft:65 }}>
                              Direction
                            </span>
                          }
                     >
                      <Input
                        type='text'
                        id='textScenario'
                        placeholder="Select Direction"
                        style={{ width: 200,marginTop:32,backgroundColor:"#1d1c1c",color:"white",marginLeft:-50}}
                      />
                    </Form.Item>
                </Input.Group>
              </Form.Item> */}

    </Form>
    <Button
        className="addBtn"
                style={{  color: "white",backgroundColor:"Green", fontSize: 15,marginLeft:20}}
                type="primary"
                htmlType="add"
    >Add
            
    </Button>
    <Button
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

export default AddVehicle;
