import React from 'react';
import './Posts.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { FileOutlined } from '@ant-design/icons';

function Posts({ id }){
    return(
        <div className="posts-wrapper">
            <Button 
            shape="round" 
            type="text"
            icon={<FileOutlined/>}
            onClick={() => {
                console.log(`${id}`)
            }}>Posts</Button>
        </div>
    );
}

export default Posts;