"use client";
import Clintly from "./Clintly";
import { signOut, useSession } from "next-auth/react";
import { selectCartItems } from "@app/Global/Features/cartSlice";
import { useSelector } from "react-redux";
import { BsShop, BsBag, BsGrid, BsPeople, BsGrid3X3 } from "react-icons/bs";
import Nav from "./Nav";
import SubHeader from "./SubHeader";
import HeaderTransition from "./HeaderTransition";
import { useState } from "react";

export default function Example() {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector(selectCartItems);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="bg-white">
      <HeaderTransition
        setOpen={setOpen}
        open={open}
        navigation={navigation}
        session={session}
      />
      <header className="relative bg-white">
        <SubHeader />
        <Nav
          signOut={signOut}
          setOpen={setOpen}
          session={session}
          cartItems={cartItems}
          isCartOpen={isCartOpen}
        />

        <Clintly navigation={navigation} />
      </header>
    </div>
  );
}
var navigation = {
  categories: [
    {
      id: "category",
      name: "SHOP ALL",
      icon: <BsShop size={20} />,
      featured: [
        {
          name: "View All Accessories",
          href: "/category/accessories",
          imageSrc:
            "https://m.media-amazon.com/images/I/61GBHLWoreL._AC_SX679_.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",

          buttonMsg: "Shop Now !!",
          buttonTitle: " All Accessories",
        },
        {
          name: "For Customized Order",
          href: "https://www.instagram.com/pakistani_senpai_merch",
          imageSrc: "/assets/Des/1.jpeg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
          buttonMsg: "View Now 🤍",
          buttonTitle: "Instagram Page",
        },
      ],
      sections: [
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Bracelet", id: "654cc9b672d1fa8b7fc1316b" },
            { name: "Necklace", id: "654cc9b672d1fa8b7fc1316d" },
            { name: "Keychain", id: "654cc9b772d1fa8b7fc13175" },
            { name: "Ring", id: "654cc9b872d1fa8b7fc13179" },
            { name: "Earrings", id: "654cc9b872d1fa8b7fc13177" },
            { name: "Wallet", id: "654cc9b872d1fa8b7fc1317b" },
            { name: "Mask", id: "6569ca03a9d2fde50b0ac578" },
          ],
        },
        {
          id: "Anime Related",
          name: "Otaku Haven",
          items: [
            { name: "Figurines", id: "654cc9b872d1fa8b7fc1317d" },
            { name: "Manga", id: "654cc9b972d1fa8b7fc1317f" },
            { name: "Cosplay Costumes", id: "654cc9b972d1fa8b7fc13183   " },
            { name: "Plush Toys", id: "654cc9ba72d1fa8b7fc13185" },
            { name: "Body Pillows", id: "6569ca4ea9d2fde50b0ac57b" },
            { name: "HeadBands", id: "6569ca09a9d2fde50b0ac579" },
          ],
        },
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Costumes", id: "654cc9b972d1fa8b7fc13183   " },
            { name: "Clothes", id: "654cc9b672d1fa8b7fc1316f" },
            { name: "Hoodie", id: "654cc9b772d1fa8b7fc13171" },
            { name: "T-shirt", id: "654cc9b772d1fa8b7fc13173" },
            { name: "Mufflers", id: "6569c96fa9d2fde50b0ac576" },
          ],
        },
        {
          id: "Decor",
          name: "Decor",
          items: [
            {
              name: "Wallpaper",
              id: "6569c904a9d2fde50b0ac573",
            },
            {
              name: "Lamps",
              id: "6569c8fda9d2fde50b0ac572",
            },
            {
              name: "Wall Scrolls",
              id: "6569c908a9d2fde50b0ac574",
            },
            {
              name: "Flags",
              id: "6569c93ba9d2fde50b0ac575",
            },
            {
              name: "Stickers and Decals",
              id: "654cc9b972d1fa8b7fc13181",
            },
          ],
        },
      ],
    },
  ],
  category: [
    {
      name: "SHOP BY ANIME",
      href: "#",
      icon: <BsBag size={20} />,
      list: [
        {
          name: "Naruto",
          id: "654cc5ce72d1fa8b7fc130f3",
        },
        {
          name: "One Piece",
          id: "654cc5ce72d1fa8b7fc130f5",
        },
        {
          name: "Dragon Ball",
          id: "654cc5cf72d1fa8b7fc130f7",
        },
        {
          name: "Attack On Titan",
          id: "654cc5cf72d1fa8b7fc130f9",
        },
        {
          name: "My Hero Academia",
          id: "654cc5cf72d1fa8b7fc130fb",
        },
        {
          name: "Death Note",
          id: "654cc5d072d1fa8b7fc130fd",
        },
        {
          name: "FullMetal Alchemist",
          id: "654cc5d072d1fa8b7fc130ff",
        },
        {
          name: "Sword Art Online",
          id: "654cc5d072d1fa8b7fc13101",
        },
        {
          name: "Demon Slayer",
          id: "654cc5d072d1fa8b7fc13103",
        },
        {
          name: "Hunter x Hunter",
          id: "654cc5d172d1fa8b7fc13105",
        },
        {
          name: "One Punch Man",
          id: "654cc5d272d1fa8b7fc1310b",
        },
        {
          name: "Bleach",
          id: "654cc5d272d1fa8b7fc1310d",
        },
        {
          name: "Fairy Tail",
          id: "654cc5d272d1fa8b7fc1310f",
        },
        {
          name: "Tokyo Ghoul",
          id: "654cc5d272d1fa8b7fc13111",
        },
        {
          name: "JoJo Bizarre Adven",
          id: "654cc5d372d1fa8b7fc13115",
        },
        {
          name: "Black Clover",
          id: "654cc5d372d1fa8b7fc13117 ",
        },
        {
          name: "Haiykuu",
          id: "654cc5d572d1fa8b7fc13123",
        },
        {
          name: "Seven Deadly Sins",
          id: "654cc5d572d1fa8b7fc13125",
        },
        {
          name: "Gintama",
          id: "654cc5d772d1fa8b7fc1312f",
        },
        {
          name: "Vinland Saga",
          id: "654cc5d872d1fa8b7fc13139",
        },
        {
          name: "Tokyo Revengers",
          id: "6569bdd0a9d2fde50b0ac56e",
        },
        {
          name: "Jujutsu Kaisen",
          id: "6569bdeda9d2fde50b0ac56f",
        },
      ],
    },
    {
      name: "SHOP BY DECOR",
      href: "#",
      icon: <BsPeople size={20} />,
      list: [
        {
          name: "Wallpaper",
          id: "6569c904a9d2fde50b0ac573",
        },
        {
          name: "Lamps",
          id: "6569c8fda9d2fde50b0ac572",
        },
        {
          name: "Wall Scrolls",
          id: "6569c908a9d2fde50b0ac574",
        },
        {
          name: "Flags",
          id: "6569c93ba9d2fde50b0ac575",
        },
      ],
    },
  ],
  pages: [
    {
      name: "ACCESSORIES",
      href: "/category/accessories",
      icon: <BsGrid size={20} />,
    },
    {
      name: "ALL PRODUCTS ",
      href: "/category/all-products",
      icon: <BsGrid3X3 size={18} />,
    },
  ],
};
