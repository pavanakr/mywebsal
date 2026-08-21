import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Database, Globe, Users, Bell, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="Softurecs AI Labs privacy policy. Learn how we collect, use, protect, and share your personal information when you use our software development services."
        keywords="privacy policy, data protection, personal information, GDPR, data security"
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
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Privacy Policy</h1>
            <p className="text-slate-600 dark:text-slate-400">Last updated: January 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 space-y-8"
          >
            <section>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                SOFTURECS AI LABS PRIVATE LIMITED ("Softurecs," "we," "us," or "our") is committed to protecting 
                your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website, use our services, or engage with us in any way.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-indigo-500" />
                1. Information We Collect
              </h2>
              
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 mt-6">1.1 Personal Information</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 mb-4">
                <li>• Fill out contact forms or request consultations</li>
                <li>• Subscribe to our newsletter or marketing communications</li>
                <li>• Engage our services for software development projects</li>
                <li>• Apply for job positions at our company</li>
                <li>• Communicate with us via email, phone, or other channels</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                This information may include: name, email address, phone number, company name, job title, 
                project requirements, billing information, and any other information you choose to provide.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">1.2 Automatically Collected Information</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Device information (browser type, operating system, device type)</li>
                <li>• IP address and geographic location</li>
                <li>• Pages visited, time spent on pages, and navigation patterns</li>
                <li>• Referring website or source</li>
                <li>• Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-indigo-500" />
                2. How We Use Your Information
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <div className="space-y-3">
                {[
                  { title: 'Service Delivery', desc: 'To provide, maintain, and improve our software development services' },
                  { title: 'Communication', desc: 'To respond to inquiries, provide updates, and send project-related communications' },
                  { title: 'Marketing', desc: 'To send promotional materials, newsletters, and information about our services (with your consent)' },
                  { title: 'Analytics', desc: 'To analyze website usage and improve user experience' },
                  { title: 'Legal Compliance', desc: 'To comply with legal obligations and protect our rights' },
                  { title: 'Business Operations', desc: 'To manage contracts, billing, and administrative functions' },
                ].map((item, index) => (
                  <div key={index} className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-indigo-500" />
                3. Information Sharing and Disclosure
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information only in the following circumstances:
              </p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0 mt-2" />
                  <div>
                    <strong>Service Providers:</strong> With trusted third-party vendors who assist in operating 
                    our business (hosting, analytics, payment processing) under strict confidentiality agreements.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0 mt-2" />
                  <div>
                    <strong>Legal Requirements:</strong> When required by law, court order, or government regulation, 
                    or to protect our rights, property, or safety.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0 mt-2" />
                  <div>
                    <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, 
                    where your information may be transferred as part of the business assets.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0 mt-2" />
                  <div>
                    <strong>With Your Consent:</strong> When you have explicitly agreed to the sharing of your information.
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-indigo-500" />
                4. Data Security
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'SSL/TLS encryption for data in transit',
                  'Encrypted storage for sensitive data',
                  'Regular security audits and assessments',
                  'Access controls and authentication',
                  'Employee training on data protection',
                  'Incident response procedures',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                    <Lock className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4 text-sm">
                While we strive to protect your information, no method of transmission over the Internet is 100% secure. 
                We cannot guarantee absolute security but are committed to maintaining the highest standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-indigo-500" />
                5. International Data Transfers
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                As we serve clients globally, your information may be transferred to and processed in countries 
                other than your country of residence. We ensure appropriate safeguards are in place for such 
                transfers, including standard contractual clauses and compliance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Your Rights and Choices</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• <strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li>• <strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li>• <strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li>• <strong>Portability:</strong> Request transfer of your data to another service provider</li>
                <li>• <strong>Objection:</strong> Object to processing of your personal information for certain purposes</li>
                <li>• <strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at info@softurecsailabs.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Bell className="w-6 h-6 text-indigo-500" />
                7. Cookies and Tracking
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                Types of cookies we use include:
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• <strong>Essential Cookies:</strong> Required for website functionality</li>
                <li>• <strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li>• <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with consent)</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                You can manage cookie preferences through your browser settings. Disabling certain cookies may 
                affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Data Retention</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We retain personal information for as long as necessary to fulfill the purposes outlined in this 
                policy, unless a longer retention period is required by law. Project-related data is typically 
                retained for 7 years after project completion for legal and business purposes. You may request 
                deletion of your data at any time, subject to our legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Children's Privacy</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect 
                personal information from children. If we become aware that we have collected personal information 
                from a child, we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">10. Third-Party Links</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy 
                practices of these external sites. We encourage you to review the privacy policies of any 
                third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">11. Changes to This Policy</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal 
                requirements. We will notify you of any material changes by posting the updated policy on our 
                website with a revised "Last updated" date. Your continued use of our services after such changes 
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-indigo-500" />
                12. Contact Us
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="space-y-2 text-slate-700 dark:text-slate-300">
                <p><strong>Company:</strong> SOFTURECS AI LABS PRIVATE LIMITED</p>
                <p><strong>Email:</strong> info@softurecsailabs.com</p>
                <p><strong>Phone:</strong> +91 7396080902</p>
                <p><strong>Address:</strong> 5th Floor, Trinity Corporate Building, KPHB, Hyderabad, Telangana - 500072, India</p>
              </div>
              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                  Contact us with any privacy concerns →
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
