import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import Card from "react-bootstrap/Card";
import Plot from '../Images/Plot.png';
import Rental from '../Images/Rental.png';
import Villa from '../Images/Villa.png';
import Commercial from '../Images/Commercial.png';

const Exploreproperty = () => {
  const navigate = useNavigate();

  const navigateToProperties = (type) => {
    navigate(`/properties/${type}`);
  };

  return (
    <div className="exploreprop">
      <p className="section-subtitle" id="Properties">Explore Properties</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card className="card expcard" style={{ flex: '1 0 30%', margin: '10px' }} onClick={() => navigateToProperties('plot&land')}>
          <Card.Img variant="top" src={Plot} className="cimg" />
          <Card.Body>
            <Card.Title className='exphead'>PLOTS AND LANDS</Card.Title>
            <Card.Text className='expbody'>
              Discover available plots and lands for sale.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card expcard" style={{ flex: '1 0 30%', margin: '10px' }} onClick={() => navigateToProperties('villa')}>
          <Card.Img variant="top" src={Villa} className="cimg" />
          <Card.Body>
            <Card.Title className='exphead'>INDIVIDUAL VILLAS</Card.Title>
            <Card.Text className='expbody'>
              Browse individual villas for your dream home.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card expcard" style={{ flex: '1 0 30%', margin: '10px' }} onClick={() => navigateToProperties('commercial building')}>
          <Card.Img variant="top" src={Commercial} className="cimg" />
          <Card.Body>
            <Card.Title className='exphead'>COMMERCIAL BUILDINGS</Card.Title>
            <Card.Text className='expbody'>
              Explore commercial buildings for your business needs.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card expcard" style={{ flex: '1 0 30%', margin: '10px' }} onClick={() => navigateToProperties('pgrental')}>
          <Card.Img variant="top" src={Rental} className="cimg" />
          <Card.Body>
            <Card.Title className='exphead'>PG/RENTAL</Card.Title>
            <Card.Text className='expbody'>
              Find rental properties and PG accommodations.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card expcard" style={{ flex: '1 0 30%', margin: '10px' }} onClick={() => navigateToProperties('Flat')}>
          <Card.Img variant="top" src={Plot} className="cimg" />
          <Card.Body>
            <Card.Title className='exphead'>LUXURIOUS FLATS</Card.Title>
            <Card.Text className='expbody'>
              Discover available plots and lands for sale.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card expcard" style={{ flex: '1 0 30%', margin: '10px' }} onClick={() => navigateToProperties('House')}>
          <Card.Img variant="top" src={Plot} className="cimg" />
          <Card.Body>
            <Card.Title className='exphead'>COMPACT HOUSES</Card.Title>
            <Card.Text className='expbody'>
              Discover available plots and lands for sale.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Exploreproperty;
