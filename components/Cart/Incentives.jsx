const incentives = [
  {
    name: "Free Shipping",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
  },
  {
    name: "24/7 Customer Support",
    description:
      "Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.",
    imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg",
  },
  {
    name: "Fast Shopping Cart",
    description:
      "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg",
  },
  {
    name: "Gift Cards",
    description:
      "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
  },
];

function Incentives({}) {
  return (
    <section aria-labelledby="related-heading" className="">
      <div className=" ">
        <div className="max-w-2xl mx-auto   px-4 sm:px-6   pb-28 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-12 justify-center items-center">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="text-center">
                <img
                  src={incentive.imageSrc}
                  alt=""
                  className="h-20 lg:h-24 w-auto mx-auto"
                />
                <h3 className="mt-6 text-sm font-roboto text-gray-900">
                  {incentive.name}
                </h3>
                <p className="mt-2 text-[0.85rem]   font-satoshi text-gray-5600">
                  {incentive.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Incentives;
