import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search, 
  Smartphone, 
  Code, 
  AppWindow, 
  BookOpen, 
  FileCode, 
  BarChart2, 
  RefreshCw,
  ShoppingCart,
  Globe,
  Zap,
  Layers,
  Database,
  Percent,
  Truck,
  Users,
  Image,
  AlertCircle 
} from "lucide-react";
import { Link } from "react-router-dom";

// Tool type definition
interface Tool {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  category: string;
  path: string;
}

const Tools = () => {
  // Query parameters handling
  const [searchParams] = useState<URLSearchParams>(
    new URLSearchParams(window.location.search)
  );
  const initialCategory = searchParams.get("category") || "all";
  
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Mock tools data
  const toolsData: Tool[] = [
    {
      id: "liquid-generator",
      title: "Liquid Code Generator",
      description: "Generate clean, efficient Liquid code snippets for your Shopify theme customizations with this AI-powered tool.",
      icon: FileCode,
      category: "developer",
      path: "/tools/liquid-generator",
    },
    {
      id: "product-analyzer",
      title: "Product Performance Analyzer",
      description: "Identify your best and worst performing products with this data visualization tool to optimize your inventory.",
      icon: BarChart2,
      category: "merchant",
      path: "/tools/product-analyzer",
    },
    {
      id: "seo-checker",
      title: "SEO Checker",
      description: "Analyze your Shopify store's SEO performance and get actionable recommendations for improvement.",
      icon: Globe,
      category: "merchant",
      path: "/tools/seo-checker",
    },
    {
      id: "bulk-editor",
      title: "Bulk Product Editor",
      description: "Edit multiple products at once with this powerful bulk editing tool to save hours of manual work.",
      icon: RefreshCw,
      category: "merchant",
      path: "/tools/bulk-editor",
    },
    {
      id: "theme-debugger",
      title: "Theme Debugger",
      description: "Quickly identify and fix issues in your Shopify theme code with this interactive debugging tool.",
      icon: AlertCircle,
      category: "developer",
      path: "/tools/theme-debugger",
    },
    {
      id: "api-tester",
      title: "Shopify API Tester",
      description: "Test your Shopify API calls and responses in a sandbox environment before implementing them in your app.",
      icon: Code,
      category: "app-developer",
      path: "/tools/api-tester",
    },
    {
      id: "image-optimizer",
      title: "Image Optimizer",
      description: "Optimize your product images for faster loading times and better SEO without losing quality.",
      icon: Image,
      category: "merchant",
      path: "/tools/image-optimizer",
    },
    {
      id: "discount-calculator",
      title: "Discount Strategy Calculator",
      description: "Calculate the optimal discount strategies to maximize profits while moving inventory.",
      icon: Percent,
      category: "merchant",
      path: "/tools/discount-calculator",
    },
    {
      id: "shipping-rate-calculator",
      title: "Shipping Rate Calculator",
      description: "Calculate and compare different shipping methods and rates for your products.",
      icon: Truck,
      category: "merchant",
      path: "/tools/shipping-calculator",
    },
    {
      id: "customer-segmentation",
      title: "Customer Segmentation Tool",
      description: "Segment your customers based on purchasing behavior to create targeted marketing campaigns.",
      icon: Users,
      category: "merchant",
      path: "/tools/customer-segmentation",
    },
    {
      id: "app-scaffold-generator",
      title: "App Scaffold Generator",
      description: "Generate a starter codebase for your Shopify app with all the necessary files and configurations.",
      icon: AppWindow,
      category: "app-developer",
      path: "/tools/app-scaffold",
    },
    {
      id: "database-schema-designer",
      title: "App Database Schema Designer",
      description: "Design and visualize your Shopify app's database schema with this interactive tool.",
      icon: Database,
      category: "app-developer",
      path: "/tools/database-schema",
    },
    {
      id: "theme-structure-learning",
      title: "Theme Structure Tutorial",
      description: "Learn how Shopify themes are structured with this interactive guide for beginners.",
      icon: Layers,
      category: "learner",
      path: "/tools/theme-structure",
    },
    {
      id: "liquid-syntax-guide",
      title: "Liquid Syntax Guide",
      description: "A comprehensive guide to Liquid syntax with examples for Shopify theme development.",
      icon: BookOpen,
      category: "learner",
      path: "/tools/liquid-syntax",
    },
    {
      id: "store-speed-optimizer",
      title: "Store Speed Optimizer",
      description: "Analyze and optimize your Shopify store's speed with actionable recommendations.",
      icon: Zap,
      category: "merchant",
      path: "/tools/speed-optimizer",
    },
    {
      id: "mobile-responsiveness",
      title: "Mobile Responsiveness Checker",
      description: "Test your Shopify store's responsiveness across different mobile devices and screen sizes.",
      icon: Smartphone,
      category: "developer",
      path: "/tools/responsive-checker",
    },
  ];

  // Categories for filter
  const categories = [
    { value: "all", label: "All Tools" },
    { value: "merchant", label: "For Merchants" },
    { value: "developer", label: "For Developers" },
    { value: "app-developer", label: "For App Developers" },
    { value: "learner", label: "For Learners" },
  ];

  // Filter tools based on category and search query
  const filteredTools = toolsData.filter((tool) => {
    const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory;
    const matchesSearch = 
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "merchant":
        return ShoppingCart;
      case "developer":
        return Code;
      case "app-developer":
        return AppWindow;
      case "learner":
        return BookOpen;
      default:
        return FileCode;
    }
  };

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory !== "all") {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("category", selectedCategory);
      window.history.pushState({}, "", newUrl);
    } else {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete("category");
      window.history.pushState({}, "", newUrl);
    }
  }, [selectedCategory]);

  return (
    <Layout>
      {/* Header/Banner */}
      <section className="relative py-20 md:py-28 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              All Shopify Tools in One Place
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Browse our collection of free, powerful tools designed to help you succeed with your Shopify store or development projects.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          {/* Filters */}
          <div className="mb-12 flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <Select 
              value={selectedCategory} 
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="relative w-full md:w-[300px]">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tools..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Display number of results */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredTools.length} of {toolsData.length} tools
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map((tool) => (
              <Card key={tool.id} className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                      <tool.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium">
                      {(() => {
                        const CategoryIcon = getCategoryIcon(tool.category);
                        return <CategoryIcon className="h-3 w-3 mr-1" />;
                      })()}
                      {tool.category === "merchant" 
                        ? "For Merchants" 
                        : tool.category === "developer" 
                        ? "For Developers" 
                        : tool.category === "app-developer" 
                        ? "For App Developers" 
                        : "For Learners"}
                    </div>
                  </div>
                  <CardTitle>{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-2">
                  <Button asChild className="w-full hover:bg-primary/90 text-white transition-colors">
                    <Link to={tool.path}>
                      Start Using Tool
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Empty state */}
          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-muted inline-flex rounded-full p-6 mb-4">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No tools found</h3>
              <p className="text-muted-foreground mb-4">
                No tools match your current search criteria. Try adjusting your filters or search terms.
              </p>
              <Button onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Tools;
