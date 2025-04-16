
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  Clock, 
  HelpCircle, 
  MessageSquare, 
  Briefcase, 
  PenTool,
  Send,
  Loader2
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    subscribeToNewsletter: false
  });

  const handleContactInputChange = (e) => {
    const { id, value } = e.target;
    setContactForm({
      ...contactForm,
      [id]: value
    });
  };

  const handleCheckboxChange = (checked) => {
    setContactForm({
      ...contactForm,
      subscribeToNewsletter: checked
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This would be replaced with your actual API endpoint
      console.log("Sending contact form to info@shopifietools.com:", contactForm);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you soon.",
      });
      
      // Reset form
      setContactForm({
        name: "",
        email: "",
        subject: "",
        message: "",
        subscribeToNewsletter: false
      });
      
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    try {
      // This would be replaced with your actual newsletter API endpoint
      console.log("Subscribing to newsletter:", newsletterEmail);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Subscribed!",
        description: "You've been successfully subscribed to our newsletter.",
      });
      
      setNewsletterEmail("");
      
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      toast({
        title: "Error",
        description: "There was a problem subscribing you. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <Layout>
      {/* Header Banner */}
      <section className="relative py-20 md:py-28 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions, feedback, or need support? We're here to help you make the most of ShopifieTools.com.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={handleContactSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="font-medium">
                          Your Name
                        </label>
                        <Input 
                          id="name" 
                          placeholder="John Smith" 
                          required 
                          value={contactForm.name}
                          onChange={handleContactInputChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="font-medium">
                          Email Address
                        </label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          required 
                          value={contactForm.email}
                          onChange={handleContactInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="font-medium">
                        Subject
                      </label>
                      <select 
                        id="subject" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={contactForm.subject}
                        onChange={handleContactInputChange}
                        required
                      >
                        <option value="" disabled>
                          Select a subject
                        </option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="suggestion">Feature Suggestion</option>
                        <option value="sponsorship">Sponsorship Query</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="font-medium">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={6}
                        required
                        value={contactForm.message}
                        onChange={handleContactInputChange}
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="newsletter" 
                        checked={contactForm.subscribeToNewsletter}
                        onCheckedChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor="newsletter"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subscribe to our newsletter for Shopify tips and new tools
                      </label>
                    </div>
                    
                    <Button className="w-full" size="lg" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">info@shopifietools.com</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          We typically respond within 24 hours.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Support Hours</h3>
                        <p className="text-muted-foreground">Monday - Friday: 9AM - 5PM EST</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Excluding holidays
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Subscribe to Our Newsletter</CardTitle>
                    <CardDescription>
                      Get the latest Shopify tips, tool updates, and exclusive offers.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="newsletter-email" className="font-medium">
                          Email Address
                        </label>
                        <Input
                          id="newsletter-email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isSubscribing}
                      >
                        {isSubscribing ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Subscribing...
                          </>
                        ) : (
                          "Subscribe"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>How Can We Help?</CardTitle>
                    <CardDescription>
                      Choose the right contact option for your needs.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-muted p-2 rounded-full">
                          <HelpCircle className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Technical Support</h3>
                          <p className="text-sm text-muted-foreground">
                            Need help with using our tools?
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-muted p-2 rounded-full">
                          <MessageSquare className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Feature Requests</h3>
                          <p className="text-sm text-muted-foreground">
                            Suggest new tools or improvements.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-muted p-2 rounded-full">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Business Inquiries</h3>
                          <p className="text-sm text-muted-foreground">
                            For partnerships and sponsorships.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-muted p-2 rounded-full">
                          <PenTool className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Guest Content</h3>
                          <p className="text-sm text-muted-foreground">
                            Contribute to our blog or knowledge base.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Quick Response?</h3>
                    <p className="mb-4 opacity-90">
                      Check our FAQ section for answers to common questions.
                    </p>
                    <Button variant="secondary" className="w-full text-primary" asChild>
                      <a href="/faq">View FAQ</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
            <p className="text-xl text-muted-foreground">
              Follow us on social media for the latest updates, tips, and resources.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <a 
              href="#" 
              className="flex flex-col items-center p-6 rounded-lg bg-card border hover:shadow-md transition-shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-blue-600 mb-3">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="font-medium">Facebook</span>
            </a>
            
            <a 
              href="#" 
              className="flex flex-col items-center p-6 rounded-lg bg-card border hover:shadow-md transition-shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-blue-400 mb-3">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
              <span className="font-medium">Twitter</span>
            </a>
            
            <a 
              href="#" 
              className="flex flex-col items-center p-6 rounded-lg bg-card border hover:shadow-md transition-shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-blue-800 mb-3">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="font-medium">LinkedIn</span>
            </a>
            
            <a 
              href="#" 
              className="flex flex-col items-center p-6 rounded-lg bg-card border hover:shadow-md transition-shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-red-600 mb-3">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
              <span className="font-medium">YouTube</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
