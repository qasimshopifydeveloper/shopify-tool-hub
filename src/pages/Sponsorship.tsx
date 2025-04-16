
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  TrendingUp, 
  Users, 
  Eye, 
  CheckCircle2, 
  ChevronRight, 
  Star
} from "lucide-react";

const Sponsorship = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState("");
  const applicationFormRef = useRef<HTMLDivElement>(null);

  const handleSponsorshipApplication = (plan: string) => {
    setSelectedPackage(plan);
    
    if (applicationFormRef.current) {
      applicationFormRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Layout>
      {/* Banner/Header */}
      <section className="relative py-20 md:py-28 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sponsor Your Shopify Tool or App
            </h1>
            <p className="text-xl text-muted-foreground">
              Get your Shopify tool, app, or service in front of thousands of merchants and developers who visit our platform every month.
            </p>
          </div>
        </div>
      </section>

      {/* Why Sponsor With Us */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Sponsor With Us?</h2>
            <p className="text-xl text-muted-foreground">
              Connect with a highly targeted audience of Shopify store owners, developers, and app creators who are actively seeking tools and solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Growing Traffic</CardTitle>
                <CardDescription>
                  Our platform receives thousands of monthly visitors looking for Shopify solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>10,000+ monthly visitors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Average 3:45 minutes time on page</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>25% monthly growth rate</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Targeted Audience</CardTitle>
                <CardDescription>
                  Reach the exact users who are looking for tools like yours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>65% store owners and merchants</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>25% developers and designers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>10% app creators and agencies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>High Visibility</CardTitle>
                <CardDescription>
                  Premium placement options to showcase your product effectively.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Featured spots on high-traffic pages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Dedicated promotional content</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Newsletter mentions to our subscriber base</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-16 bg-muted" id="sponsorship-packages">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Sponsorship Packages</h2>
            <p className="text-xl text-muted-foreground">
              Choose the sponsorship package that best fits your marketing goals and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <Card className="relative hover:shadow-lg transition-shadow">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gray-400 rounded-t-lg"></div>
              <CardHeader className="pb-4">
                <CardTitle>Basic Listing</CardTitle>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-4xl font-extrabold tracking-tight">$49</span>
                  <span className="ml-1 text-xl font-semibold text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-4">
                  Perfect for indie developers and small tools.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-0">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Standard listing in our tools directory</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Basic analytics on listing views</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Link to your website or app</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-8">
                <Button 
                  className="w-full bg-gray-400 hover:bg-gray-500"
                  onClick={() => handleSponsorshipApplication('basic')}
                >
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
            
            {/* Premium Package */}
            <Card className="relative border-2 border-primary shadow-lg scale-105 z-10 hover:shadow-xl transition-shadow">
              <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
                <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
              <div className="absolute top-0 left-0 right-0 h-2 bg-primary rounded-t-lg"></div>
              <CardHeader className="pb-4">
                <CardTitle>Premium Placement</CardTitle>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-4xl font-extrabold tracking-tight">$99</span>
                  <span className="ml-1 text-xl font-semibold text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-4">
                  Ideal for established apps and services.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-0">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Featured placement in the tools directory</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Featured in relevant category pages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Monthly mention in our newsletter</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Detailed analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom promotional description</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-8">
                <Button 
                  className="w-full hover:bg-primary/80"
                  onClick={() => handleSponsorshipApplication('premium')}
                >
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
            
            {/* Enterprise Package */}
            <Card className="relative hover:shadow-lg transition-shadow">
              <div className="absolute top-0 left-0 right-0 h-2 bg-blue-600 rounded-t-lg"></div>
              <CardHeader className="pb-4">
                <CardTitle>Enterprise</CardTitle>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-4xl font-extrabold tracking-tight">$299</span>
                  <span className="ml-1 text-xl font-semibold text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-4">
                  For companies wanting maximum exposure.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-0">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Premium placement at the top of the directory</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Featured on homepage and all category pages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Dedicated blog post about your product</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Social media promotion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Weekly performance reports</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-8">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleSponsorshipApplication('enterprise')}
                >
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsor Testimonials */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Sponsors Say</h2>
            <p className="text-xl text-muted-foreground">
              Hear from businesses that have benefited from sponsoring with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-muted hover:shadow-lg transition-shadow">
              <CardContent className="pt-10 relative">
                <div className="absolute top-0 left-8 -translate-y-1/2">
                  <Star className="h-12 w-12 fill-primary text-primary" />
                </div>
                <blockquote className="text-lg italic mb-6">
                  "Since sponsoring with ShopifieTools.com, we've seen a 35% increase in our app installs. The audience is exactly who we want to reach - engaged Shopify merchants looking for solutions."
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/men/42.jpg" 
                    alt="Jason Miller" 
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">Jason Miller</h3>
                    <p className="text-sm text-muted-foreground">
                      CEO, ShopBoost App
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-muted hover:shadow-lg transition-shadow">
              <CardContent className="pt-10 relative">
                <div className="absolute top-0 left-8 -translate-y-1/2">
                  <Star className="h-12 w-12 fill-primary text-primary" />
                </div>
                <blockquote className="text-lg italic mb-6">
                  "The quality of leads we get from ShopifieTools.com is outstanding. These are serious Shopify store owners who are actively seeking the type of solution we offer."
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/women/24.jpg" 
                    alt="Rebecca Chen" 
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">Rebecca Chen</h3>
                    <p className="text-sm text-muted-foreground">
                      Marketing Director, CartHero
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Apply to Sponsor */}
      <section className="py-16 bg-muted" ref={applicationFormRef}>
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Become a Sponsor</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below to start the sponsorship process. We'll get back to you within 2 business days.
              </p>
            </div>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  navigate('/contact?subject=sponsorship');
                }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-medium">
                        Your Name
                      </label>
                      <Input id="name" placeholder="John Smith" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-medium">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="font-medium">
                        Company Name
                      </label>
                      <Input id="company" placeholder="Your Company" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="website" className="font-medium">
                        Website or App URL
                      </label>
                      <Input id="website" type="url" placeholder="https://yourapp.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="package" className="font-medium">
                      Sponsorship Package
                    </label>
                    <select 
                      id="package" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={selectedPackage}
                      onChange={(e) => setSelectedPackage(e.target.value)}
                    >
                      <option value="" disabled>
                        Select a package
                      </option>
                      <option value="basic">Basic Listing ($49/month)</option>
                      <option value="premium">Premium Placement ($99/month)</option>
                      <option value="enterprise">Enterprise ($299/month)</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="description" className="font-medium">
                      Tell us about your tool or app
                    </label>
                    <Textarea
                      id="description"
                      placeholder="Please describe your tool or app, what problem it solves, and who it's for."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="goals" className="font-medium">
                      Your marketing goals
                    </label>
                    <Textarea
                      id="goals"
                      placeholder="What are you hoping to achieve with this sponsorship? (e.g., more installs, brand awareness, etc.)"
                      rows={3}
                    />
                  </div>
                  
                  <Button className="w-full hover:bg-primary/80" size="lg" type="submit">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-6">
              <div className="border-b border-muted pb-4">
                <h3 className="text-xl font-semibold mb-2">
                  How long does a sponsorship run?
                </h3>
                <p className="text-muted-foreground">
                  Our sponsorships operate on a monthly basis with automatic renewal. You can cancel at any time before your next billing cycle.
                </p>
              </div>
              
              <div className="border-b border-muted pb-4">
                <h3 className="text-xl font-semibold mb-2">
                  Can I change my package during my sponsorship?
                </h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your package at any time. The changes will take effect on your next billing cycle.
                </p>
              </div>
              
              <div className="border-b border-muted pb-4">
                <h3 className="text-xl font-semibold mb-2">
                  What materials do I need to provide?
                </h3>
                <p className="text-muted-foreground">
                  You'll need to provide your logo, app/tool description, screenshots or demo videos, and any specific call-to-action you'd like to use.
                </p>
              </div>
              
              <div className="border-b border-muted pb-4">
                <h3 className="text-xl font-semibold mb-2">
                  How do I track the performance of my sponsorship?
                </h3>
                <p className="text-muted-foreground">
                  Premium and Enterprise sponsors receive access to a real-time analytics dashboard that tracks views, clicks, and conversions.
                </p>
              </div>
              
              <div className="border-b border-muted pb-4">
                <h3 className="text-xl font-semibold mb-2">
                  What types of products can be sponsored?
                </h3>
                <p className="text-muted-foreground">
                  We accept Shopify apps, services, tools, educational resources, and other products that are valuable to Shopify merchants and developers.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <p className="text-lg font-medium mb-4">
                Have another question?
              </p>
              <Button variant="outline" className="flex items-center mx-auto hover:bg-muted" asChild>
                <a href="/faq">
                  View FAQ
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sponsorship;
