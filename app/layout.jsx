import "@styles/globals.css";

import Nav from "../components/Header";
import Footer from "../components/Footer";
import CartOpen from "@components/CartOpen";

export const metadata = {
  title: "SenpaiMerch",
  description:
    "SenpaiMerch - Your Premier Destination for Anime Merchandise in Pakistan! Explore a World of Japanese Animation Goodies, Apparel, and Collectibles Right at Your Fingertips. Shop Now for Exclusive Deals!",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      {/* <Provider> */}
      <div className="main">
        <div className="gradient" />
      </div>

      <Nav />
      <main className="app">{children}</main>
      <Footer />
      <CartOpen />
    </body>
  </html>
);

export default RootLayout;
