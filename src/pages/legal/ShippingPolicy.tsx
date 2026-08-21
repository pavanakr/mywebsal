import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Truck, Clock, CheckCircle, AlertCircle, FileCode, Globe, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ShippingPolicy = () => {
  return (
    <Layout>
      <SEO
        title="Shipping & Delivery Policy"
        description="SOFTURECS AI LABS PRIVATE LIMITED shipping and delivery policy for digital products and software development services. Learn about project timelines, delivery methods, and milestone schedules."
        keywords="software delivery policy, digital product delivery, project timeline, software development schedule"
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
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Shipping & Delivery Policy</h1>
            <p className="text-slate-600 dark:text-slate-400">Last updated: January 2026</p>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mb-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Digital Products Only</h3>
                <p className="text-blue-800 dark:text-blue-300 text-sm leading-relaxed">
                  SOFTURECS AI LABS PRIVATE LIMITED exclusively provides digital products and software development services. 
                  We do not sell, manufacture, or ship any physical products. All deliverables are transmitted electronically 
                  through secure digital channels.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <FileCode className="w-6 h-6 text-indigo-500" />
                1. Nature of Our Products
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                All products and services offered by SOFTURECS AI LABS PRIVATE LIMITED are digital in nature. Our offerings include:
              </p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                {[
                  'Custom Software Applications (Web, Mobile, Desktop)',
                  'AI & Machine Learning Solutions',
                  'SaaS Platform Development',
                  'API Development and Integration',
                  'UI/UX Design Assets and Prototypes',
                  'Cloud Infrastructure Setup and Configuration',
                  'Source Code and Documentation',
                  'Software Licenses and Access Credentials',
                  'Technical Consulting and Advisory Services',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Clock className="w-6 h-6 text-indigo-500" />
                2. Software Development Timelines
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Project delivery timelines are determined based on scope, complexity, and requirements. 
                Estimated timelines are provided during the proposal phase and formalized in the Statement of Work (SOW).
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6 mb-4">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Typical Project Timelines:</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { type: 'MVP / Prototype', timeline: '4-8 weeks' },
                    { type: 'Small Applications', timeline: '2-3 months' },
                    { type: 'Medium Projects', timeline: '3-6 months' },
                    { type: 'Large Enterprise Solutions', timeline: '6-12+ months' },
                    { type: 'UI/UX Design Projects', timeline: '2-4 weeks' },
                    { type: 'API Integration', timeline: '1-4 weeks' },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-white dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-600">
                      <span className="text-slate-700 dark:text-slate-300">{item.type}</span>
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400">{item.timeline}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                <strong>Note:</strong> Actual timelines may vary based on project requirements, client feedback cycles, 
                third-party dependencies, and scope changes. All timeline commitments are documented in the project agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Zap className="w-6 h-6 text-indigo-500" />
                3. Delivery Methods
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                All digital deliverables are transmitted through secure electronic channels:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'Source Code Repositories',
                    description: 'Code is delivered via GitHub, GitLab, Bitbucket, or Azure DevOps with full version history and documentation.',
                  },
                  {
                    title: 'Cloud Deployment',
                    description: 'Applications deployed directly to client cloud infrastructure (AWS, Azure, GCP) or our managed hosting environment.',
                  },
                  {
                    title: 'Secure File Transfer',
                    description: 'Design assets, documentation, and large files shared via encrypted file sharing platforms.',
                  },
                  {
                    title: 'API & Credentials',
                    description: 'Access credentials, API keys, and licenses delivered through secure password managers or encrypted channels.',
                  },
                  {
                    title: 'Live Demonstration',
                    description: 'Interactive demos and handover sessions conducted via video conferencing with screen sharing.',
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 border-l-4 border-indigo-500">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-indigo-500" />
                4. Milestone-Based Delivery
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Projects are typically structured with milestone-based deliveries to ensure transparency and quality:
              </p>
              <div className="space-y-3">
                {[
                  { phase: 'Discovery & Planning', deliverables: 'Requirements document, project plan, wireframes' },
                  { phase: 'Design Phase', deliverables: 'UI/UX designs, prototypes, design system' },
                  { phase: 'Development Sprints', deliverables: 'Working features, sprint demos, progress reports' },
                  { phase: 'Testing & QA', deliverables: 'Test reports, bug fixes, quality certification' },
                  { phase: 'Deployment', deliverables: 'Live application, deployment documentation' },
                  { phase: 'Handover', deliverables: 'Source code, documentation, training materials' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">{item.phase}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{item.deliverables}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-indigo-500" />
                5. Delivery Confirmation
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Upon delivery of each milestone or final deliverable:
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Client receives notification with access instructions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>A review period (typically 5-7 business days) is provided for acceptance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Feedback is incorporated within the agreed revision scope</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Formal sign-off confirms successful delivery</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Delays and Extensions</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                In the event of project delays:
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 mb-4">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Clients are notified promptly with revised timelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Delays due to client-side factors (feedback delays, scope changes) may extend timelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Force majeure events are handled per the project agreement terms</span>
                </li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                We maintain transparent communication throughout the project lifecycle and work collaboratively 
                to meet agreed timelines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. No Physical Shipping</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To reiterate, SOFTURECS AI LABS PRIVATE LIMITED does not engage in physical shipping of any kind. We do not:
              </p>
              <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Ship physical hardware, devices, or equipment</li>
                <li>• Provide printed materials or physical documentation</li>
                <li>• Deliver USB drives, DVDs, or any physical media</li>
                <li>• Offer courier or postal delivery services</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                All deliverables are 100% digital and transmitted electronically as described in this policy.
              </p>
            </section>

            <section className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Contact Us</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                For any questions regarding our shipping and delivery policy, project timelines, or delivery methods, 
                please contact us:
              </p>
              <div className="space-y-2 text-slate-700 dark:text-slate-300">
                <p><strong>Email:</strong> info@softurecsailabs.com</p>
                <p><strong>Phone:</strong> +91 7396080902</p>
                <p><strong>Address:</strong> 5th Floor, Trinity Corporate Building, KPHB, Hyderabad, Telangana - 500072</p>
              </div>
              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                  Contact our team for project inquiries →
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ShippingPolicy;
