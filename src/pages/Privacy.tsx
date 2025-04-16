
import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="prose prose-lg max-w-none">
          <p>This Privacy Policy describes how ShopifyTools.com ("we," "us," or "our") collects, uses, and discloses your personal information when you visit, use our services, or otherwise communicate with us. This Policy applies to all ShopifyTools.com services and tools.</p>
          
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly to us when you:</p>
          <ul>
            <li>Use our tools and services</li>
            <li>Register for an account</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us for support or information</li>
            <li>Participate in surveys or promotions</li>
          </ul>
          
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our tools and services</li>
            <li>Process and complete transactions</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Analyze usage patterns and trends</li>
          </ul>
          
          <h2>Information Sharing</h2>
          <p>We do not sell, rent, or share your personal information with third parties except as described in this policy.</p>
          
          <h2>Security</h2>
          <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>
          
          <h2>Your Rights</h2>
          <p>You may access, update, or correct your information by logging into your account or contacting us. You may also request deletion of your account.</p>
          
          <h2>Changes to This Policy</h2>
          <p>We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy.</p>
          
          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>privacy@shopifytools.com</p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
