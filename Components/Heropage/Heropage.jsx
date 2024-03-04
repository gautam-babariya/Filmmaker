import React, { useEffect, useState } from 'react'
import './Heropage.css'
import video1 from '../accets/croped.mp4'
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
    .then(async (res) => setproductdetain(res.data)
    );
  }, []);
  return (
    <>
      <div className='divofcard_class'>
        <Card className='videocard_class' style={{ width: windowSize[0] / 1.2 }}>
          <div className='divofvideo_class'>
            <div className="block">
              <video className='video_class' variant="top" controls  >
                <source src={video1} type="video/mp4" />
              </video>
            </div>
          </div>
          <Card.Body className='bodyofvideo_class'>
            <Card.Title className='titleofvideo_class'>The Developer</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus velit reprehenderit saepe, accusantium at architecto illo nesciunt voluptates magni harum voluptatem perspiciatis aperiam praesentium laboriosam cum non excepturi commodi, veniam enim ullam rem reiciendis omnis dicta. Officia, inventore enim.
            </Card.Text>
          </Card.Body>
        </Card>

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
          {console.log(objectIdTofind)}
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

