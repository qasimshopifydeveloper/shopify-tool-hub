
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_2)">
                <path d="M80 0H0V80H80V0Z" fill="white"/>
                <path d="M0 0L80 80" stroke="white" strokeWidth="2"/>
                <path d="M80 0L0 80" stroke="white" strokeWidth="2"/>
                <path d="M40 0V80" stroke="white" strokeWidth="2"/>
                <path d="M0 40H80" stroke="white" strokeWidth="2"/>
              </g>
              <defs>
                <clipPath id="clip0_1_2">
                  <rect width="80" height="80" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to optimize your Shopify experience?
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Join thousands of Shopify merchants and developers who are using our tools to save time, increase sales, and build better stores.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                variant="secondary" 
                className="text-primary font-semibold text-lg"
              >
                <Link to="/tools">
                  Browse All Tools
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg"
              >
                <Link to="/contact">
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
