import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { FileText, Scale, Shield, AlertTriangle, Users, Gavel, Globe, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Layout>
      <SEO
        title="Terms & Conditions"
        description="Softurecs AI Labs terms and conditions for software development services. Read our service agreement, intellectual property rights, confidentiality, and liability terms."
        keywords="terms and conditions, service agreement, software development terms, intellectual property, liability"
      />
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Terms & Conditions</h1>
            <p className="text-slate-600 dark:text-slate-400">Last updated: January 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-indigo-500" />
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                By accessing the website, engaging our services, or entering into any agreement with 
                SOFTURECS AI LABS PRIVATE LIMITED ("Softurecs," "Company," "we," "us," or "our"), you 
                ("Client," "you," or "your") agree to be bound by these Terms and Conditions.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If you do not agree to these terms, please do not use our website or services. These terms 
                apply to all visitors, users, clients, and others who access or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Services</h2>
              
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">2.1 Scope of Services</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Softurecs provides software development, consulting, and related technology services including 
                but not limited to:
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 mb-4">
                <li>• Custom software development (web, mobile, desktop applications)</li>
                <li>• AI and machine learning solutions</li>
                <li>• Cloud computing and DevOps services</li>
                <li>• UI/UX design and prototyping</li>
                <li>• Staff augmentation and dedicated teams</li>
                <li>• Technical consulting and advisory</li>
                <li>• Software maintenance and support</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">2.2 Project Agreements</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The specific scope, timeline, deliverables, and pricing for each engagement will be defined 
                in a separate Statement of Work (SOW), proposal, or project agreement. In case of any conflict 
                between these Terms and a specific project agreement, the project agreement shall prevail for 
                that engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-indigo-500" />
                3. Intellectual Property Rights
              </h2>
              
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">3.1 Client Ownership</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Upon full payment of all fees, all intellectual property rights in custom-developed software, 
                designs, and documentation specifically created for the Client ("Client Deliverables") shall 
                transfer to the Client, unless otherwise specified in the project agreement.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">3.2 Pre-Existing Materials</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Pre-existing tools, frameworks, libraries, and methodologies owned by Softurecs or third parties 
                ("Pre-Existing Materials") remain the property of their respective owners. Softurecs grants the 
                Client a non-exclusive, royalty-free license to use such Pre-Existing Materials incorporated 
                into the deliverables for the purposes specified in the project agreement.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">3.3 Third-Party Components</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Use of open-source software or third-party components is subject to their respective licenses. 
                Softurecs will disclose major third-party components used and their licensing terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Payment Terms</h2>
              
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">4.1 Invoicing</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Invoices are issued as per the payment schedule in the project agreement. Standard payment 
                    terms are Net 15 days from invoice date unless otherwise agreed.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">4.2 Late Payments</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Overdue payments may incur interest at 1.5% per month or the maximum rate permitted by law, 
                    whichever is lower. Softurecs reserves the right to suspend work on overdue accounts.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">4.3 Taxes</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    All fees are exclusive of applicable taxes (GST, VAT, etc.) unless stated otherwise. 
                    Client is responsible for all applicable taxes on services.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-indigo-500" />
                5. Confidentiality
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Both parties agree to maintain strict confidentiality of proprietary and sensitive information 
                shared during the course of the engagement ("Confidential Information").
              </p>
              
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">5.1 Obligations</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 mb-4">
                <li>• Use Confidential Information only for purposes of the engagement</li>
                <li>• Protect Confidential Information with reasonable security measures</li>
                <li>• Limit access to authorized personnel with a need to know</li>
                <li>• Not disclose Confidential Information to third parties without consent</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">5.2 Exclusions</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Confidentiality obligations do not apply to information that: (a) is publicly available, 
                (b) was known prior to disclosure, (c) is independently developed, or (d) is required to 
                be disclosed by law.
              </p>
              
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 mt-4">5.3 Survival</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Confidentiality obligations survive termination of any agreement for a period of 3 years.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Warranties and Representations</h2>
              
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">6.1 Softurecs Warranties</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Softurecs warrants that:
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 mb-4">
                <li>• Services will be performed in a professional and workmanlike manner</li>
                <li>• Deliverables will substantially conform to agreed specifications for 30 days post-delivery</li>
                <li>• We have the right to provide the services and grant the licenses stated herein</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">6.2 Warranty Disclaimer</h3>
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-amber-800 dark:text-amber-300 text-sm">
                  EXCEPT AS EXPRESSLY STATED, ALL SERVICES AND DELIVERABLES ARE PROVIDED "AS IS" WITHOUT 
                  WARRANTY OF ANY KIND. SOFTURECS DISCLAIMS ALL IMPLIED WARRANTIES INCLUDING MERCHANTABILITY, 
                  FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-indigo-500" />
                7. Limitation of Liability
              </h2>
              
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">7.1 Cap on Liability</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Softurecs' total liability for any claims arising from or related to a project shall not exceed 
                the amount paid by the Client for the specific services giving rise to the claim in the 12 months 
                preceding the claim.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">7.2 Exclusion of Damages</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                In no event shall Softurecs be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including but not limited to loss of profits, data, business opportunities, 
                or goodwill, regardless of the cause of action or the theory of liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Indemnification</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Client agrees to indemnify and hold harmless Softurecs from any claims, damages, or expenses 
                (including reasonable attorney's fees) arising from:
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Client's breach of these Terms</li>
                <li>• Client's violation of any law or third-party rights</li>
                <li>• Client-provided materials that infringe third-party intellectual property</li>
                <li>• Use of deliverables in ways not authorized or reasonably contemplated</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Termination</h2>
              
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">9.1 Termination for Convenience</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Either party may terminate an engagement with 30 days' written notice. Client shall pay for 
                all work completed and expenses incurred up to the termination date.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">9.2 Termination for Cause</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Either party may terminate immediately if the other party materially breaches these Terms and 
                fails to cure the breach within 15 days of written notice.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">9.3 Effects of Termination</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Upon termination: (a) all licenses granted herein terminate except for fully paid deliverables, 
                (b) each party returns or destroys the other's Confidential Information, (c) all outstanding 
                payments become due.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">10. Force Majeure</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Neither party shall be liable for delays or failures in performance resulting from circumstances 
                beyond its reasonable control, including but not limited to acts of God, natural disasters, 
                war, terrorism, pandemic, government actions, or internet/telecommunications failures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Gavel className="w-6 h-6 text-indigo-500" />
                11. Dispute Resolution
              </h2>
              
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">11.1 Governing Law</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India, without 
                regard to conflict of law principles.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">11.2 Arbitration</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Any disputes arising from these Terms shall be resolved through binding arbitration in 
                Hyderabad, India, in accordance with the Arbitration and Conciliation Act, 1996.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">11.3 Jurisdiction</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                For any matters not subject to arbitration, the courts of Hyderabad, India shall have 
                exclusive jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-indigo-500" />
                12. General Provisions
              </h2>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0 mt-2" />
                  <div>
                    <strong>Entire Agreement:</strong> These Terms, along with applicable project agreements, 
                    constitute the entire agreement between the parties.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0 mt-2" />
                  <div>
                    <strong>Severability:</strong> If any provision is found unenforceable, the remaining 
                    provisions shall continue in effect.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0 mt-2" />
                  <div>
                    <strong>Waiver:</strong> Failure to enforce any right shall not constitute a waiver of 
                    that right.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0 mt-2" />
                  <div>
                    <strong>Assignment:</strong> Client may not assign these Terms without our written consent.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0 mt-2" />
                  <div>
                    <strong>Modifications:</strong> We may update these Terms at any time. Continued use 
                    constitutes acceptance of changes.
                  </div>
                </li>
              </ul>
            </section>

            <section className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-indigo-500" />
                13. Contact Us
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                For any questions regarding these Terms & Conditions, please contact us:
              </p>
              <div className="space-y-2 text-slate-700 dark:text-slate-300">
                <p><strong>Company:</strong> SOFTURECS AI LABS PRIVATE LIMITED</p>
                <p><strong>Email:</strong> info@softurecsailabs.com</p>
                <p><strong>Phone:</strong> +91 7396080902</p>
                <p><strong>Address:</strong> 5th Floor, Trinity Corporate Building, KPHB, Hyderabad, Telangana - 500072, India</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link to="/privacy-policy" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline text-sm">
                  Privacy Policy →
                </Link>
                <Link to="/refund-policy" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline text-sm">
                  Refund Policy →
                </Link>
                <Link to="/shipping-policy" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline text-sm">
                  Shipping Policy →
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
