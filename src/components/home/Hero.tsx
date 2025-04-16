
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 -z-10" />
      
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Welcome to <span className="text-primary">ShopifyTools.com</span> – Your Ultimate Resource for Shopify Tools!
            </h1>
            <p className="text-xl text-muted-foreground">
              Free, powerful, and easy-to-use tools created by a certified Shopify developer to make your Shopify journey smoother, more profitable, and easier to manage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="font-semibold">
                <Link to="/tools">
                  Explore Our Tools Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            {/* Developer at work image */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Developer working with Shopify tools" 
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-primary text-white rounded-lg p-3 shadow-lg">
              <span className="font-bold">100+</span> Free Tools
            </div>
            <div className="absolute bottom-8 -right-4 bg-white text-foreground rounded-lg p-3 shadow-lg">
              <span className="font-bold">Certified</span> Developer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
