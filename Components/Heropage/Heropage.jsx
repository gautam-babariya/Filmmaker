import React, { useEffect, useState } from 'react'
import './Heropage.css'
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useParams } from 'react-router-dom';
import logo from '../accets/shiv_studio.jpg'

function heropage() {
  const apiUrl = import.meta.env.VITE_GET_VIDEO_FROM_BACKEND; 
 
  // find windows height and width 
  // windowSize[0] == width
  // windowSize[1] == height
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [productdetail, setproductdetain] = useState([]);
  var { id } = useParams();
  var objectIdTofind = id;
  useEffect(() => {
    axios.get(apiUrl)
    // axios.get('http://localhost:5500/getvideo')
    .then(async (res) => setproductdetain(res.data)
    );
  }, []);
  return (
    <>
      <div className='divofcard_class'>
        {productdetail.map(item => (
        <div key={item.id} className='hiddendiv'>
        {item.type === objectIdTofind ? (
          <Card className='videocard_class' style={{ width: windowSize[0] / 1.2 }}>
            <div className='divofvideo_class'>
              <div className="block"> 
                <video className='video_class' variant="top" controlsList="nodownload" controls poster={`${item.poster}`}>
                  <source src={`${item.video}`} />
                </video>
              </div>
            </div>
            <Card.Body className='bodyofvideo_class'>
              <Card.Title className='titleofvideo_class'>{item.title}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
            </Card.Body>
          </Card>
        ) : null}
          
        {undefined === objectIdTofind ? (
          <Card className='videocard_class' style={{ width: windowSize[0] / 1.2 }}>
            <div className='divofvideo_class'>
              <div className="block">
                <video className='video_class' variant="top" controls controlsList="nodownload" poster={`${item.poster}`}>
                  <source src={`${item.video}`} />
                </video>
              </div>
            </div>
            <Card.Body className='bodyofvideo_class'>
              <Card.Title className='titleofvideo_class'>{item.title}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
            </Card.Body>
          </Card>
        ) : null}
      </div>
        ))}

      </div>

    </>
  )
}

export default heropage

