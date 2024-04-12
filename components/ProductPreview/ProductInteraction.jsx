"use client";
import ProductBtn from "./QuantityBtnCart";
import ProductColor from "./ProductColor";
import ProductSizes from "./ProductSizes";

function ProductInteraction({
  product,
  selectedColor,
  setSelectedColor,
  setSelectedSize,
  selectedSize,
}) {
  const getPriceInfo = () => {
    let priceInfo = {};

    if (product.stock.colorswithsize) {
      const colorInfo = product.stock.colorswithsize[selectedColor] || {};
      priceInfo = colorInfo[selectedSize] || {};
    } else if (product.stock.sizes) {
      priceInfo = product.stock.sizes[selectedSize] || {};
    } else if (product.stock.colors) {
      priceInfo = product.stock.colors[selectedColor] || {};
    } else {
      priceInfo = product.stock;
    }

    return priceInfo;
  };

  const { price, discount_price, quantity } = getPriceInfo();

  return (
    <form
      className={` border-t ${
        setSelectedSize && selectedSize && "pt-6"
      }   "pt-6"     ${!selectedColor && !selectedSize ? "" : "pt-6"} `}
    >
      <div className={`${!selectedColor ? "hidden" : "flex"} `}>
        <ProductColor
          product={product}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedSize={selectedSize}
        />
      </div>
      <div className={`${!selectedSize ? "hidden" : "grid"} `}>
        <ProductSizes
          product={product}
          selectedColor={selectedColor}
          setSelectedSize={setSelectedSize}
          selectedSize={selectedSize}
        />{" "}
      </div>
      <div>
        <ProductBtn
          product={product}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          currentItemQtyAvaialable={quantity}
          price={price}
          discount_price={discount_price}
        />
      </div>
    </form>
  );
}

export default ProductInteraction;
