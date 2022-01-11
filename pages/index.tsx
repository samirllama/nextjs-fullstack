import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import {Loader} from '@googlemaps/js-api-loader';
import styles from '../styles/Home.module.css';

const HomePage = () => {
    console.log('from Homepage',process.env.NEXT_PUBLIC_API_KEY)
    const googlemap = React.useRef(null);
    React.useEffect(() => {
      const loader = new Loader({
        apiKey: 'yourAPIkey',
        version: 'weekly',
      });
      let map;
      loader.load().then(() => {
        map = new google.maps.Map(googlemap.current, {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8,
        });
      });
    });
    return(
        <div id="map" ref={googlemap} />
    ) 
};

export default HomePage;
