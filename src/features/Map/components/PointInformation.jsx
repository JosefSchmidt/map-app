// Libs
import React from "react";
import { css } from "emotion";

// Styles
import colors from "../../../styles/colors";

const PointInformation = (props) => {
  function formatDataValues(data) {
    let dataArray = [];

    for (let key in data) {
      if (key && data[key] && typeof data[key] != "object") {
        dataArray.push({ key, value: data[key] });
      }
    }

    return dataArray;
  }

  return (
    <div className={`${componentStyle()} ${props.className || ""}`}>
      {formatDataValues(props.data).map(({ key, value }) => (
        <tr key={key}>
          <th>{`${key}: `}</th>
          <th>{value}</th>
        </tr>
      ))}
    </div>
  );
};

const componentStyle = () => css`
  padding: 1rem;
  border-radius: 3px;
  background-color: ${colors.white};
  color: ${colors.black};
  font-size: 0.85rem;
  min-width: 15rem;
  cursor: default;
  border: 1px solid ${colors.black};
  z-index: 10;

  tr {
    th {
      font-weight: 500;
      text-align: left;
      line-height: 20px;

      &:first-of-type {
        font-weight: 500;
        padding-right: 0.25rem;
      }
    }
  }
`;

export default PointInformation;
