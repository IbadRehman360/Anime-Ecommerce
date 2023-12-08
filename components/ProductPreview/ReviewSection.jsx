import ProductReviews from "./ProductReviews";
import WriteReview from "./WriteReview";

const ReviewSection = ({ reviews, product }) => {
  return (
    <div className="lg:border lg:px-6 lg:mt-10 lg:rounded-lg">
      <WriteReview reviews={reviews} product={product} />
      {reviews && <ProductReviews reviews={reviews} />}
    </div>
  );
};

export default ReviewSection;
