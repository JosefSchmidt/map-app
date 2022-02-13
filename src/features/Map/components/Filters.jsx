// Libs
import React from "react";
import { css } from "emotion";

// Styles∏
import colors from "../../../styles/colors";

const Filters = (props) => {
  return (
    <div className={`${componentStyle()} ${props.className || ""}`}>
      <input type="file" onChange={props.onFileUpload} />
    </div>
  );
};

const componentStyle = () => css`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;

  input {
    border: 1px solid ${colors.grey};
  }
`;

export default Filters;
