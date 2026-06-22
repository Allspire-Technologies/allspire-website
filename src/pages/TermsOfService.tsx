import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const TermsOfService = () => (
  <PageLayout>
    <section className="section-padding">
      <div className="container-tight">
        <AnimatedSection className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: April 6, 2026</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Allspire's website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Allspire provides digital product development, consulting, and technology services. Project scope, deliverables, and timelines are defined in individual service agreements between Allspire and the client.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">3. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website — including text, graphics, logos, and code — is the property of Allspire unless otherwise stated. Client deliverables are transferred upon full payment as outlined in the service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">4. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Allspire shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability is limited to the amount paid for the specific service in question.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">5. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                Both parties agree to maintain the confidentiality of proprietary information shared during engagements. This obligation survives the termination of any service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">6. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms are governed by applicable law. Any disputes shall be resolved through good-faith negotiation before pursuing formal legal proceedings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">7. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Questions about these terms? Contact us at{" "}
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

export default TermsOfService;
