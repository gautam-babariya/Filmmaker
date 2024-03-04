import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
        const formData = new FormData();
        formData.append('type', selectedOption);
        formData.append('video', file);
        formData.append('title', productData.title);
        formData.append('description', productData.description);

        axios.post('http://localhost:5500/addvideo', formData)
            .then((Response) => {
                if (Response.data == "1") {
                    navigate('/');
                }
            })
    }
    return (
        <>

            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="Teaser">Teaser</option>
                <option value="Highlights">Highlights</option>
                <option value="Reels">Reels</option>
            </select>

            <label htmlFor="Video">Video</label>
            <input type="file" accept="video/mp4" name="file" onChange={(e) => setfile(e.target.files[0])} />

            <label htmlFor="title">title</label>
            <input type="text" name="title" value={DataTransferItem.title} onChange={handleChange} />

            <label htmlFor="description">desc</label>
            <input type="text" name="description" value={data.desc} onChange={handleChange} />

            <button type='submit' onClick={uplode} >ok</button>

        </>
    )
}

export default Addvideo