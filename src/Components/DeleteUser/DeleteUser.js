import React from 'react';
import './DeleteUser.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

function DeleteUser({ id }){ // button that takes a props to delete a user
    return(
        <div className="delete-wrapper">
            <Button 
            shape="round"
            danger 
            type="primary" 
            icon={<DeleteOutlined/>}
            onClick={() => {
                console.log(`deleted ${id}`)
            }}>Delete</Button>
        </div>
    );
}

export default DeleteUser;