import ProductReviews from "./ProductReviews";
import WriteReview from "./WriteReview";

const ReviewSection = ({ reviews, product }) => {
  return (
    <div>
      <WriteReview reviews={reviews} product={product} />
      {reviews && <ProductReviews reviews={reviews} />}
    </div>
  );
};

export default ReviewSection;
