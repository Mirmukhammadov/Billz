import "./image.css";

import useMediaQuery from "@mui/material/useMediaQuery";

function Image({ src }) {
  const lessThan730 = useMediaQuery("(max-width: 730px)");
  const between730And1100 = useMediaQuery(
    "(min-width: 731px) and (max-width: 1101px)"
  );
  const moreThan1100 = useMediaQuery("(min-width: 1101px)");

  const imageDimensions = () => {
    if (lessThan730) {
      return { width: "130", height: "150" };
    } else if (between730And1100) {
      return { width: "162", height: "190" };
    } else if (moreThan1100) {
      return { width: "244", height: "296" };
    }
  };

  const { width, height } = imageDimensions();
  return (
    <img
      src={src}
      alt=""
      className={` image `}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
}

export default Image;
