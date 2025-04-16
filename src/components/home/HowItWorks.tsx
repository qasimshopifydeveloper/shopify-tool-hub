
import { ClipboardCheck, ArrowRight, Settings, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Choose a Tool",
      description: "Browse our collection of tools and select the one that addresses your specific Shopify need.",
    },
    {
      icon: Settings,
      title: "Configure Options",
      description: "Customize the tool settings to match your specific store requirements.",
    },
    {
      icon: Zap,
      title: "Apply to Your Store",
      description: "Follow the simple instructions to implement the solution in your Shopify store.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Getting started with ShopifyTools.com is quick and easy. Follow these simple steps:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0 z-0"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="bg-background rounded-full p-6 mb-6 shadow-md border-2 border-primary">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              
              <div className="bg-muted rounded-lg p-6 w-full h-full">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-24 transform translate-x-1/2">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
