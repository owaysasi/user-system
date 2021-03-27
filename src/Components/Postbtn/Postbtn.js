import React from 'react';
import './Postbtn.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useHistory } from "react-router-dom";
import { FileOutlined } from '@ant-design/icons';

function Postbtn({ id }){

    const history = useHistory();

    return(
        <div className="postbtn-wrapper">
            <Button 
            shape="round" 
            
            icon={<FileOutlined/>}
            onClick={() => {
                history.push({pathname:"/posts", state : id});
            }}>Posts</Button>
        </div>
    );
}

export default Postbtn;