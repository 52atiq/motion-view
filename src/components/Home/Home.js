import React from 'react';
import Products from '../Products/Products';
import BannerSlider from '../slider/BannerSlider';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <Products></Products>
        </div>
    );
};

export default Home;