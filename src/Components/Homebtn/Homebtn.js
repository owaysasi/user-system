import React from 'react';
import './Homebtn.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

function Homebtn(){

    const history = useHistory();

    return(
        <div className="homebtn-wrapper">
            <Button 
            shape="round" 
            icon={<HomeOutlined />}
            onClick={() => {
                history.push("/");
            }}>Home</Button>
        </div>
    );
}

export default Homebtn;