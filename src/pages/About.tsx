
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BadgeCheck, Award, Users, Calendar } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Banner/Header */}
      <section className="relative py-20 md:py-28 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ShopifyTools – Empowering Shopify Users Worldwide
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn about our story, mission, and the developer behind the tools that are helping Shopify merchants and developers succeed.
            </p>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <div className="space-y-4 text-lg">
                <p>
                  I started my journey with Shopify in 2015 as a store owner trying to sell handmade products online. Like many merchants, I quickly hit roadblocks when trying to customize my store and optimize it for higher conversions.
                </p>
                <p>
                  The lack of accessible, affordable tools led me to learn how to code and develop my own solutions. What started as personal tools to solve my own problems gradually grew into a collection that I began sharing with other Shopify store owners.
                </p>
                <p>
                  As more and more people found value in these tools, I decided to formally launch ShopifyTools.com in 2020 as a dedicated platform to help the entire Shopify community overcome common challenges without the need for expensive apps or complex development work.
                </p>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643" 
                alt="Developer working on Shopify tools" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certified Development Journey */}
      <section className="py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Certified Development Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>
            
            <div className="space-y-16 relative">
              {/* 2015 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12">
                  <div className="bg-primary text-primary-foreground rounded-full py-1 px-4 inline-block font-bold mb-4">2015</div>
                  <h3 className="text-2xl font-bold mb-2">First Shopify Store</h3>
                  <p className="text-muted-foreground">
                    Launched my first Shopify store and began learning the platform as a merchant.
                  </p>
                </div>
                <div className="hidden md:block"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
              </div>
              
              {/* 2017 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="hidden md:block"></div>
                <div className="md:pl-12">
                  <div className="bg-primary text-primary-foreground rounded-full py-1 px-4 inline-block font-bold mb-4">2017</div>
                  <h3 className="text-2xl font-bold mb-2">Freelance Developer</h3>
                  <p className="text-muted-foreground">
                    Began offering Shopify development services after building a reputation for creating effective custom solutions.
                  </p>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
              </div>
              
              {/* 2019 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12">
                  <div className="bg-primary text-primary-foreground rounded-full py-1 px-4 inline-block font-bold mb-4">2019</div>
                  <h3 className="text-2xl font-bold mb-2">Shopify Certification</h3>
                  <p className="text-muted-foreground">
                    Earned official Shopify Partner certification and began building more advanced tools and applications.
                  </p>
                </div>
                <div className="hidden md:block"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
              </div>
              
              {/* 2020 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="hidden md:block"></div>
                <div className="md:pl-12">
                  <div className="bg-primary text-primary-foreground rounded-full py-1 px-4 inline-block font-bold mb-4">2020</div>
                  <h3 className="text-2xl font-bold mb-2">ShopifyTools.com Launch</h3>
                  <p className="text-muted-foreground">
                    Officially launched ShopifyTools.com to share my collection of tools with the broader Shopify community.
                  </p>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
              </div>
              
              {/* Present */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12">
                  <div className="bg-primary text-primary-foreground rounded-full py-1 px-4 inline-block font-bold mb-4">Today</div>
                  <h3 className="text-2xl font-bold mb-2">Ongoing Growth</h3>
                  <p className="text-muted-foreground">
                    Continuing to develop new tools and resources based on community feedback and evolving Shopify platform needs.
                  </p>
                </div>
                <div className="hidden md:block"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The ShopifyTools Mission */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The ShopifyTools Mission</h2>
            <p className="text-xl text-muted-foreground">
              We're committed to making the Shopify ecosystem more accessible and efficient for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <BadgeCheck className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-muted-foreground">
                Every tool is thoroughly tested and maintained to ensure it works flawlessly for all users, regardless of technical expertise.
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-muted-foreground">
                We believe that powerful tools should be available to everyone, not just those with large budgets or technical expertise.
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-muted-foreground">
                We're building a supportive community of Shopify users who help each other succeed through knowledge sharing and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Script Flow Creation */}
      <section className="py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Tool Development Process</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full min-w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Research</h3>
                    <p className="text-muted-foreground">
                      We identify common problems faced by Shopify users through community feedback, surveys, and support requests.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full min-w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Development</h3>
                    <p className="text-muted-foreground">
                      Tools are built with a focus on simplicity, efficiency, and accessibility, ensuring they work across all Shopify plans.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full min-w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Testing</h3>
                    <p className="text-muted-foreground">
                      Rigorous testing across different stores, themes, and scenarios ensures reliability and effectiveness.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full min-w-8 h-8 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Refinement</h3>
                    <p className="text-muted-foreground">
                      Based on user feedback, tools are continuously improved to enhance functionality and user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998" 
                  alt="Tool development process" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="bg-card border rounded-lg p-8 md:p-12 shadow-sm text-center">
            <h2 className="text-3xl font-bold mb-4">Have Questions or Feedback?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking to improve our tools and better serve the Shopify community. Reach out with your thoughts, questions, or partnership ideas.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
