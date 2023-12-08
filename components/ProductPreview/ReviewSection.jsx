import ProductReviews from "./ProductReviews";
import WriteReview from "./WriteReview";

const ReviewSection = ({ reviews, product }) => {
  return (
    <div className="  rounded-lg  shadow-sm lg:px-6 lg:mt-10  ">
      <WriteReview reviews={reviews} product={product} />
      {reviews && <ProductReviews reviews={reviews} />}
    </div>
  );
};

export default ReviewSection;
