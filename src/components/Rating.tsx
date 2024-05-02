import { FaStar, FaStarHalf } from "react-icons/fa";

const Rating = ({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) => {
  return (
    <div className={`flex gap-[0px] items-center ${className}`}>
      {rating > 0 && rating < 0.5 ? (
        <HalfStar />
      ) : rating >= 0.5 ? (
        <FaStar className="text-[14px] text-yellow " />
      ) : (
        <FaStar className="text-[14px] text-grey " />
      )}
      {rating > 1 && rating < 1.5 ? (
        <HalfStar />
      ) : rating >= 1.5 ? (
        <FaStar className="text-[14px] text-yellow " />
      ) : (
        <FaStar className="text-[14px] text-grey " />
      )}
      {rating > 2 && rating < 2.5 ? (
        <HalfStar />
      ) : rating >= 2.5 ? (
        <FaStar className="text-[14px] text-yellow " />
      ) : (
        <FaStar className="text-[14px] text-grey " />
      )}
      {rating > 3 && rating < 3.5 ? (
        <HalfStar />
      ) : rating >= 3.5 ? (
        <FaStar className="text-[14px] text-yellow " />
      ) : (
        <FaStar className="text-[14px] text-grey " />
      )}
      {rating > 4 && rating < 4.5 ? (
        <HalfStar />
      ) : rating >= 4.5 ? (
        <FaStar className="text-[14px] text-yellow " />
      ) : (
        <FaStar className="text-[14px] text-grey " />
      )}
    </div>
  );
};

export default Rating;

const HalfStar = () => {
  return (
    <div className="relative halfStar">
      <FaStar className="text-[14px] text-grey " />
      <FaStarHalf className="absolute top-0 left-0 text-[14px] text-yellow " />
    </div>
  );
};
