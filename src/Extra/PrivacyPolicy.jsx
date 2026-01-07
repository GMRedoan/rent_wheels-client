import { Link } from "react-router";

const PrivacyPolicy = () => {
    return (
        <section className="bg-base-200 py-20 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Privacy <span className="text-primary">Policy</span>
                    </h1>
                    <p className="mt-6 text-accent max-w-3xl mx-auto">
                        Your privacy matters to us. This policy explains how Rent Wheels
                        collects, uses, and protects your personal information.
                    </p>
                </div>

                {/* Content */}
                <div className="bg-base-100 rounded-2xl shadow-xl p-8 md:p-12 space-y-10">

                    {/* Section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            1. Information We Collect
                        </h2>
                        <p className="text-accent leading-relaxed">
                            We collect personal information such as your name, email address,
                            phone number, payment details, and booking history when you use
                            our services.
                        </p>
                    </div>

                    {/* Section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            2. How We Use Your Information
                        </h2>
                        <p className="text-accent leading-relaxed">
                            Your information is used to process bookings, improve our
                            services, communicate updates, provide customer support, and
                            ensure secure transactions.
                        </p>
                    </div>

                    {/* Section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            3. Data Protection & Security
                        </h2>
                        <p className="text-accent leading-relaxed">
                            Rent Wheels implements industry-standard security measures to
                            protect your personal data from unauthorized access, misuse, or
                            disclosure.
                        </p>
                    </div>

                    {/* Section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            4. Cookies & Tracking Technologies
                        </h2>
                        <p className="text-accent leading-relaxed">
                            We use cookies and similar technologies to enhance your browsing
                            experience, analyze usage patterns, and personalize content.
                        </p>
                    </div>

                    {/* Section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            5. Sharing of Information
                        </h2>
                        <p className="text-accent leading-relaxed">
                            We do not sell or rent your personal information. Data may be
                            shared with trusted partners only when necessary to provide
                            services or comply with legal requirements.
                        </p>
                    </div>

                    {/* Section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            6. Your Rights
                        </h2>
                        <p className="text-accent leading-relaxed">
                            You have the right to access, update, or request deletion of your
                            personal data. Please contact our support team to exercise these
                            rights.
                        </p>
                    </div>

                    {/* Section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            7. Changes to This Policy
                        </h2>
                        <p className="text-accent leading-relaxed">
                            Rent Wheels may update this Privacy Policy from time to time. Any
                            changes will be reflected on this page with an updated revision
                            date.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="border-t border-base-300 pt-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            Contact Us
                        </h2>
                        <p className="text-accent">
                            If you have any questions regarding this Privacy Policy, please
                            contact us at{" "}
                            <span className="text-primary font-medium">
                                support@rentwheels.com
                            </span>
                        </p>
                    </div>

                </div>
                <div className="text-center mt-16">
                    <Link to='/' className="btn btn-primary text-white">
                        Back to home
                    </Link>
                </div>


                <p className="text-center text-sm text-gray-500 mt-10">
                    © {new Date().getFullYear()} Rent Wheels. All rights reserved.
                </p>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
