import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllPostsOfUser.css';
import 'antd/dist/antd.css';
import { useLocation } from "react-router-dom";
import Homebtn from '../../Components/Homebtn/Homebtn';
import { Row } from 'antd';
import PostShape from '../../Components/PostShape/PostShape';
const URL = `https://dummyapi.io/data/api/user`;
const APP_ID = '605dcfd123d78a50c5067229';


function AllPostsOfUser(){

    const location = useLocation();

    const [ state, setState ] = useState([]);
    const [firstName, setFirstName ] = useState("");
    const [lastName, setLastName ] = useState("");
    const [ownerPic, setOwnerPic ] = useState();
    const [ loading, setLoading ] = useState(true);


    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        await axios.get(`${URL}/${location.state}/post`, { headers: { 'app-id': APP_ID} })
        .then((res) => {
            setState(
                res.data.data.map((row) => ({
                    key : row.id,
                    pic : row.image,
                    likes : row.likes,
                    publishDate : row.publishDate,
                    ownerPic: row.owner.picture,
                    ownerFirstName: row.owner.firstName,
                    ownerLastName: row.owner.lastName,
                    text : row.text,
                    tags : row.tags
                })));
            setFirstName(res.data.data[0].owner.firstName);
            setLastName(res.data.data[0].owner.lastName);
            setOwnerPic(res.data.data[0].owner.picture);
            console.log(res.data.data);
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
        
    };

    return(
        <div className="posts-wrapper">
            <div className="homebtn-posts-wrapper">
                <Homebtn/>
            </div>
            <div className="posts-owner-pic-wrapper">
                <img className="posts-owner-pic" src={ownerPic}/>
                <h3 className="posts-owner-name">{`${firstName} ${lastName}`}</h3>
            </div>
            <div className="posts-mini-wrapper">
                {loading ? (<div className="loading-posts">Loading...</div>):state.map((row) => {
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