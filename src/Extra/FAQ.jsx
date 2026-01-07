import { Link } from "react-router";

const FAQ = () => {
  const faqs = [
    {
      q: "How do I rent a car from Rent Wheels?",
      a: "Simply browse available cars, choose your preferred vehicle, select rental dates, and complete the booking online. It’s fast and hassle-free.",
    },
    {
      q: "What documents are required to rent a car?",
      a: "You’ll need a valid driving license, a government-issued ID, and a valid payment method at the time of booking.",
    },
    {
      q: "Can I cancel or modify my booking?",
      a: "Yes. You can cancel or modify your booking from your dashboard. Free cancellation is available within the allowed time window.",
    },
    {
      q: "Are there any hidden charges?",
      a: "No. Rent Wheels follows transparent pricing. All charges are clearly shown before you confirm your booking.",
    },
    {
      q: "Is customer support available 24/7?",
      a: "Absolutely. Our support team is available 24/7 to assist you with bookings, cancellations, or emergencies.",
    },
    {
      q: "Do you offer long-term rentals?",
      a: "Yes. We offer discounted rates for weekly and monthly rentals. Contact support for custom plans.",
    },
  ];

  return (
    <section className="bg-base-200 py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="mt-6 text-accent max-w-2xl mx-auto">
            Everything you need to know about renting with Rent Wheels.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-xl shadow-sm"
            >
              <input type="checkbox" />

              <div className="collapse-title text-lg md:text-xl font-medium">
                {item.q}
              </div>

              <div className="collapse-content text-accent leading-relaxed">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to='/'  className="btn btn-primary text-white">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
