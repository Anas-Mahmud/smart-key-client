import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className=" dark:text-gray-900">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div class="space-y-4">
            {/* Qn : 1 */}
            <details
              class="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary class="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 class="text-lg font-medium text-gray-900">
                  Q: What types of keyboards do you sell?
                </h2>

                <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p class="mt-4 leading-relaxed text-gray-700">
                We offer a wide variety of keyboards to suit different
                preferences and needs. Our selection includes mechanical
                keyboards, wireless keyboards, ergonomic keyboards, gaming
                keyboards, and more. We also carry keyboards from top brands
                like Logitech, Corsair, and Razer, as well as more
                budget-friendly options. Whether you're a gamer, a programmer,
                or just someone who wants a comfortable keyboard for everyday
                use, we've got you covered. Check out our product page to see
                our full selection and find the keyboard that's right for you.
              </p>
            </details>

            {/* Qn : 2 */}
            <details class="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 class="text-lg font-medium text-gray-900">
                  Q: Are your keyboards new or used?
                </h2>

                <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p class="mt-4 leading-relaxed text-gray-700">
                We sell both new and used keyboards, depending on the
                availability of stock. Each product listing will specify whether
                the keyboard is new or used. New keyboards come in their
                original packaging and have never been used. Used keyboards have
                been previously owned and may show some signs of wear and tear,
                but we carefully inspect and test each keyboard before listing
                it for sale to ensure it is in good working condition.
              </p>
            </details>

            {/* Qn : 3 */}
            <details class="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 class="text-lg font-medium text-gray-900">
                  Q: What condition are your used keyboards in?
                </h2>

                <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p class="mt-4 leading-relaxed text-gray-700">
                We understand that purchasing a used keyboard can be a bit
                daunting, which is why we take great care to ensure that all our
                used keyboards are in good working condition. We thoroughly
                clean and disinfect each keyboard and test it for functionality
                before listing it for sale. We also provide detailed information
                about any cosmetic or functional issues in the product listing,
                so you know exactly what to expect.
              </p>
            </details>

            {/* Qn : 4 */}
            <details class="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 class="text-lg font-medium text-gray-900">
                  Q: What payment methods do you accept?
                </h2>

                <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p class="mt-4 leading-relaxed text-gray-700">
                We accept all major credit cards, PayPal, and bank transfers.
                You can choose your preferred payment method at checkout. All
                payments are processed securely through our payment gateway to
                ensure your personal and financial information is protected.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
