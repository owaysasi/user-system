import React from 'react';
import './OpenUser.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useHistory } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';


function OpenUser({ id }){ // button that takes props to open a user profile

    const history = useHistory();

    return(
        <div className="Open-wrapper">
            <Button 
            shape="round" 
            type="text"
            icon={<UserOutlined/>}
            onClick={() => {
                // history.push({pathname:"/user", state : id});
                console.log(id)
            }}>Profile</Button>
        </div>
    );
}

export default OpenUser;