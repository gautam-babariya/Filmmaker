import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Addvideo.css'

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
    const headers = {
        'Content-Type': 'multipart/form-data', // Adjust content type based on your API requirements
        'Authorization': 'Bearer yourAccessToken', // Include any necessary authorization headers
        // Add other headers as needed
      };

    const uplode = (e) => {
        e.preventDefault();
        const productData = {
            title: data.title,
            description: data.description,
        };
        const formData = new FormData();
        formData.append('type', selectedOption);
        formData.append('video', file);
        formData.append('title', productData.title);
        formData.append('description', productData.description);
        // axios.post('https://filmmaker-api.vercel.app/addvideo', formData)
        axios.post('http://localhost:5500/addvideo', formData)
            .then((Response) => {
                if (Response.data == "1") {
                    navigate('/');
                }
            })
    }
    return (
        <>
        {/* <div className='managepage_class'> */}
            <select className='selectopt_class' value={selectedOption} onChange={handleSelectChange}>
                <option value="Teaser">Teaser</option>
                <option value="Highlights">Highlights</option>
                <option value="Reels">Reels</option>
            </select>

            <label className='label_class' htmlFor="video">Video</label>
            <input className='input_class' type="file" accept="video/mp4" name="video" onChange={(e) => setfile(e.target.files[0])} />

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