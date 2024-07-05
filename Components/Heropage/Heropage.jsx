import React, { useEffect, useState } from 'react'
import './Heropage.css'
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useParams } from 'react-router-dom';

function heropage() {
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
    axios.get('https://filmmaker-api.vercel.app/getvideo')
    // https://filmmaker-api.vercel.app/getvideo
    .then(async (res) => setproductdetain(res.data)
    );
  }, []);
  return (
    <>
      <div className='divofcard_class'>
       

        {productdetail.map(item => (
        <div key={item.id}>
    
        {item.type === objectIdTofind ? (
          <Card className='videocard_class' style={{ width: windowSize[0] / 1.2 }}>
            <div className='divofvideo_class'>
              <div className="block">
                <video className='video_class' variant="top" controls>
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
                <video className='video_class' variant="top" controls>
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

