import Carousel from 'react-bootstrap/Carousel'
import kalkivideo from "./videos/kalki2.mp4"
import avatar2vedio from "./videos/avatar.mp4"
import jawan from "./videos/jawan.mp4"

function CaroselExample() {
  return (
    <Carousel className='no-scrollbar' data-bs-theme="dark" style={{ margin: "50px 0px 80px 0px"}}>
      <Carousel.Item>
        <video className="d-block w-100" style={{ height: "500px", objectFit: "cover"}} height="500px" autoPlay muted>
          <source src={kalkivideo} type="video/mp4"/>
        </video>    
      </Carousel.Item>
      <Carousel.Item>
        <video className="d-block w-100" style={{ height: "500px", objectFit: "cover"}} height="500px" autoPlay muted>
          <source src={avatar2vedio} type="video/mp4"/>
        </video>
      </Carousel.Item>
      <Carousel.Item>
        <video className="d-block w-100" style={{ height: "500px", objectFit: "cover"}} height="500px" autoPlay muted>
          <source src={jawan} type="video/mp4"/>
        </video>
      </Carousel.Item>
    </Carousel>
  );
}

export default CaroselExample;
