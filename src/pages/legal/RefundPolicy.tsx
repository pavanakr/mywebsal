import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

const RefundPolicy = () => {
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
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Refund Policy</h1>
            <p className="text-slate-600">Last updated: January 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-8 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Project-Based Refunds</h2>
              <p className="text-slate-600 leading-relaxed">
                For fixed-price projects, refunds are evaluated on a case-by-case basis. If work has not commenced, 
                a full refund of any advance payment may be issued. Once development begins, refunds are prorated 
                based on work completed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Milestone Payments</h2>
              <p className="text-slate-600 leading-relaxed">
                For milestone-based projects, payments made for completed and approved milestones are non-refundable. 
                Payments for pending milestones may be refunded if the project is terminated before those milestones begin.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Staff Augmentation</h2>
              <p className="text-slate-600 leading-relaxed">
                For staff augmentation services, billing is based on time worked. There are no refunds for hours 
                already worked and approved. Unused prepaid hours may be refunded upon request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Refund Process</h2>
              <p className="text-slate-600 leading-relaxed">
                To request a refund, please contact our team at info@softurecs.com with your project details 
                and reason for the request. We will respond within 5 business days with our determination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                For any questions regarding our refund policy, please contact us at info@softurecs.com 
                or call us at +91 7396080902.
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default RefundPolicy;
