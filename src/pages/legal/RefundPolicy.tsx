import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { RefreshCw, CheckCircle, AlertCircle, Clock, FileText, CreditCard, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
  return (
    <Layout>
      <SEO
        title="Refund Policy"
        description="SOFTURECS AI LABS PRIVATE LIMITED refund policy for software development services. Learn about our fair refund terms for projects, milestones, and staff augmentation services."
        keywords="refund policy, software development refund, project cancellation, milestone refund, payment terms"
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
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Refund Policy</h1>
            <p className="text-slate-600 dark:text-slate-400">Last updated: January 2026</p>
          </motion.div>

          {/* Policy Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-6 mb-8"
          >
            <p className="text-indigo-800 dark:text-indigo-300 leading-relaxed">
              At SOFTURECS AI LABS PRIVATE LIMITED, we are committed to delivering high-quality software solutions 
              and ensuring client satisfaction. This Refund Policy outlines the terms and conditions under which 
              refunds may be issued for our digital products and software development services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-indigo-500" />
                1. Project-Based Engagements
              </h2>
              
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 mt-6">1.1 Before Project Commencement</h3>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-green-800 dark:text-green-300">
                    <strong>Full Refund Eligible:</strong> If the project has not commenced (no design, development, 
                    or planning work has started), a full refund of any advance payment may be issued upon request.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">1.2 After Project Commencement</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Once development work has begun, refunds are calculated on a prorated basis:
              </p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0 mt-2" />
                  <span>The value of completed work is assessed based on time spent and deliverables produced</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0 mt-2" />
                  <span>Refund amount = Total Paid - Value of Completed Work - Administrative Fees (if applicable)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0 mt-2" />
                  <span>Any completed deliverables will be provided to the client upon settlement</span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 mt-6">1.3 Fixed-Price Projects</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                For fixed-price contracts, refund eligibility is determined by the project stage:
              </p>
              <div className="mt-4 space-y-3">
                {[
                  { stage: 'Discovery/Planning Phase', refund: 'Up to 75% of advance payment' },
                  { stage: 'Design Phase (25% complete)', refund: 'Up to 50% of remaining balance' },
                  { stage: 'Development Phase (50% complete)', refund: 'Prorated based on milestones' },
                  { stage: 'Testing/QA Phase (75%+ complete)', refund: 'No refund; project completion prioritized' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                    <span className="text-slate-700 dark:text-slate-300">{item.stage}</span>
                    <span className="font-medium text-indigo-600 dark:text-indigo-400 text-sm">{item.refund}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-indigo-500" />
                2. Milestone-Based Payments
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                For projects structured with milestone-based payments:
              </p>
              
              <div className="space-y-4">
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">Completed Milestones</h4>
                      <p className="text-amber-800 dark:text-amber-300 text-sm">
                        Payments for milestones that have been completed, delivered, and approved by the client are 
                        <strong> non-refundable</strong>. These payments compensate for work already performed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Pending Milestones</h4>
                      <p className="text-green-800 dark:text-green-300 text-sm">
                        Payments made for milestones that have not yet commenced may be <strong>fully refunded</strong>. 
                        For milestones in progress, a prorated refund based on completion percentage will be calculated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Staff Augmentation Services</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                For staff augmentation and dedicated team engagements:
              </p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Hours Worked:</strong> Billing for hours already worked and approved is non-refundable</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Prepaid Hours:</strong> Unused prepaid hours may be refunded upon written request</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Notice Period:</strong> A 15-day notice period is required for service termination</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Non-Refundable Services</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                The following services and costs are generally non-refundable:
              </p>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6">
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Third-party software licenses, APIs, or subscriptions purchased on your behalf</li>
                  <li>• Cloud hosting, domain registration, or infrastructure costs</li>
                  <li>• Completed design assets, prototypes, and approved mockups</li>
                  <li>• Consulting and advisory services already rendered</li>
                  <li>• Rush fees or expedited delivery charges</li>
                  <li>• Training sessions and workshops conducted</li>
                  <li>• Discovery and requirements documentation already delivered</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Cancellation by Softurecs</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                In rare circumstances where Softurecs must cancel or terminate a project:
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• A full refund of payments for undelivered work will be issued</li>
                <li>• All completed work and assets will be transferred to the client</li>
                <li>• We will provide reasonable assistance in transitioning to another provider</li>
                <li>• Notification will be provided with at least 15 days' notice when possible</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Clock className="w-6 h-6 text-indigo-500" />
                6. Refund Request Process
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                To request a refund, please follow these steps:
              </p>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'Submit Request', desc: 'Email info@softurecsailabs.com with subject "Refund Request - [Project Name]"' },
                  { step: 2, title: 'Provide Details', desc: 'Include project ID, payment details, amount requested, and reason for refund' },
                  { step: 3, title: 'Review Period', desc: 'Our team will review your request within 5 business days' },
                  { step: 4, title: 'Resolution', desc: 'You will receive a written response with our decision and next steps' },
                  { step: 5, title: 'Processing', desc: 'Approved refunds are processed within 10-15 business days to your original payment method' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Dispute Resolution</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                If you are dissatisfied with our refund decision:
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• You may request a review by our management team within 14 days</li>
                <li>• We encourage open dialogue to reach a mutually acceptable resolution</li>
                <li>• If disputes cannot be resolved amicably, they will be subject to arbitration in Hyderabad, India</li>
                <li>• The governing law for all disputes is Indian law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Special Circumstances</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We understand that exceptional situations may arise. In cases of:
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• <strong>Medical emergencies:</strong> Flexible arrangements may be considered</li>
                <li>• <strong>Business closure:</strong> We will work with you on fair settlement terms</li>
                <li>• <strong>Force majeure:</strong> Refunds handled per the force majeure clause in your agreement</li>
                <li>• <strong>Significant project changes:</strong> Scope changes may require contract renegotiation</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                Please contact us to discuss your specific situation. We aim to be fair and reasonable in all circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Refund Processing Time</h2>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { method: 'Bank Transfer (India)', time: '5-7 business days' },
                    { method: 'International Wire', time: '10-15 business days' },
                    { method: 'Credit/Debit Card', time: '7-10 business days' },
                    { method: 'PayPal/Stripe', time: '3-5 business days' },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-white dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-600">
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{item.method}</span>
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400 text-sm">{item.time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-4">
                  *Processing times are estimates and may vary based on your bank or payment provider.
                </p>
              </div>
            </section>

            <section className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-indigo-500" />
                10. Contact Us
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                For any questions regarding our refund policy or to initiate a refund request, please contact us:
              </p>
              <div className="space-y-2 text-slate-700 dark:text-slate-300">
                <p><strong>Email:</strong> info@softurecsailabs.com</p>
                <p><strong>Phone:</strong> +91 7396080902</p>
                <p><strong>Address:</strong> 5th Floor, Trinity Corporate Building, KPHB, Hyderabad, Telangana - 500072</p>
                <p><strong>Business Hours:</strong> Monday - Saturday, 9:00 AM - 7:00 PM IST</p>
              </div>
              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                  Contact our team for refund inquiries →
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default RefundPolicy;
