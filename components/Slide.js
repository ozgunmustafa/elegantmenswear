import Slider from "react-slick";

const Slide = ({ children, settings }) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default Slide;
