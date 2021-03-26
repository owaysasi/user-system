import React from 'react';
import './Open.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useHistory } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';


function Open({ id }){

    const history = useHistory();

    return(
        <div className="Open-wrapper">
            <Button 
            shape="round" 
            type="alarm" 
            icon={<UserOutlined/>}
            onClick={() => {
                history.push({pathname:"/user", state : id});
            }}>Profile</Button>
        </div>
    );
}

export default Open;