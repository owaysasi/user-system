import React, { useEffect, useState } from 'react';
import './AllPostsOfUser.css';
import 'antd/dist/antd.css';
import { useLocation } from "react-router-dom";
import Homebtn from '../../Components/Homebtn/Homebtn';
import PostShape from '../../Components/PostShape/PostShape';
import {FetchingCertianUserPosts} from '../../ApiRequests';


function AllPostsOfUser(){

    const location = useLocation();

    let posts = [];
    const [firstName, setFirstName ] = useState("");
    const [lastName, setLastName ] = useState("");
    const [ownerPic, setOwnerPic ] = useState();
    const [ loading, setLoading ] = useState(true);


    useEffect(() => {
        console.log("state is "+FetchingCertianUserPosts(location.state))
        setTimeout(() => {
            setLoading(false)
        },[2000])
    },[]);

    return(
        <div className="posts-wrapper">
            <div className="homebtn-posts-wrapper">
                <Homebtn/>
            </div>
            {/* <div className="posts-owner-pic-wrapper">
                <img className="posts-owner-pic" src={ownerPic}/>
                <h3 className="posts-owner-name">{`${firstName} ${lastName}`}</h3>
            </div> */}
            <div className="posts-mini-wrapper">
                {loading ? (<div className="loader"></div>):posts.map((row) => {
                    return(
                        <PostShape 
                        key={row.data.key} 
                        pic={row.data.pic} 
                        text={row.data.text}
                        publishDate={row.data.publishDate}
                        likes={row.data.likes}
                         />
                    );
                })}
                {console.log(posts)}
            </div>
        </div>
    );
}


export default AllPostsOfUser;