import React, {useState} from 'react';
import './Add.css';
import 'antd/dist/antd.css';
import { Button, Modal, Input, Label } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function Add(){

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [ firstName, setFirstName ] = useState();
    const [ id, setId ] = useState(null);
    const [ email, setEmail ] = useState();
    const [ lastName, setLastName ] = useState();

    const showModal = () => {
        setIsModalVisible(true);
    };
    
      const handleOk = () => {
        setIsModalVisible(false);
    };
    
      const handleCancel = () => {
        setIsModalVisible(false);
    };

    return(
        <div className="add-wrapper">
            <Button 
            shape="round" 
            type="primary" 
            icon={<PlusOutlined />}
            onClick={showModal}
            >Add User</Button>
            <Modal width="500px" title="Add New User" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className="label-cont">
                    <label className="label">FirstName : </label>
                    <Input placeholder={firstName} onChange={(e) => {
                        setFirstName(e.target.value);
                    }}/>
                </div>
                <div className="label-cont">
                    <label className="label">Email : </label>
                    <Input placeholder={email} onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                </div>
                <div className="label-cont">
                    <label className="label">ID : </label>
                    <Input placeholder={id} onChange={(e) => {
                        setId(e.target.value);
                    }}/>
                </div>
                <div className="label-cont">
                    <label className="label">LastName : </label>
                    <Input placeholder={lastName} onChange={(e) => {
                        setLastName(e.target.value);
                    }}/>
                </div>
            </Modal>
        </div>
    );
}

export default Add;