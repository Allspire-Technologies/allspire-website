import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const PrivacyPolicy = () => (
  <PageLayout>
    <section className="section-padding">
      <div className="container-tight">
        <AnimatedSection className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Effective June 6, 2026 · Last updated June 6, 2026</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              iTrova ("iTrova", "we", "our", or "us") is a business management platform owned and operated by Allspire Technologies Limited. This Privacy Policy explains how we collect, use, disclose, store, and protect personal and business information when you use the iTrova platform, website, mobile applications, and related services. By accessing or using iTrova, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            <div>
              <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>

              <h3 className="text-lg font-semibold mt-4 mb-2">Business Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">When you register for iTrova, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Business name</li>
                <li>Business address</li>
                <li>Industry type</li>
                <li>Business logo</li>
                <li>Business contact information</li>
                <li>Subscription plan information</li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">User Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">We may collect:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Job role</li>
                <li>Login credentials</li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">Operational Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">Information generated while using iTrova, including:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Products and inventory records</li>
                <li>Supplier information</li>
                <li>Invoice data</li>
                <li>Sales records</li>
                <li>Staff activity logs</li>
                <li>Reports and analytics</li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">Technical Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">We automatically collect:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Device information</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Login timestamps</li>
                <li>Usage data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">2. How We Use Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Provide and maintain the platform</li>
                <li>Process subscriptions and payments</li>
                <li>Authenticate users</li>
                <li>Generate reports and analytics</li>
                <li>Improve platform functionality</li>
                <li>Provide customer support</li>
                <li>Prevent fraud and unauthorized access</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">3. AI Features</h2>
              <p className="text-muted-foreground leading-relaxed">
                Where AI-powered insights are provided, business data may be processed to generate recommendations, reports, forecasts, and operational insights. We do not sell customer business data to third parties. AI-generated recommendations should be considered advisory only and should not replace professional business, financial, or legal judgment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">4. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                We do not sell customer data. We may share information with:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Cloud infrastructure providers</li>
                <li>Payment processors</li>
                <li>Email and communication service providers</li>
                <li>Analytics providers</li>
                <li>Government authorities when legally required</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                All third-party providers are required to maintain appropriate security standards.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                We implement reasonable administrative, technical, and organizational safeguards including:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Encrypted data transmission</li>
                <li>Secure authentication systems</li>
                <li>Role-based access controls</li>
                <li>Database security controls</li>
                <li>Activity monitoring and logging</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                No system is completely secure and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">6. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain customer data while accounts remain active. Upon account termination, data may be retained for legal, regulatory, backup, and security purposes for a reasonable period before permanent deletion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">7. User Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">Subject to applicable laws, users may:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Access their information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of personal data</li>
                <li>Request data portability</li>
                <li>Object to certain processing activities</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Requests may be submitted to{" "}
                <a href="mailto:privacy@allspire.tech" className="text-primary hover:underline">
                  privacy@allspire.tech
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">8. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                We may use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Maintain sessions</li>
                <li>Improve performance</li>
                <li>Analyze usage</li>
                <li>Enhance user experience</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Users may control cookie preferences through browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">9. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                iTrova is intended for business users and is not directed toward individuals under 18 years of age.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">10. International Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Where data is processed outside Nigeria, we will take reasonable steps to ensure adequate protection consistent with applicable data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">11. Changes to this Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Updated versions will be published on our website and platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Allspire Technologies Limited<br />
                Email:{" "}
                <a href="mailto:hello@allspire.tech" className="text-primary hover:underline">
                  hello@allspire.tech
                </a>
                <br />
                For privacy-related concerns, users may contact us using the details above.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </PageLayout>
);

export default PrivacyPolicy;
