// Libs

// Components
import Map from "./features/Map/Map";
import { css } from "emotion";

function App() {
  return (
    <div className={componentStyle()}>
      <Map />
    </div>
  );
}

const componentStyle = () => css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  html {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Roboto", serif;
  }

  p {
    margin: 0;
    padding: 0;
  }
`;

export default App;
