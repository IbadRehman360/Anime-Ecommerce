import "@styles/globals.css";
import { Toaster } from "react-hot-toast";
import Nav from "../components/Header/Header";
import Footer from "../components/Footer";
import CartOpen from "@components/CartOpen";
import Providers from "@components/Providers";
import ReduxProvider from "./Global/ReduxProvider";
import BottomStructure from "@components/BottomStructure";
import Head from "next/head";

export const metadata = {
  title: "SenpaiMerchPk",
  keywords:
    "anime merch, anime, cosplay, anime cosplay, figure, figurine, statue, dakimakura, nendoroid, funko pop, keychain, mug, t-shirt, hoodie, backpack, hat, wig, prop, replica, sword, armor, accessory, collectible, gift, convention, festival, community, fan art, doujinshi, light novel, manga, webtoon",
  description:
    "SenpaiMerchPk - Your Premier Destination for Anime Merchandise in Pakistan! Explore a World of Japanese Animation Goodies, Apparel, and Collectibles Right at Your Fingertips. Shop Now for Exclusive Deals!",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body suppressHydrationWarning={true}>
      <Providers>
        <ReduxProvider>
          <link rel="icon" href="/assets/logosenpai.webp" />
          <div className="main">
            <div className="gradient" />
          </div>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "white",
                color: "var(--color-grey-700)",
              },
            }}
          />
          <Nav />
          <main className="app">{children}</main>
          <Footer />
          <CartOpen />
          <BottomStructure />
        </ReduxProvider>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
