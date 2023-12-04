import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { faBoxOpen, faHome, faShop } from "@fortawesome/free-solid-svg-icons";
import BottomCart from "./BottomCart";

async function BottomStructure() {
  const session = await getServerSession();

  return (
    <div className=" font-poppins">
      <div
        className="fixed bottom-0 py-2 bg-white w-full lg:hidden flex z-10"
        style={{ boxShadow: "0px -1px 0px rgba(0, 0, 0, 0.1)" }}
      >
        <Link
          href={"login"}
          className="flex-1 text-center  ml-4 mr-2 bg-white border border-gray-400 text-gray-500 px-3 py-1 rounded-sm"
        >
          Login
        </Link>
        <Link
          href={"register"}
          className="flex-1 text-center  mr-4 bg-red-500 text-white px-3 py-1 rounded-sm"
        >
          Sign Up
        </Link>
      </div>
      <div
        className="fixed bottom-0 text-md py-2 pt-3 bg-white w-full lg:hidden flex justify-around z-10"
        style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
      >
        <Link href={"/"} className="flex flex-col items-center">
          <FontAwesomeIcon icon={faHome} style={{ color: "gray" }} />
          <span className="text-xs mt-1.5">Home</span>
        </Link>
        <Link href={"/track-order"} className="flex flex-col items-center">
          <FontAwesomeIcon icon={faBoxOpen} style={{ color: "gray" }} />

          <span className="text-xs mt-1">Track</span>
        </Link>
        <BottomCart />
        <Link
          href={`/category/all-products`}
          className="flex flex-col items-center"
        >
          <FontAwesomeIcon icon={faShop} style={{ color: "gray" }} />

          <span className="text-xs mt-1 ">View All</span>
        </Link>
      </div>
    </div>
  );
}

export default BottomStructure;
