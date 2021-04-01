import React, {useState} from 'react';
import './AddUser.css';
import 'antd/dist/antd.css';
import { Button, Modal, Input, Empty } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { addUser, deleteUser } from '../../actions';
import { useSelector, useDispatch, connect } from 'react-redux';

function AddUser(props){


    const dispatch = useDispatch();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [ firstName, setFirstName ] = useState("");
    const [ id, setId ] = useState(null);
    const [ email, setEmail ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [newUser, setNewUser] = useState({});

    // const modalRef = useRef(null);

    const showModal = () => {
        setIsModalVisible(true);
    };
    
      const handleOk = () => {
          if(!id){
              console.log("Fill the id field first");
          }
          else{
            console.log("done");
            dispatch(addUser({
                id: id,
                firstName: firstName,
                lastName: lastName,
                email: email
            }));
            setIsModalVisible(false);
        }
    };
    
      const handleCancel = () => {
        setFirstName("");
        setLastName("");
        setId(null);
        setEmail("");
        setIsModalVisible(false);
    };

    return(
        <div className="add-wrapper">
            <Button 
            shape="round" 
            type="primary" 
            icon={<PlusOutlined />}
            onClick={() => {showModal()}}
            >Add User</Button>
            <Modal width="500px" title="Add New User" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className="label-cont">
                    <label className="label">FirstName : </label>
                    <Input value={firstName} onChange={(e) => {
                        setFirstName(e.target.value);
                    }}/>
                </div>
                <div className="label-cont">
                    <label className="label">Email : </label>
                    <Input value={email} onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                </div>
                <div className="label-cont">
                    <label className="label">ID : </label>
                    <Input value={id} onChange={(e) => {
                        setId(e.target.value);
                    }}/>
                </div>
                <div className="label-cont">
                    <label className="label">LastName : </label>
                    <Input value={lastName} onChange={(e) => {
                        setLastName(e.target.value);
                    }}/>
                </div>
            </Modal>
        </div>
    );
}

export default AddUser;