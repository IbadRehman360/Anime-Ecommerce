import TrustListItem from "./TrustLIstItems";

export default function TrustListSvgs() {
  return (
    <div className="grid grid-cols-1 border-t pt-8 grid-rows-3 pb-10 gap-6 px-4">
      <TrustListItem
        icon={
          <svg
            fill="none"
            focusable="false"
            width="29"
            height="24"
            className="icon text-gray-600 icon--picto-fast-delivery product-tabs__trust-icon"
            viewBox="0 0 29 24"
          >
            <path
              d="M4 3H20V8M20 17H11.68C11.68 17 11 16 10 16M20 17V8M20 17H22.32M20 8H26.5L28 12.5V17H25.68C25.68 17 25 16 24 16M24 16C25 16 26 17 26 18C26 19 25 20 24 20C23 20 22 19 22 18C22 17.6527 22.1206 17.3054 22.32 17M24 16C23.3473 16 22.6946 16.426 22.32 17M10 16C11 16 12 17 12 18C12 19 11 20 10 20C9 20 8 19 8 18C8 17.6527 8.12061 17.3054 8.31996 17M10 16C9.3473 16 8.69459 16.426 8.31996 17M8.31996 17H4M10 12H3M10 8H1"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        }
        text="Fast Delivery"
      />

      <TrustListItem
        icon={
          <svg
            fill="none"
            focusable="false"
            width="32"
            height="24"
            className="icon icon--picto-return-box text-gray-600 product-tabs__trust-icon"
            viewBox="0 0 32 24"
          >
            <path
              d="M20 21L29 17.1429V6.85714M20 21L11 17.1429V16M20 21V10.7143M29 6.85714L20 3L11 6.85714M29 6.85714L20 10.7143M11 6.85714L20 10.7143M11 6.85714V10"
              stroke="currentColor"
              stroke-width="2"
            ></path>
            <path
              d="M13 13L2 13M2 13L7.2 18.2M2 13L7.2 7.79998"
              stroke="currentColor"
              stroke-width="2"
            ></path>{" "}
          </svg>
        }
        text="Easy Returns"
      />

      <TrustListItem
        icon={
          <svg
            fill="none"
            focusable="false"
            width="24"
            height="24"
            className="icon icon--picto-secure-payment text-gray-600 product-tabs__trust-icon"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 18H1V6M4 18V16H6M4 18V22H11V18M6 16C6 15.6667 6 15.3 6 14.5C6 13.5 6.73438 13 7.5 13C8.26562 13 9 13.5 9 14.5C9 15.3 9 15.6667 9 16M6 16H9M9 16H11V18M11 18H23V6M1 6V2H23V6M1 6H23M9 10H5M19 10V14H13V10H19Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </svg>
        }
        text="Secure Products"
      />
    </div>
  );
}
