export default function ContactUsPage() {
  return (
    <div className="py-16 bg-gray-50 px-4 sm:px-10">
      <div className="mx-auto lg:max-w-7xl">
        <div className="bg-transparent">
          <div className="">
            <div className="font-montserrat uppercase text-2xl">Contact Us</div>
          </div>

          <div className="mt-8 text-[0.9rem] font-poppins text-gray-600">
            <p>
              We&apos;d love to hear from you! Whether you have a question about
              our products, an inquiry about your order, or just want to say
              hello, feel free to reach out using the following contact details:
            </p>
          </div>

          <div className="mt-8">
            <div className="font-montserrat text-xl">Contact Information</div>
            <div className="mt-4 text-[0.9rem] font-poppins text-gray-600">
              <p>
                <span className="block">Phone: 03218202052</span>
                <span className="block">Email: ibadhashim4@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="font-montserrat text-xl">Social Media</div>
            <div className="mt-4 text-[0.9rem] font-poppins text-gray-600">
              <p>
                Connect with us on social media for the latest updates,
                promotions, and more:
              </p>
              <p>
                <span className="block">
                  Instagram:{" "}
                  <a
                    className="text-blue-500"
                    href="https://www.instagram.com/pakistani_senpai_merch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @pakistani_senpai_merch
                  </a>
                </span>
                <span className="block">
                  Facebook:{" "}
                  <a
                    className="text-blue-500"
                    href="https://www.facebook.com/Pakistanisenpaimerch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pakistani Senpai Merch
                  </a>
                </span>
              </p>
            </div>
          </div>

          <div className="mt-8 text-[0.9rem] font-poppins text-gray-600">
            We look forward to connecting with you and providing any assistance
            you may need. Thank you for being a part of Senpai Merch!
          </div>
        </div>
      </div>
    </div>
  );
}
