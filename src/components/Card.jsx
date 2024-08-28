import './Card.css'
import PropTypes from 'prop-types';

export default function Card({title, desc, image, price}) {
  return (
    <div className='container'>
      <div className='cardContainer'>
        <img id="image" src={image} />
        <h2 id='title'>{title} - {price}</h2>
        <p id='desc'>{desc}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number
};
