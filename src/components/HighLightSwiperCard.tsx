const HighLightSwiperCard = ({
  width,
  color,
  name,
  img,
  link,
  index,
  currentSlide,
  numberOfSlides,
}: {
  width: number;
  color: string;
  name: string;
  img: string;
  link: string;
  index: number;
  currentSlide: number;
  numberOfSlides: number;
}) => {
  // console.log(currentSlide);
  // console.log(index);
  return (
    <div
      style={{ backgroundColor: color }}
      className={`highlightswipercard w-[80%] md:w-full h-[80%] bg-[${color}] rounded-t-[50%] transition-all duration-[300ms] ease-in-out`}
    ></div>
  );
};

export default HighLightSwiperCard;
