import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Addvideo.css'
import { useEffect , useRef } from 'react';

function Addvideo() {
    const navigate = useNavigate();
    const [file, setfile] = useState();
    const [selectedOption, setSelectedOption] = useState('Teaser');

    const [data, setData] = useState({
        title: "",
        description: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
   
    const uplode = (e) => {
        e.preventDefault();
        const productData = {
            title: data.title,
            description: data.description,
        };
        const storedVideoUrl = localStorage.getItem('uploadedVideoUrl');
        const storedimageUrl = localStorage.getItem('uploadedimageUrl');
        const formData = new FormData();
        formData.append('type', selectedOption);
        formData.append('video', storedVideoUrl);
        formData.append('poster', storedimageUrl);
        formData.append('title', productData.title);
        formData.append('description', productData.description);
        const addvideoapi = import.meta.env.VITE_ADD_VIDEO_IN_BACKEND;
        axios.post(addvideoapi, formData)
        // axios.post('http://localhost:5500/addvideo', formData)
            .then((Response) => {
                if (Response.data == "1") {
                    navigate('/');
                }
            })
    }

    const cloudinaryRef = useRef();
    const widgetref = useRef();
    const cloude_name = import.meta.env.VITE_CLOUD_NAME;
    const uploadpresent = import.meta.env.VITE_CLOUD_UPLOADPRESENT;

    useEffect(() => {
            cloudinaryRef.current = window.cloudinary;
            widgetref.current = cloudinaryRef.current.createUploadWidget({
                cloudName: cloude_name,
                uploadPreset: uploadpresent
            }, function(error,result){
                if (!error && result && result.event === "success") {
                  localStorage.setItem('uploadedVideoUrl', result.info.secure_url);
                } else if (error) {
                  console.error('Error during upload:', error);
                }
            });
    }, [])
    const cloudinaryref = useRef();
    const widgetRef = useRef();
    useEffect(() => {
            cloudinaryref.current = window.cloudinary;
            widgetRef.current = cloudinaryref.current.createUploadWidget({
                cloudName: cloude_name,
                uploadPreset: uploadpresent
            }, function(error,result){
                if (!error && result && result.event === "success") {
                  localStorage.setItem('uploadedimageUrl', result.info.secure_url);
                } else if (error) {
                  console.error('Error during upload:', error);
                }
            });
    }, [])
    return (
        <>
        {/* <div className='managepage_class'> */}
        <button onClick={()=> widgetref.current.open()}>
                Uplode video
        </button>
        <button onClick={()=> widgetRef.current.open()}>
                Uplode image
        </button>
            <select className='selectopt_class' value={selectedOption} onChange={handleSelectChange}>
                <option value="Teaser">Teaser</option>
                <option value="Highlights">Highlights</option>
                <option value="Reels">Reels</option>
            </select>

            {/* <input type="file" name="poster" onChange={(e) => setposter(e.target.files[0])}></input> */}

            <label className='label_class' htmlFor="title">title</label>
            <input className='input_class' type="text" name="title" value={DataTransferItem.title} onChange={handleChange} />

            <label className='label_class' htmlFor="description">desc</label>
            <input className='input_class' type="text" name="description" value={data.desc} onChange={handleChange} />

            {/* </div> */}
            <button className='botton_class' type='submit' onClick={uplode} >ok</button>
        </>
    )
}

export default Addvideo