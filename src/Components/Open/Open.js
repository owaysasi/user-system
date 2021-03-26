import React from 'react';
import './Open.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function Open(){
    return(
        <div className="Open-wrapper">
            <Button 
            shape="round" 
            type="alarm" 
            icon={<UserOutlined/>}
            onClick={() => {
                console.log("Open")
            }}>Open</Button>
        </div>
    );
}

export default Open;