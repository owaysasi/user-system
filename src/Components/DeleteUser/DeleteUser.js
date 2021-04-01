import React from 'react';
import './DeleteUser.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import {useDispatch} from 'react-redux';

function DeleteUser({ key }){ // button that takes a props to delete a user

    const dispatch = useDispatch();

    return(
        <div className="delete-wrapper">
            <Button 
            shape="round"
            danger 
            type="primary" 
            icon={<DeleteOutlined/>}
            onClick={() => {
                // dispatch(DeleteUser(key));
                console.log(key)
            }}>Delete</Button>
        </div>
    );
}

export default DeleteUser;