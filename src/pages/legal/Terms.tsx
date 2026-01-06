import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms & Conditions</h1>
            <p className="text-slate-600">Last updated: January 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-8 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing and using the services of SOFTURECS AI LABS PRIVATE LIMITED, you agree to be bound 
                by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services</h2>
              <p className="text-slate-600 leading-relaxed">
                We provide software development, consulting, and related technology services as described in 
                individual project agreements. The specific scope, timeline, and deliverables will be defined 
                in separate statements of work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed">
                Upon full payment, all intellectual property rights in custom-developed software will transfer 
                to the client, unless otherwise specified in the project agreement. Pre-existing tools and 
                frameworks remain the property of their respective owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Confidentiality</h2>
              <p className="text-slate-600 leading-relaxed">
                Both parties agree to maintain the confidentiality of proprietary information shared during 
                the course of the engagement. This obligation survives the termination of any agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed">
                Our liability is limited to the amount paid for the specific services giving rise to the claim. 
                We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                For any questions regarding these Terms & Conditions, please contact us at info@softurecs.com 
                or call us at +91 7396080902.
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
