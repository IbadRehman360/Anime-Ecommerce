import { RadioGroup } from "@headlessui/react";
import DeliveryMethod from "./DeliveryMethod";
import { useState } from "react";

const deliveryMethods = [
  {
    id: 1,
    title: "Standard",
    turnaround: "4–10 business days",
    price: "$5.00",
  },
  { id: 2, title: "Express", turnaround: "2–5 business days", price: "$16.00" },
];
function RadioGroups() {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0]
  );
  return (
    <div className=" border-gray-200">
      <RadioGroup
        value={selectedDeliveryMethod}
        onChange={setSelectedDeliveryMethod}
      >
        <DeliveryMethod />
      </RadioGroup>
    </div>
  );
}

export default RadioGroups;
