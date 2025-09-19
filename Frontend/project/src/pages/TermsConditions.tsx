import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, Clock, Globe, ShieldCheck } from 'lucide-react';

const TermsConditions: React.FC = () => {
  const lastUpdated = "August 14, 2025";
  
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-xl"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            CloudSphereX
          </h1>
          <p className="text-xl text-gray-300 mb-2">Terms & Conditions</p>
          <p className="text-sm text-gray-400">Last updated: {lastUpdated}</p>
        </div>

        <div className="space-y-10 text-gray-300">
          <section>
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">Introduction</h2>
            </div>
            <p className="mb-4">
              These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship with the CloudSphereX website and services (the "Service") operated by CloudSphereX ("us", "we", or "our").
            </p>
            <p>
              Please read these Terms and Conditions carefully before using our Service. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            <p className="mt-4">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Scale className="w-6 h-6 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">Use of Our Services</h2>
            </div>
            <p className="mb-4">
              The Services we provide are always evolving and the form and nature of the Services may change from time to time without prior notice to you. In addition, we may stop (permanently or temporarily) providing the Services (or any features within the Services) to you or to users generally and may not be able to provide you with prior notice.
            </p>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Your use of our Services must comply with the following conditions:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may not use our Services if you are not able to form a binding contract with CloudSphereX, or if you are under the age of 13.</li>
                <li>You may not use our Services for any illegal or unauthorized purpose. You agree to comply with all laws, rules, and regulations applicable to your use of the Services.</li>
                <li>You are responsible for any activity that occurs through your account.</li>
                <li>You may not use the Services in a manner that could interfere with, disrupt, negatively affect, or inhibit other users from fully enjoying the Services.</li>
                <li>You may not attempt to circumvent any content-filtering techniques we employ, or attempt to access areas or features of the Services that you are not authorized to access.</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Globe className="w-6 h-6 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">Intellectual Property</h2>
            </div>
            <p className="mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of CloudSphereX and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of CloudSphereX.
            </p>
            <p>
              All content, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of CloudSphereX or its content suppliers and protected by international copyright laws.
            </p>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">Limitation of Liability</h2>
            </div>
            <p className="mb-4">
              In no event shall CloudSphereX, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your access to or use of or inability to access or use the Service;</li>
              <li>Any conduct or content of any third party on the Service;</li>
              <li>Any content obtained from the Service; and</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <ShieldCheck className="w-6 h-6 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">Indemnification</h2>
            </div>
            <p className="mb-4">
              You agree to defend, indemnify, and hold harmless CloudSphereX and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use and access of the Service, by you or any person using your account and password;</li>
              <li>A breach of these Terms; or</li>
              <li>Content posted on the Service.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">Termination</h2>
            </div>
            <p className="mb-4">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="mb-4">
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
            </p>
            <p>
              All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Changes to These Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>By email: info@cloudsphereX.com</li>
              <li>By phone: 051-2305230</li>
              <li>By visiting this page on our website: www.cloudsphereX.com/contact</li>
            </ul>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsConditions;