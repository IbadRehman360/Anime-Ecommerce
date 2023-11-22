import { RadioGroup } from "@headlessui/react";
import DeliveryMethod from "./DeliveryMethod";

function RadioGroups({
  selectedDeliveryMethod,
  setSelectedDeliveryMethod,
  deliveryMethods,
  control,
}) {
  return (
    <div className=" border-gray-200">
      <RadioGroup
        value={selectedDeliveryMethod}
        onChange={setSelectedDeliveryMethod}
      >
        <DeliveryMethod
          control={control}
          selectedDeliveryMethod={selectedDeliveryMethod}
          deliveryMethods={deliveryMethods}
        />
      </RadioGroup>
    </div>
  );
}
export default RadioGroups;
