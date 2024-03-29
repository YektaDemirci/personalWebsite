let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;
import { useState, useEffect, useRef } from "react";

const World = () => {  
    const globeRef = useRef();
    const [globeReady, setGlobeReady] = useState(false);
    const [countries, setCountries] = useState({ features: []});
    const [places, setPlaces] = useState([]);
    const [visited, setVisited] = useState([]);
    const [globeSize, setGlobeSize] = useState(450);

    const earthImg = "./images/globe/globe.png";  
    const startTime = 1000;

    useEffect(() => {
  
      fetch('./images/globe/places.geojson').then(res => res.json()).then(setCountries);
      fetch('./images/globe/cities.geojson').then(res => res.json()).then(({ features }) => setPlaces(features));
      fetch('./images/globe/visitedCities.geojson').then(res => res.json()).then(({ countries }) =>  setVisited(countries));

      if (typeof window !== 'undefined') {
        if (window.innerWidth < 450){
          setGlobeSize(window.innerWidth-70);
        }
      }

    }, []);

    useEffect(() => {
      if (!globeRef.current) {
        return;
      }
      globeRef.current.pointOfView(
        {
          lat: 35.1495,
          lng: -90.0490,
          altitude: 1.7,
        },
        startTime
      );
      // Auto-rotate
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 1.2;
    }, [globeReady]);

  
    return (
        <Globe
            globeImageUrl={earthImg}
            ref={globeRef}
            onGlobeReady={() => setGlobeReady(true)}
            backgroundColor="rgba(45, 45, 45, 1)"
            height={globeSize}
            width={globeSize}
            animateIn={true}
            showAtmosphere={true}
            atmosphereColor={"white"}
            atmosphereAltitude={0.15}

            labelsData={places}
            labelLat={d => d.properties.latitude}
            labelLng={d => d.properties.longitude}
            labelText={d => d.properties.name}
            labelSize={1.1}
            labelDotRadius={0.2}
            labelColor={() => 'rgba(0, 0, 0, 1)'}
            labelResolution={3}
            labelAltitude={0.01}

            polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
            polygonAltitude={0.01}
            polygonCapColor={({ properties: d }) => { if (visited.indexOf(d.ADMIN) !== -1) {return 'rgba(122, 154, 107, 0.6)'} else {return 'rgba(0, 0, 0, 0)'}}}
            polygonLabel={({ properties: d }) => `<b style="color: black; font-size: smaller;">${d.ADMIN}</b>`}
            polygonSideColor={() => 'rgba(175, 175, 175, 0.3)'}
        />
    );
  };
  
  export default World;
  