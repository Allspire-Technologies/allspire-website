import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const PrivacyPolicy = () => (
  <PageLayout>
    <section className="section-padding">
      <div className="container-tight">
        <AnimatedSection className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: April 6, 2026</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly, such as your name, email address, and message content when you use our contact form. We also collect technical data like browser type, device information, and usage patterns through cookies and analytics tools.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information helps us respond to inquiries, improve our services, send relevant communications, and maintain the security of our platform. We do not sell your personal data to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">3. Data Storage & Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your data, including encryption in transit and at rest. Data is stored on secure servers with restricted access controls.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">4. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use essential cookies for site functionality and analytics cookies to understand how visitors interact with our website. You can manage cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise these rights, contact us at hello@allspire.tech.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">6. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related questions, reach out to us at{" "}
                <a href="mailto:hello@allspire.tech" className="text-primary hover:underline">
                  hello@allspire.tech
                </a>.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </PageLayout>
);

export default PrivacyPolicy;
