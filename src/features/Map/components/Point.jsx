// Libs
import React from "react";
import { css } from "emotion";
import tinycolor from "tinycolor2";

// Components
import { HiLocationMarker } from "react-icons/hi";
import PointInformation from "./PointInformation";

// Styles
import colors from "../../../styles/colors";

function Point(props) {
  return (
    <div className={componentStyle()}>
      {props.data && props.data.settings.showInformation && (
        <PointInformation className="box" data={props.data} />
      )}
      <HiLocationMarker className="point" onClick={props.onClick} />
    </div>
  );
}

const componentStyle = () => css`
  position: relative;

  svg.point {
    fill: ${colors.red};
    height: 1.25rem;
    width: 1.25rem;
    cursor: pointer;
    transition: fill 300ms ease;

    &:hover {
      fill: ${tinycolor(colors.red).darken(10).toString()};
    }
  }

  .box {
    position: absolute;
    bottom: 100%;
    margin-bottom: 0.25rem;
  }
`;

export default React.memo(Point);
