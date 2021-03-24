import React from 'react';
import './Delete.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

function Delete(){
    return(
        <div className="delete-wrapper">
            <Button 
            shape="round" 
            type="danger" 
            icon={<DeleteOutlined/>}
            onClick={() => {
                console.log("deleted")
            }}>Delete</Button>
        </div>
    );
}

export default Delete;