import React from 'react';

const FAQSection = () => {
  return (
    <section id="faq" className="bg-gray-800 py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          {/* FAQ Item 1 */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-white mb-2">
              What kind of AI model is this?
            </h3>
            <p className="text-gray-300">
              This project uses a pre-trained generative model. The goal is to demonstrate image-to-image translation, taking an input image and generating a variation based on its features.
            </p>
          </div>
          
          {/* FAQ Item 2 */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-white mb-2">
              What technologies are used?
            </h3>
            <p className="text-gray-300">
              The front-end is built with React and Tailwind CSS. The back-end (Task 2) will use [Your Chosen Tech, e.g., Node.js/Express or Python/Flask], and the AI model (Task 3) will be a pre-trained model like [Your Chosen Model, e.g., a GAN or Diffusion model].
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-white mb-2">
              Is the authentication secure?
            </h3>
            <p className="text-gray-300">
              Yes, for Task 2, we will implement basic authentication using industry-standard practices, such as JWT (JSON Web Tokens) or session management, to protect user routes and data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;