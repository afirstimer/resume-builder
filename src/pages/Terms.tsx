import Header from "@/components/Header";

const Terms = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Navigation */}
                    <div className="lg:w-64 lg:sticky lg:top-8 lg:self-start">
                        <nav className="space-y-2">
                            <a
                                href="/terms"
                                className="block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-lg"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="/privacy"
                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                            >
                                Privacy Policy
                            </a>
                        </nav>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="prose prose-gray max-w-none">
                            <h1 className="text-4xl font-bold text-foreground mb-4">Terms and Conditions</h1>

                            <p className="text-sm text-muted-foreground mb-12">Last updated: May 28, 2025</p>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">Welcome to BetterCV</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Thanks for using our platform and trusting us with your career goals. This website and platform ("Services") are provided by BetterCV ("us", "we", or "our").
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    By using BetterCV or accessing any of our Services, you are agreeing to the following terms. Please read them carefully and contact us if you have any questions.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">Accounts</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    When you create an account on BetterCV, you are fully responsible for maintaining its security and any activities that occur under your account. Please, use a "strong" password (or authenticate via a third-party) to ensure that your private information, your resumes and billing information are safe.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    We cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    BetterCV is designed exclusively for individual job seekers. Commercial use of our platform is prohibited. Businesses interested in utilizing BetterCV's services should contact us at help@bettercv.com to establish a business account.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">Content</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    You are solely responsible for all the content you create using our Services. We may review content to determine whether it violates our policies, and we may remove content in those cases. But that does not necessarily mean that we review content, so please don't assume that we do.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">Responsible AI</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    At BetterCV, we are committed to the ethical and responsible use of Artificial Intelligence (AI) to empower our users in building outstanding, personalized resumes. While AI technologies can enhance creativity, provide content inspiration, and optimize resumes for better visibility, we believe these tools should always complement—never replace—your personal judgment and unique career story.
                                </p>

                                <h3 className="text-xl font-semibold text-foreground mb-3">How We Use AI at BetterCV</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    AI is used to suggest resume content, recommend improvements, and optimize wording based on job descriptions and market trends. These suggestions are designed to assist you in creating impactful resumes, but final content decisions always remain in your hands.
                                </p>

                                <h3 className="text-xl font-semibold text-foreground mb-3">Our Commitments to You</h3>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                                    <li><strong className="text-foreground">Transparency:</strong> We clearly indicate when AI-generated suggestions are provided, ensuring you know when content originates from AI.</li>
                                    <li><strong className="text-foreground">Privacy and Data Security:</strong> Your personal data and career information are handled with the highest standards of security, in line with our Privacy Policy. We do not sell or share your personal data with AI model providers.</li>
                                    <li><strong className="text-foreground">Fairness and Bias Mitigation:</strong> We actively monitor and refine our AI systems to minimize the risk of biased, inappropriate, or discriminatory suggestions. However, we recommend that you review all AI-generated content to ensure it accurately represents your experience and values.</li>
                                    <li><strong className="text-foreground">Human Oversight:</strong> AI is here to help spark ideas and streamline your resume-building process. You remain responsible for reviewing, editing, and approving your final resume before submission.</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-foreground mb-3">Limitations of AI</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    AI tools are not a guarantee of employment outcomes. While our AI-driven recommendations are based on data patterns and best practices, they cannot account for the full nuance of your personal experiences or the specific expectations of every employer.
                                </p>

                                <h3 className="text-xl font-semibold text-foreground mb-3">Have Questions?</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    If you have any questions about how AI is used within BetterCV, or if you'd like to share feedback, please reach out to us at help@bettercv.com.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">Subscription fees</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    BetterCV reserves the right to require payment or subscription fees for any of our Services. At the beginning of each billing period you will be automatically charged for the entire period.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    The prices may be changed at any time, upon thirty (30) day prior notice to you, which may be sent by email or posted on the website. Your use of the Services following such notification constitutes your acceptance of any new or increased charges.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Downgrading your plan may cause the loss of access to some capabilities of your Account. BetterCV does not accept any liability for such loss.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">Cancellation</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    If you no longer need our Service, for example after you have found an amazing new job, it is solely your responsibility to cancel the subscription through your billing page before the next billing date. After successful cancellation of your subscription you will receive an email confirmation.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    We are not always able to respond to cancellation requests via email, nor to issue a refund if have not canceled (unless there is evidence of a technical issue on our side that prevented you from canceling).
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">Refunds</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Any monthly fees paid hereunder are non-refundable if you have used our services during that billing period. Quarterly and Semi-annual fees are eligible for a partial pro-rated refund. For one-time payments (career counseling services or automated resume translation) we won't be able to refund once the service has been scheduled and confirmed by you.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">Trials & Discounts</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Any trial or reduced pricing (promocode) must be used within the specified time. You must cancel your account before the end of the promotional period to avoid being charged a regular fee for next billing period. We reserve the right to limit you to one trial period or a single promocode as well as to prohibit the combination of trials, promo codes, and other offers.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">Termination</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    BetterCV, in its sole discretion, has the right to terminate your account for any reason at any time. Such termination of the Services will result in the deactivation or deletion of your account and the forfeiture and relinquishment of all content in your account. In such cases, you are not eligible for any refunds.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    If you wish to terminate your account, you may do so through the Account page.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">Privacy</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Your personal information and content is governed by our Privacy Policy. By using BetterCV, you agree to our Privacy Policy.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">Limited Warranties and Liability</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    BetterCV does not make any warranty about the reliability of the Services and does not guarantee the security of user data despite best efforts. The Service is provided "AS IS" and you agree to not hold us responsible nor to seek indemnification for any damages that may arise as a result of the loss of use, data, or profits connected to the performance of the Services or failure in such performance.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We reserve the right to modify these terms at any time. If a revision is material, we will try to provide at least 15 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;