
import { ShoppingCart, Code, AppWindow, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UserCategories = () => {
  const categories = [
    {
      icon: ShoppingCart,
      title: "For Shopify Merchants",
      description: "Boost sales, optimize your store, and automate tedious tasks with tools specifically designed for store owners.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      cta: "Browse Merchant Tools",
      path: "/tools?category=merchant",
    },
    {
      icon: Code,
      title: "For Shopify Developers",
      description: "Access technical resources, debugging tools, and code generators to streamline your development workflow.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      cta: "Discover Developer Tools",
      path: "/tools?category=developer",
    },
    {
      icon: AppWindow,
      title: "For Shopify App Developers",
      description: "Find API tools, testing utilities, and integration frameworks to build better Shopify apps faster.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      cta: "Explore App Developer Tools",
      path: "/tools?category=app-developer",
    },
    {
      icon: BookOpen,
      title: "For Shopify Learners",
      description: "Learn Shopify development, store management, and best practices with beginner-friendly tools and resources.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      cta: "Start Learning Shopify",
      path: "/tools?category=learner",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tools for Everyone in the Shopify Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground">
            Whether you're a store owner, developer, app builder, or just learning Shopify, we have tools designed specifically for your needs.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative rounded-lg overflow-hidden h-64 md:h-80">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                </div>
              </div>
              
              <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                <div className="flex flex-col space-y-4">
                  <div className="inline-block bg-primary/10 p-3 rounded-lg w-fit">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{category.title}</h3>
                  <p className="text-lg text-muted-foreground">{category.description}</p>
                  <div className="pt-4">
                    <Button asChild>
                      <Link to={category.path}>{category.cta}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserCategories;
