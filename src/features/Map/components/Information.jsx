// Libs
import React from "react";
import { css } from "emotion";
import tinycolor from "tinycolor2";

// Styles
import colors from "../../../styles/colors";

const Information = (props) => {
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
    <div
      className={`${componentStyle()} ${
        props.data.settings.showInformation ? "selected" : ""
      } `}
      onClick={props.onClick}
    >
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
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${colors.grey};
  margin-bottom: -1px;
  background-color: ${colors.white};
  cursor: pointer;

  &.selected {
    background-color: ${tinycolor(colors.white).darken(10).toString()};
    border-left: 3px solid ${colors.red}
  }

  &:hover {
    background-color: ${tinycolor(colors.white).darken(5).toString()};
  }

  tr {
    th {
      font-weight: 400;
      text-align: left;
      line-break: auto;
      line-height: 20px;

      &:first-of-type {
        font-weight: 500;
        padding-right: 0.25rem;
      }
    }
  }
`;

export default Information;
