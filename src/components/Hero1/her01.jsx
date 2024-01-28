import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    
    <div style={{ width: '90%', margin: '0 auto' }}>
      
      <Slider {...settings}>
        <div>
          <img
            src="https://www.mhwilliams.com/wp-content/uploads/2020/01/11.jpeg"
            alt="Slide 1"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Slide 2"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div>
          <img
            src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/347781879_789718856132067_7752372044175283012_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHOJA3MLvLofYlVKqvWLGZikjUThGsupI6SNROEay6kjowL_zUj5jqFSC6uIZ5fs02Nwf75gq3zeII71I4cmnv0&_nc_ohc=6lcEzMp_2XMAX-g-HHh&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfDmZ8Wfx6linDRsspSnriAgd90HCIEIoXpPjO0PlM3wEw&oe=65BA3525"
            alt="Slide 3"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Hero1;
