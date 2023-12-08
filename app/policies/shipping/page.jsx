import Link from "next/link";

function page() {
  return (
    <div className="   py-16 bg-gray-50  px-4 sm:px-10">
      <div className="mx-auto lg:max-w-7xl">
        <div className="bg-transparent  ">
          <div className=" ">
            <div className="  font-montserrat uppercase text-2xl">
              Delivery Policy
            </div>
            <div className="text-sm mt-1 text-gray-500  font-semibold font-poppins">
              Last updated December 31, 2023
            </div>
          </div>

          <div className="mt-4  text-[0.9rem] font-poppins text-gray-600">
            <p>
              Thank you for choosing us for your purchase. We strive to ensure a
              smooth and timely delivery process. If you have any concerns or
              inquiries regarding our delivery policy, please refer to the
              information below.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <div className=" font-montserrat text-xl">DELIVERY TIMELINE</div>
          <div className="mt-4 text-[0.9rem] font-poppins text-gray-600">
            <p>
              Our standard delivery timeframe is within seven (7) days of the
              purchase date. Please note that delivery times may vary based on
              your location and other factors.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <div className="font-montserrat text-xl">DELIVERY PROCESS</div>
          <div className="mt-4 text-[0.9rem] font-poppins text-gray-600">
            <p>
              To track your order or inquire about the delivery status, please
              email our customer service at{" "}
              <Link
                className="text-blue-500"
                href="mailto:ibadhashim4@gmail.com"
              >
                ibadhashim4@gmail.com
              </Link>{" "}
              and provide your order details.
            </p>
          </div>

          <div className="mt-4  text-[0.9rem] font-poppins text-gray-600">
            If you have any special delivery instructions or requests, kindly
            inform our customer service when contacting them.
          </div>
        </div>

        <div className="mt-8">
          <div className="text-[0.9rem] font-poppins text-gray-600">
            Please note that any delivery charges incurred will be communicated
            to you during the checkout process.
          </div>
        </div>
        <div className="mt-8">
          <div className="font-montserrat text-xl"> TRACKING INFORMATION?</div>
          <div className="mt-4 text-[0.9rem] font-poppins text-gray-600">
            Yes, you will receive an email once your order ships that contain
            your tracking information. If you haven’t received tracking info
            within 3 days, please contact us.{" "}
            <Link className="text-blue-500" href="/track-order">
              Contact us on Instagram for more details
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <div className="font-montserrat text-xl">ISSUES WITH DELIVERY</div>
          <div className="mt-4 text-[0.9rem] font-poppins text-gray-600">
            If you encounter any issues with the delivery of your order, please
            contact us immediately at the following details:
          </div>
          <div className="mt-2 text-[0.9rem] font-poppins text-gray-600">
            <span className="block">Phone: 03218202052</span>
            <span className="block">Email: ibadhashim4@gmail.com</span>
          </div>
        </div>

        <div className="mt-8 text-[0.9rem] font-poppins text-gray-600">
          For more information, feel free to reach out to us via social media.
          Connect with us on Instagram for detailed inquiries and updates.
          <Link
            className="text-blue-500"
            href="https://www.instagram.com/pakistani_senpai_merch"
          >
            {" "}
            Contact us on Instagram for more details
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

export default page;
