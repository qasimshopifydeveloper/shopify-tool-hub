
import { ArrowRight, FileCode, BarChart2, Search, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FeaturedTools = () => {
  const tools = [
    {
      icon: FileCode,
      title: "Liquid Code Generator",
      description: "Generate clean, efficient Liquid code snippets for your Shopify theme customizations with this AI-powered tool.",
      path: "/tools/liquid-generator",
    },
    {
      icon: BarChart2,
      title: "Product Performance Analyzer",
      description: "Identify your best and worst performing products with this data visualization tool to optimize your inventory.",
      path: "/tools/product-analyzer",
    },
    {
      icon: Search,
      title: "SEO Checker",
      description: "Analyze your Shopify store's SEO performance and get actionable recommendations for improvement.",
      path: "/tools/seo-checker",
    },
    {
      icon: RefreshCw,
      title: "Bulk Product Editor",
      description: "Edit multiple products at once with this powerful bulk editing tool to save hours of manual work.",
      path: "/tools/bulk-editor",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Tools
          </h2>
          <p className="text-xl text-muted-foreground">
            Check out some of our most popular and powerful tools that Shopify users love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-3">
                  <tool.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-4">
                <Button asChild variant="ghost" className="w-full justify-start hover:bg-primary/10">
                  <Link to={tool.path} className="flex items-center">
                    Start Using Tool
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/tools">Browse All Tools</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
