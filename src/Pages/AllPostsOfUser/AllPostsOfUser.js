import React, { useEffect, useState } from 'react';
import './AllPostsOfUser.css';
import 'antd/dist/antd.css';
import { useLocation, useParams } from "react-router-dom";
import Homebtn from '../../Components/Homebtn/Homebtn';
import PostShape from '../../Components/PostShape/PostShape';
import {FetchingCertianUserPosts} from '../../ApiRequests/Requests';


function AllPostsOfUser(){

    const location = useLocation();
    const [posts, setPosts] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const getDatatoState = async () => {
        const results = await  FetchingCertianUserPosts(location.state)
        setPosts(results)
    }

    useEffect(() => {
        getDatatoState()
        setTimeout(() => {
            setLoading(false)
        },[3000])
    },[]);  

    return(
        <div className="posts-wrapper">
            <div className="homebtn-posts-wrapper">
                <Homebtn/>
            </div>
            {!loading && 
            
            <div className="posts-owner-pic-wrapper">
                <img className="posts-owner-pic" src={posts[0].ownerPic}/>
                <h3 className="posts-owner-name">{`${posts[0].ownerFirstName} ${posts[0].ownerLastName}`}</h3>
            </div>
            }
            <div className="posts-mini-wrapper">
                {loading ? (<div className="loader"></div>):posts.map((row) => {
                    return(
                        <PostShape 
                        key={row.key} 
                        pic={row.pic} 
                        text={row.text}
                        publishDate={row.publishDate}
                        likes={row.likes}
                         />
                    );
                })}
            </div>
        </div>
    );
}


export default AllPostsOfUser;