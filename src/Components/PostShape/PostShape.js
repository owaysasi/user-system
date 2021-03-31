import React from 'react';
import './PostShape.css';
import 'antd/dist/antd.css';
import { LikeOutlined } from '@ant-design/icons';



function PostShape(props){ // Post component 

    const { likes, text, pic, publishDate } = props;

    return(
        <div className="post-wrapper">
            <div className="post-pic-wrapper">
                <img className="post-pic" src={pic}/>
            </div>
            <div className="post-data-wrapper">
                <p className="likes"><LikeOutlined/>{likes}</p>
                <p>{text}</p>
                <p className="post-date">{publishDate.substring(0,16)}</p>
            </div>
        </div>
    );
}

export default PostShape;