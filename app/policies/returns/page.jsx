import Link from "next/link";
export default function ReturnPolicy() {
  return (
    <div className="   py-16 bg-gray-50  px-4 sm:px-10">
      <div className="mx-auto lg:max-w-7xl">
        <div className="bg-transparent  ">
          <div className=" ">
            <div className="  font-montserrat text-2xl">RETURN POLICY</div>
            <div className="text-sm mt-1 text-gray-500  font-semibold font-poppins">
              Last updated December 31, 2023
            </div>
          </div>

          <div className="mt-4  text-[0.9rem] font-poppins text-gray-600">
            <p>
              {" "}
              Thank you for your purchase. We hope you are happy with your
              purchase. However, if you are not completely satisfied with your
              purchase for any reason, you may return it to us for a full refund
              or an exchange. Please see below for more information on our
              return policy.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <div className=" font-montserrat text-xl">RETURNS</div>
          <div className="mt-4 text-[0.9rem] font-poppins text-gray-600">
            <p>
              All returns must be postmarked within seven (7) days of the
              purchase date. All returned items must be in new and unused
              condition, with all original tags and labels attached.{" "}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <div className="font-montserrat text-xl">RETURN PROCESS</div>
          <div className="mt-4 text-[0.9rem] font-poppins text-gray-600">
            <p>
              To return an item, please email customer service at{" "}
              <Link
                className="text-blue-500"
                href="mailto:ibadhashim4@gmail.com"
              >
                ibadhashim4@gmail.com
              </Link>{" "}
              to obtain a Return Merchandise Authorization (RMA) number. After
              receiving an RMA number, place the item securely in its original
              packaging and include your proof of purchase, then mail your
              return to the following address:{" "}
            </p>
          </div>
          <div className="mt-4  text-[0.9rem] font-poppins text-gray-600">
            Attn: Returns
            <br />
            RMA #<br />
            Tariq Bin Ziad Classic Residency Floor 3 A<br />
            Karachi, Sindh 75100
            <br />
            Pakistan
          </div>
        </div>

        <div className="mt-8">
          <div className="text-[0.9rem] font-poppins text-gray-600">
            Please note, you will be responsible for all return shipping
            charges. We strongly recommend that you use a trackable method to
            mail your return.
          </div>
        </div>

        <div className="mt-8">
          <div className="font-montserrat text-xl">REFUNDS</div>
          <div className="mt-4 text-[0.9rem] font-poppins text-gray-600">
            After receiving your return and inspecting the condition of your
            item, we will process your return or exchange. Please allow at least
            seven (7) days from the receipt of your item to process your return
            or exchange.
          </div>
        </div>

        <div className="mt-8">
          <div className="font-montserrat text-xl">EXCEPTIONS</div>
          <div className="mt-4 text-[0.9rem] font-poppins text-gray-600">
            The following items cannot be returned or exchanged:
          </div>
          <div className="mt-4 text-[0.9rem] font-poppins text-gray-600">
            ● Damaged
          </div>
          <div className="mt-4  text-[0.9rem] font-poppins text-gray-600">
            For defective or damaged products, please contact us at the contact
            details below to arrange a refund or exchange.
          </div>
        </div>

        <div className="mt-8">
          <div className="font-montserrat text-xl ">QUESTIONS</div>
          <div className="mt-4 text-[0.9rem] font-poppins text-gray-600">
            If you have any questions concerning our return policy, please
            contact us at:
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
