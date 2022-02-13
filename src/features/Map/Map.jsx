// Libs
import xlsx from "xlsx";
import React, { useState } from "react";
import { css } from "emotion";

// Components
import GoogleMapReact from "google-map-react";
import Point from "./components/Point";
import Information from "./components/Information";
import Filters from "./components/Filters";

import formatData from "./utilities/formatData";

const Map = () => {
  const [data, setData] = useState([]);

  const defaultProps = {
    center: {
      lat: 55.676098,
      lng: 12.568337,
    },
    zoom: 11,
  };

  async function onFileUpload(e) {
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(worksheet, { skipHeader: true });
        setData(formatData(json));
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  }

  function onShowInformation(index) {
    let tempData = [...data];
    tempData[index].settings.showInformation =
      !tempData[index].settings.showInformation;
    setData(tempData);
  }

  return (
    <div className={componentStyle()}>
      <div className="left-section">
        <Filters onFileUpload={onFileUpload} />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            {data.map((point, index) => (
              <Point
                data={point}
                onClick={() => onShowInformation(index)}
                lat={point.lat}
                lng={point.lng}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
      {data && (
        <div className="right-section">
          {data.map((information, index) => (
            <Information
              onClick={() => onShowInformation(index)}
              data={information}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const componentStyle = () => css`
  height: 100%;
  width: 100%;
  display: flex;

  .left-section {
    width: 100%;

    .map-container {
      height: 96%;
    }
  }

  .right-section {
    overflow: auto;
    max-width: 30rem;
  }
`;

export default Map;
