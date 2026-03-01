import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | Stumigo",
    description:
        "Stumigo privacy policy - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
            {/* Header Bar */}
            <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-[#222]">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-sm text-[#888] hover:text-white transition-colors flex items-center gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                    <span className="text-xs text-[#555] font-mono">
                        Effective: 28/02/2026
                    </span>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 pt-20 pb-12">
                    <div className="inline-block mb-4 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-medium tracking-wider uppercase">
                        Legal
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-[#888] text-lg max-w-2xl">
                        Your privacy matters to us. This policy explains how Stumigo
                        collects, uses, and protects your personal information.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-4xl mx-auto px-6 pb-24">
                <div className="space-y-10">
                    {/* Section 1 */}
                    <div className="group rounded-2xl border border-[#222] bg-[#111] p-6 md:p-8 hover:border-[#333] transition-colors">
                        <div className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-bold">
                                1
                            </span>
                            <div>
                                <h2 className="text-xl font-semibold mb-3">Introduction</h2>
                                <p className="text-[#aaa] leading-relaxed">
                                    Stumigo is a student admission assistance platform that allows
                                    students to browse colleges and courses, submit applications,
                                    and receive admission support from our agency team. We comply
                                    with applicable Indian laws including the Information
                                    Technology Act, 2000 and the Digital Personal Data Protection
                                    Act, 2023.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="group rounded-2xl border border-[#222] bg-[#111] p-6 md:p-8 hover:border-[#333] transition-colors">
                        <div className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-bold">
                                2
                            </span>
                            <div>
                                <h2 className="text-xl font-semibold mb-3">
                                    Information We Collect
                                </h2>
                                <ul className="space-y-2 text-[#aaa]">
                                    {[
                                        "Full Name, Phone Number, Email Address",
                                        "Date of Birth, Address",
                                        "Educational Qualifications and Academic Records",
                                        "Marksheets / Certificates / ID Documents (if required)",
                                        "Email OTP verification data",
                                        "Application submission history",
                                        "Device, IP address and usage data",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="group rounded-2xl border border-[#222] bg-[#111] p-6 md:p-8 hover:border-[#333] transition-colors">
                        <div className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-bold">
                                3
                            </span>
                            <div>
                                <h2 className="text-xl font-semibold mb-3">
                                    Purpose of Data Collection
                                </h2>
                                <ul className="space-y-2 text-[#aaa]">
                                    {[
                                        "Account creation and management",
                                        "Identity verification via OTP",
                                        "Processing and forwarding applications",
                                        "Sharing with colleges (with consent)",
                                        "Admission guidance and updates",
                                        "Legal compliance",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="group rounded-2xl border border-[#222] bg-[#111] p-6 md:p-8 hover:border-[#333] transition-colors">
                        <div className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-bold">
                                4
                            </span>
                            <div>
                                <h2 className="text-xl font-semibold mb-3">Consent</h2>
                                <p className="text-[#aaa] leading-relaxed">
                                    By registering and submitting information, you provide consent
                                    for data processing and sharing with colleges where you apply.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 5 */}
                    <div className="group rounded-2xl border border-[#222] bg-[#111] p-6 md:p-8 hover:border-[#333] transition-colors">
                        <div className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-bold">
                                5
                            </span>
                            <div>
                                <h2 className="text-xl font-semibold mb-3">Data Sharing</h2>
                                <p className="text-[#aaa] leading-relaxed">
                                    Information may be shared with internal admission teams,
                                    partner colleges, technology service providers, or authorities
                                    if legally required.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 6 */}
                    <div className="group rounded-2xl border border-[#222] bg-[#111] p-6 md:p-8 hover:border-[#333] transition-colors">
                        <div className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-bold">
                                6
                            </span>
                            <div>
                                <h2 className="text-xl font-semibold mb-3">Data Security</h2>
                                <p className="text-[#aaa] leading-relaxed">
                                    We implement SSL encryption, secure hosting, OTP
                                    authentication, and restricted staff access.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 7 */}
                    <div className="group rounded-2xl border border-[#222] bg-[#111] p-6 md:p-8 hover:border-[#333] transition-colors">
                        <div className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-bold">
                                7
                            </span>
                            <div>
                                <h2 className="text-xl font-semibold mb-3">Data Retention</h2>
                                <p className="text-[#aaa] leading-relaxed">
                                    Data is retained until completion of admission process or as
                                    required by law. Users may request deletion.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 8 */}
                    <div className="group rounded-2xl border border-[#222] bg-[#111] p-6 md:p-8 hover:border-[#333] transition-colors">
                        <div className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-bold">
                                8
                            </span>
                            <div>
                                <h2 className="text-xl font-semibold mb-3">User Rights</h2>
                                <p className="text-[#aaa] leading-relaxed">
                                    Users may request access, correction, deletion, or withdrawal
                                    of consent.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 9 - Contact */}
                    <div className="group rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent p-6 md:p-8">
                        <div className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold">
                                9
                            </span>
                            <div>
                                <h2 className="text-xl font-semibold mb-3">
                                    Contact Information
                                </h2>
                                <div className="space-y-3 text-[#aaa]">
                                    <div className="flex items-center gap-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-blue-400"
                                        >
                                            <rect
                                                width="20"
                                                height="16"
                                                x="2"
                                                y="4"
                                                rx="2"
                                            />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                        <a
                                            href="mailto:info@gloriaglobalventures.com"
                                            className="hover:text-blue-400 transition-colors"
                                        >
                                            info@gloriaglobalventures.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-blue-400"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                        <a
                                            href="tel:9113856008"
                                            className="hover:text-blue-400 transition-colors"
                                        >
                                            9113856008
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#222] py-8">
                <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#555]">
                    <p>© 2026 Stumigo. All rights reserved.</p>
                    <Link
                        href="/"
                        className="hover:text-white transition-colors"
                    >
                        Return to Home
                    </Link>
                </div>
            </footer>
        </main>
    );
}
