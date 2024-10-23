// src/components/PricingPlans.js
import React, { useState } from 'react';

// Sample pricing data
const pricingPlans = [
  {
    title: 'Basic',
    price: '$19/month',
    features: ['5 Projects', 'Basic Analytics', 'Email Support'],
    buttonLabel: 'Choose Basic',
    popular: false,
  },
  {
    title: 'Pro',
    price: '$49/month',
    features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support'],
    buttonLabel: 'Choose Pro',
    popular: true, // Highlight the most popular plan
  },
  {
    title: 'Enterprise',
    price: 'Contact us',
    features: ['Custom Solutions', 'Dedicated Account Manager', '24/7 Support'],
    buttonLabel: 'Choose Enterprise',
    popular: false,
  },
];

const PricingPlans = () => {
  // State to keep track of the selected plan
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-8 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg p-8 text-center transform transition-transform ${
                selectedPlan === index ? 'border-4 border-indigo-500' : ''
              }`}
              onClick={() => setSelectedPlan(index)} // Set selected plan on click
            >
              {plan.popular && (
                <p className="text-white bg-indigo-500 inline-block py-1 px-3 rounded-full text-sm mb-4">
                  Most Popular
                </p>
              )}
              <h3 className="text-2xl font-semibold">{plan.title}</h3>
              <p className="text-gray-500 text-lg my-4">{plan.price}</p>
              <ul className="text-gray-700 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="mb-2">
                    • {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600">
                {plan.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;