import React,{useState} from 'react';
import { Table, Input, Button, Select } from 'antd';
import {PlusCircleFilled,EditFilled,DeleteFilled} from '@ant-design/icons';
const { Option } = Select;

const AllScenarios = () => {
  const [newScenario, setNewScenario] = useState('');
  const [scenarios, setScenarios] = useState([]);
  const [showInput,setShowInput]=useState(false);
  const [editingScenarioId, setEditingScenarioId] = useState(null);

  const handleButtonClick=()=>{
    setShowInput(true);
  }

  const handleNewScenarioChange = (event) => {
    setNewScenario(event.target.value);
  };

  const handleEditRow=(event)=>{
    setNewScenario(event.target.value);
  }
  const handleAddScenario = () => {
    if (newScenario.trim() === '') return;
    setScenarios([...scenarios, { id:scenarios.length+1, name: newScenario,vehicles: [] }]);
    setNewScenario('');
  };

  const handleDeleteAllScenarios = () => {
    setScenarios([]);
  };
  const handleAddVehicle = (scenarioId) => {
    const vehicleName = prompt('Enter vehicle name:');
    if (vehicleName) {
      const updatedScenarios = scenarios.map((scenario) => {
        if (scenario.id === scenarioId) {
          return { ...scenario, vehicles: [...scenario.vehicles, vehicleName] };
        }
        return scenario;
      });
      setScenarios(updatedScenarios);
    }
  };

  const handleDeleteScenario = (scenarioId) => {
    const updatedScenarios = scenarios.filter((scenario) => scenario.id === scenarioId);
    setScenarios(updatedScenarios);
  };
  const handleEdit = (scenarioId) => {
    setEditingScenarioId(scenarioId);
  };

  const handleSave = (scenarioId, updatedData) => {
    const updatedScenarios = scenarios.map((scenario) =>
      scenario.id === scenarioId ? { ...scenario, ...updatedData } : scenario
    );
    setScenarios(updatedScenarios);
    setEditingScenarioId(null);
  };
  const columns = [
    {
      title: 'Scenario ID',
      dataIndex: 'id',
    },
    {
      title: 'Scenario Name',
      dataIndex: 'name',
      render: (text, record) =>
        editingScenarioId === record.id ? (
          <Input value={text} onChange={(e) => handleSave(record.id, { name: e.target.value })} />
        ) : (
          text
        ),
    },
    {
      title: 'Scenario Time',
      dataIndex: 'time',
      render: () => <Input style={{width:200}} placeholder="Enter time" />,
    },
    {
      title: 'Number of Vehicles',
      dataIndex: 'vehicles',
      render: (vehicles) => vehicles.length,
    },
    {
      title: 'Add Vehicle',
      dataIndex: 'addVehicle',
      render:(_,record)=><PlusCircleFilled onClick={() => handleAddVehicle(record.id)} />
    },
    
    {
      title: 'Edit',
      dataIndex: 'edit',
      render: (_, record) => (
        <span>
          {editingScenarioId === record.id ? (
            <>
              <Button onClick={() => handleSave(record.id)}>Save</Button>
              <Button onClick={() => setEditingScenarioId(null)}>Cancel</Button>
            </>
          ) : (
            <>
              <EditFilled onClick={() => handleEdit(record.id)}/>
            </>
          )}
        </span>
      )
      // render:(_,record)=><EditFilled onClick={()=>handleEditRow(record.id)}/>
    },
    {
      title: 'Delete',
      dataIndex: 'delete',
      render:(_,record)=><DeleteFilled onClick={()=>handleDeleteScenario(record)}/>
    },
    // {
    //   title: 'Actions',
    //   render: (_, record) => (
    //     <span>
    //       <Button onClick={() => handleAddVehicle(record.id)}>Add Vehicle</Button>
    //       <Button>Edit</Button>
    //       <Button onClick={() => handleDeleteScenario(record.id)}>Delete</Button>
    //     </span>
    //   ),
    // },
  ];

  return(
    <div>
      <h4 style={{color:'white'}}>All Scenarios</h4>
      <div className='button'style={{float:'right'}}>
      {/* <Input
            value={newScenario}
            onChange={handleNewScenarioChange}
            placeholder="Scenario Name"
          /> */}
          
         {/* <Input
            value={newScenario}
            onChange={handleNewScenarioChange}
            placeholder="Scenario Name"
          />
           <Input
            value={newScenario}
            onChange={handleNewScenarioChange}
            placeholder="Scenario Time"
          /> */}
           {/* <Input
            value={newScenario}
            onChange={handleNewScenarioChange}
            placeholder="Number of Vehicles"
          /> */}
      <Button  
      onClick={handleButtonClick}
      // onClick={handleAddScenario}
        className="addBtn"
                style={{  color: "white",backgroundColor:"blue", fontSize: 15,marginLeft:20}}
                type="primary"
                htmlType="add"
    >New Scenario
            
    </Button>
    <Button onClick={handleAddVehicle}
        className="resetBtn"
                style={{  color: "white",backgroundColor:"Green", fontSize: 15,marginLeft:20}}
                type="primary"
                htmlType="reset"
    >Add Vehicle
            
    </Button>
    <Button
        className="gobackBtn" onClick={handleDeleteAllScenarios}
                style={{ color: "white",backgroundColor:"orange", fontSize: 15,marginLeft:20}}
                type="primary"
                htmlType="goback"
    >Delete All   
    </Button><br/>
    {showInput && <input type='text' placeholder='Scenario Name'  autoComplete='off'
         onChange={handleNewScenarioChange}/>}<br/>
    {showInput && <button onClick={handleAddScenario}>Add Scenario </button>}
      </div>
      <Table columns={columns} dataSource={scenarios} rowKey="id" size='small' />
    </div>

  );
};

export default AllScenarios;
