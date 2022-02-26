import React from 'react';
import PText from './PText';
import '../style/components/Map.scss';

export default function Map() {
  return (
    <div className="Map">
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Ajmer, Rajasthan</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Ajmer,+Rajasthan/@26.4532261,74.5656735,12z/data=!3m1!4b1!4m5!3m4!1s0x396be6d8fcb7cd01:0xcbaf8f12eb8100ee!8m2!3d26.4498954!4d74.6399163"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </div>
  );
}
