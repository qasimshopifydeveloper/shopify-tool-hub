
import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="prose prose-lg max-w-none">
          <p>These Terms of Service ("Terms") govern your access to and use of ShopifyTools.com, including any content, functionality, and services offered on or through the website (the "Service").</p>
          
          <h2>Acceptance of Terms</h2>
          <p>By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the Service.</p>
          
          <h2>Changes to Terms</h2>
          <p>We may revise these Terms from time to time. The most current version will always be posted on our website. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p>
          
          <h2>Use of the Service</h2>
          <p>You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:</p>
          <ul>
            <li>In any way that violates any applicable law or regulation</li>
            <li>To transmit any material that contains viruses, trojan horses, or other harmful computer code</li>
            <li>To attempt to gain unauthorized access to any portion of the Service</li>
            <li>To interfere with any other user's enjoyment of the Service</li>
          </ul>
          
          <h2>Intellectual Property</h2>
          <p>The Service and its original content, features, and functionality are owned by ShopifyTools.com and are protected by copyright, trademark, and other intellectual property laws.</p>
          
          <h2>User-Generated Content</h2>
          <p>By submitting content to the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display the content in connection with the Service.</p>
          
          <h2>Disclaimer of Warranties</h2>
          <p>The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied.</p>
          
          <h2>Limitation of Liability</h2>
          <p>In no event shall ShopifyTools.com be liable for any indirect, incidental, special, consequential or punitive damages arising out of or in connection with your use of the Service.</p>
          
          <h2>Governing Law</h2>
          <p>These Terms shall be governed by the laws of the jurisdiction in which we are located, without regard to its conflict of law provisions.</p>
          
          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p>legal@shopifytools.com</p>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
