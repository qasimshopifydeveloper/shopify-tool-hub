
import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is ShopifieTools.com?",
      answer: "ShopifieTools.com is a comprehensive resource platform offering free and premium online tools specifically designed for Shopify store owners, developers, app builders, and learners. Our tools help optimize your Shopify experience without requiring any script installation or service setup."
    },
    {
      question: "Are the tools really free to use?",
      answer: "Many of our basic tools are completely free to use. Some advanced tools may require a premium subscription or one-time payment, but we clearly mark which tools are free and which are paid."
    },
    {
      question: "Do I need to install anything to use these tools?",
      answer: "No. All our tools are web-based and accessible directly through your browser. There's no need to install any scripts, applications, or services to your Shopify store unless specifically mentioned for a particular tool."
    },
    {
      question: "How do I use the tools on ShopifieTools.com?",
      answer: "Simply browse our tools directory, select the tool you need, configure the options if necessary, and use it directly on our website. For tools that generate code or assets, you'll be able to download or copy the results to implement in your Shopify store."
    },
    {
      question: "Do I need technical knowledge to use these tools?",
      answer: "Most of our tools are designed to be user-friendly and accessible to non-technical Shopify store owners. For more advanced developer tools, some technical knowledge may be required, but we provide clear documentation for all our tools."
    },
    {
      question: "Can I sponsor my own Shopify app or tool on your website?",
      answer: "Yes! We offer various sponsorship packages starting at $49/month. Visit our Sponsorship page to learn more about how you can showcase your Shopify app or tool to our audience of store owners and developers."
    },
    {
      question: "How often are new tools added?",
      answer: "We regularly update our collection with new tools based on user feedback and emerging Shopify trends. Subscribe to our newsletter to stay informed about new tools and features."
    },
    {
      question: "I have a suggestion for a new tool. How can I share it?",
      answer: "We love hearing from our community! Please use our Contact page to share your ideas and suggestions for new tools that would help your Shopify journey."
    },
    {
      question: "Can I contribute to ShopifieTools.com?",
      answer: "We welcome guest content contributions for our blog and knowledge base. If you're a Shopify expert with insights to share, please reach out via our Contact page."
    },
    {
      question: "How do I get support if I have issues with a tool?",
      answer: "You can reach our support team through the Contact page. We typically respond to support inquiries within 24-48 hours during business days."
    }
  ];

  return (
    <Layout>
      {/* Header Banner */}
      <section className="relative py-20 md:py-28 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about ShopifieTools.com and our online Shopify tools.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-2">
                  <AccordionTrigger className="text-xl font-semibold px-4">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-4 pt-2 pb-4 text-muted-foreground text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-16 p-6 bg-primary text-primary-foreground rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="mb-6">Our team is here to help with any other questions you might have about our tools or services.</p>
              <div className="flex justify-center">
                <a href="/contact" className="bg-background text-primary hover:bg-background/90 px-6 py-3 rounded-md font-medium">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
