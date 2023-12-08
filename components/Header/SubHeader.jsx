import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function SubHeader() {
  return (
    <div className="flex h-12 items-center  justify-between px-4 sm:px-6 lg:px-8 text-[0.8rem] sm:text-sm font-medium text-white   bg-black">
      <div className="    items-center space-x-4">
        <Link
          href="https://www.instagram.com/pakistani_senpai_merch"
          className="text-white"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ fontSize: "24px", height: "18px", width: "26px" }}
          />
        </Link>
        <Link
          href="https://www.facebook.com/Pakistanisenpaimerch"
          className="text-white  sm:inline-block     hidden"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ fontSize: "24px", height: "18px", width: "26px" }}
          />
        </Link>
      </div>
      <div className="marquee-container text-xs  font-raleway tracking-wider">
        <p className="marquee   hidden sm:text-[0.82rem] md:flex  ">
          {" "}
          ⚡️ Free shipping on prepaid Orders. We provide Cash on Delivery
          service.
        </p>
        <span className="text-center  md:hidden  flex">
          {" "}
          ⚡️ Free Shipping On Prepaid Orders{" "}
        </span>
      </div>

      <div className="flex items-center sm:text-[0.82rem]  space-x-4">
        <Link
          href="/track-order
            "
          className="text-white   hidden sm:flex"
        >
          Track Order
        </Link>
        <Link
          href="https://www.instagram.com/pakistani_senpai_merch"
          className="text-white  sm:flex hidden text-xs  sm:text-[0.82rem]  justify-end items-end"
        >
          Need Help?
        </Link>
      </div>
    </div>
  );
}

export default SubHeader;
