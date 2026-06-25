import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const DataProcessingAgreement = () => (
  <PageLayout>
    <section className="section-padding">
      <div className="container-tight">
        <AnimatedSection className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Processing Agreement</h1>
          <p className="text-muted-foreground mb-8">Effective June 6, 2026 · Last updated June 6, 2026</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              This Data Processing Agreement ("DPA") forms part of the Terms of Service between Allspire Technologies Limited, owner and operator of iTrova ("Processor", "iTrova", "we", "us"), and the customer organization using the iTrova platform ("Controller", "Customer", "you"). This DPA governs the processing of Personal Data and Business Data in connection with the Customer's use of the iTrova platform.
            </p>

            <div>
              <h2 className="text-2xl font-semibold mb-3">1. Purpose</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                The purpose of this DPA is to define the responsibilities of both parties regarding the collection, processing, storage, transfer, and protection of Personal Data processed through iTrova. This DPA is intended to support compliance with:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Nigerian Data Protection Act (NDPA) 2023</li>
                <li>Applicable data protection regulations</li>
                <li>Any other relevant privacy laws applicable to the Customer</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">2. Definitions</h2>

              <h3 className="text-lg font-semibold mt-4 mb-2">Controller</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Customer who determines the purpose and means of processing Personal Data.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Processor</h3>
              <p className="text-muted-foreground leading-relaxed">
                Allspire Technologies Limited, acting through the iTrova platform, which processes Personal Data on behalf of the Customer.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Personal Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Any information relating to an identified or identifiable individual. Examples include:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Names</li>
                <li>Email addresses</li>
                <li>Phone numbers</li>
                <li>Employee records</li>
                <li>Supplier contact details</li>
                <li>Customer contact information</li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">Business Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Any operational data stored within iTrova including:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Inventory records</li>
                <li>Product information</li>
                <li>Supplier information</li>
                <li>Invoices</li>
                <li>Sales transactions</li>
                <li>Reports</li>
                <li>Staff activity logs</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">3. Scope of Processing</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                iTrova processes Customer Data solely for the purpose of providing the Services. Processing activities may include:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Storage</li>
                <li>Organization</li>
                <li>Analysis</li>
                <li>Retrieval</li>
                <li>Reporting</li>
                <li>Backup and recovery</li>
                <li>Security monitoring</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                iTrova shall not process Customer Data for any unrelated purpose without authorization.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">4. Customer Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">The Customer agrees to:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Obtain all necessary consents required by law</li>
                <li>Ensure the lawful collection of Personal Data</li>
                <li>Maintain accuracy of uploaded information</li>
                <li>Configure user permissions appropriately</li>
                <li>Notify iTrova of any legal restrictions affecting processing</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                The Customer remains the owner and controller of all Customer Data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">5. Processor Obligations</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">iTrova shall:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Process data only on documented instructions from the Customer</li>
                <li>Maintain appropriate security controls</li>
                <li>Restrict access to authorized personnel only</li>
                <li>Implement reasonable safeguards against unauthorized access</li>
                <li>Maintain confidentiality obligations for employees and contractors</li>
                <li>Assist Customers in responding to lawful data requests where reasonably possible</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">6. Data Security Measures</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                iTrova maintains reasonable technical and organizational safeguards including:
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Access Controls</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Role-based permissions</li>
                <li>Authentication controls</li>
                <li>Session management</li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">Infrastructure Security</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Secure cloud hosting</li>
                <li>Encrypted data transmission</li>
                <li>Firewall protections</li>
                <li>Monitoring and logging</li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">Operational Security</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Access restriction policies</li>
                <li>Incident response procedures</li>
                <li>Backup and recovery processes</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                While iTrova implements reasonable safeguards, no system can guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">7. Subprocessors</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                The Customer authorizes iTrova to engage trusted subprocessors necessary to operate the platform. Examples may include:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Cloud hosting providers</li>
                <li>Authentication providers</li>
                <li>Email delivery services</li>
                <li>Payment processors</li>
                <li>Analytics services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                iTrova shall take reasonable steps to ensure subprocessors maintain appropriate security standards.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">8. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Customer Data may be processed in jurisdictions outside Nigeria where cloud infrastructure providers operate. Where international transfers occur, iTrova will take reasonable measures to ensure adequate protection of Customer Data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">9. Data Subject Requests</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Where applicable, iTrova shall provide reasonable assistance to Customers responding to requests relating to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Access</li>
                <li>Correction</li>
                <li>Deletion</li>
                <li>Portability</li>
                <li>Restriction of processing</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                The Customer remains primarily responsible for responding to such requests.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">10. Security Incident Notification</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                In the event of a confirmed security incident affecting Customer Data, iTrova shall:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Investigate the incident</li>
                <li>Take reasonable steps to mitigate risks</li>
                <li>Notify affected Customers without undue delay where required by law</li>
                <li>Provide available information regarding the nature and impact of the incident</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Notification does not constitute an admission of fault or liability.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">11. Data Retention and Deletion</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Customer Data shall be retained during the active subscription period. Upon account termination:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Customers may request export of their data</li>
                <li>Certain records may be retained for legal, security, audit, billing, or backup purposes</li>
                <li>Data will be deleted according to iTrova's retention policies and applicable legal requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">12. Audit Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Upon reasonable written request and no more than once annually, Customers may request information regarding iTrova's security and privacy controls. iTrova may satisfy such requests through:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Security questionnaires</li>
                <li>Compliance documentation</li>
                <li>Policy reviews</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Requests must not compromise platform security or other customers' confidentiality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">13. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Both parties agree to maintain the confidentiality of all non-public information exchanged under this Agreement. Confidential information shall not be disclosed except:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>With written consent</li>
                <li>To authorized personnel with a legitimate need to know</li>
                <li>Where required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">14. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Liability under this DPA shall be subject to the limitations contained within the iTrova Terms of Service. Nothing in this DPA expands either party's liability beyond those agreed limitations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">15. Term and Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                This DPA shall remain in effect for as long as Customer Data is processed by iTrova. Termination of the underlying subscription agreement shall automatically terminate this DPA, except for provisions that survive termination by their nature.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">16. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Data Protection Contact<br />
                Allspire Technologies Limited<br />
                Email:{" "}
                <a href="mailto:hello@allspire.tech" className="text-primary hover:underline">
                  hello@allspire.tech
                </a>
                <br />
                Questions regarding this DPA may be submitted to the above contact details.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </PageLayout>
);

export default DataProcessingAgreement;
