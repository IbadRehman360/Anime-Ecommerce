import { useProductUtils } from "@utils/productUtils";
import FormInput from "./FormInputs";

function InputForm({ control }) {
  const { isValidPhoneNumber } = useProductUtils();

  return (
    <>
      <h2 className="text-xl    font-medium text-gray-900">
        Shipping information
      </h2>
      <div className="mt-4  grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-4">
        <FormInput
          id="first_name"
          label="First name"
          name="first_name"
          type="text"
          autoComplete="given-name"
          rules={{ required: "First name is required" }}
          control={control}
        />

        <div>
          <FormInput
            label="Last name"
            name="last_name"
            id="last_name"
            type="text"
            autoComplete="family-name"
            rules={{ required: "Last name is required" }}
            control={control}
          />
        </div>

        <div className="sm:col-span-2">
          <FormInput
            label="Address"
            name="address"
            type="text"
            id="address"
            autoComplete="street-address"
            rules={{ required: "Address is required" }}
            control={control}
          />
        </div>

        <div className="sm:col-span-2">
          <FormInput
            label="Apartment, suite, etc."
            name="apartment"
            type="text"
            id="apartment"
            autoComplete="street-address"
            rules={{ required: "Apartment is required" }}
            control={control}
          />
        </div>

        <div>
          <FormInput
            label="City"
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
            rules={{ required: "City is required" }}
            control={control}
          />
        </div>

        <div>
          <FormInput
            label="Pakistan"
            name="country"
            id={"country"}
            type="select"
            autoComplete="country-name"
            control={control}
          >
            <option value="Pakistan">Pakistan</option>
          </FormInput>
        </div>

        <div>
          <div className="sm:col-span-2">
            <FormInput
              label="Phone Number (Required +92)"
              name="phone"
              type="number"
              id="phone"
              autoComplete="tel"
              rules={{
                required: "Primary phone number is required",
              }}
              control={control}
            />
          </div>
        </div>
        <div>
          <div className="sm:col-span-2">
            <FormInput
              label="Phone Number (Optional +92)"
              name="secondPhone"
              type="number"
              id={"secondPhone"}
              autoComplete="tel"
              rules={{}}
              control={control}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default InputForm;
