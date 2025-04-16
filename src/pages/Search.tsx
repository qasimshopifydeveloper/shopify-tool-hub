
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search as SearchIcon, FileCode, BarChart2, Globe, RefreshCw, AlertCircle, Code, AppWindow, BookOpen, Image, Percent, Truck, Users, Database, Layers, Zap, Smartphone, ShoppingCart } from "lucide-react";

// Type definitions for search results
interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: "tool" | "blog" | "faq" | "page";
  path: string;
  icon?: React.ElementType;
  category?: string;
}

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState<string>(query);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  // Function to get icon for tool results
  const getToolIcon = (id: string): React.ElementType => {
    const iconMap: Record<string, React.ElementType> = {
      "liquid-generator": FileCode,
      "product-analyzer": BarChart2,
      "seo-checker": Globe,
      "bulk-editor": RefreshCw,
      "theme-debugger": AlertCircle,
      "api-tester": Code,
      "image-optimizer": Image,
      "discount-calculator": Percent,
      "shipping-rate-calculator": Truck,
      "customer-segmentation": Users,
      "app-scaffold-generator": AppWindow,
      "database-schema-designer": Database,
      "theme-structure-learning": Layers,
      "liquid-syntax-guide": BookOpen,
      "store-speed-optimizer": Zap,
      "mobile-responsiveness": Smartphone,
    };
    return iconMap[id] || FileCode;
  };

  // Function to get category icon
  const getCategoryIcon = (category: string): React.ElementType => {
    const categoryIcons: Record<string, React.ElementType> = {
      "merchant": ShoppingCart,
      "developer": Code,
      "app-developer": AppWindow,
      "learner": BookOpen,
    };
    return categoryIcons[category] || FileCode;
  };

  // Mock data for tools (this would ideally come from a central data source)
  const toolsData = [
    {
      id: "liquid-generator",
      title: "Liquid Code Generator",
      description: "Generate clean, efficient Liquid code snippets for your Shopify theme customizations with this AI-powered tool.",
      type: "tool" as const,
      path: "/tools/liquid-generator",
      icon: FileCode,
      category: "developer",
    },
    {
      id: "product-analyzer",
      title: "Product Performance Analyzer",
      description: "Identify your best and worst performing products with this data visualization tool to optimize your inventory.",
      type: "tool" as const,
      path: "/tools/product-analyzer",
      icon: BarChart2,
      category: "merchant",
    },
    {
      id: "seo-checker",
      title: "SEO Checker",
      description: "Analyze your Shopify store's SEO performance and get actionable recommendations for improvement.",
      type: "tool" as const,
      path: "/tools/seo-checker",
      icon: Globe,
      category: "merchant",
    },
    {
      id: "bulk-editor",
      title: "Bulk Product Editor",
      description: "Edit multiple products at once with this powerful bulk editing tool to save hours of manual work.",
      type: "tool" as const,
      path: "/tools/bulk-editor",
      icon: RefreshCw,
      category: "merchant",
    },
    {
      id: "theme-debugger",
      title: "Theme Debugger",
      description: "Quickly identify and fix issues in your Shopify theme code with this interactive debugging tool.",
      type: "tool" as const,
      path: "/tools/theme-debugger",
      icon: AlertCircle,
      category: "developer",
    },
    {
      id: "api-tester",
      title: "Shopify API Tester",
      description: "Test your Shopify API calls and responses in a sandbox environment before implementing them in your app.",
      type: "tool" as const,
      path: "/tools/api-tester",
      icon: Code,
      category: "app-developer",
    },
    {
      id: "image-optimizer",
      title: "Image Optimizer",
      description: "Optimize your product images for faster loading times and better SEO without losing quality.",
      type: "tool" as const,
      path: "/tools/image-optimizer",
      icon: Image,
      category: "merchant",
    },
    {
      id: "discount-calculator",
      title: "Discount Strategy Calculator",
      description: "Calculate the optimal discount strategies to maximize profits while moving inventory.",
      type: "tool" as const,
      path: "/tools/discount-calculator",
      icon: Percent,
      category: "merchant",
    },
    {
      id: "shipping-rate-calculator",
      title: "Shipping Rate Calculator",
      description: "Calculate and compare different shipping methods and rates for your products.",
      type: "tool" as const,
      path: "/tools/shipping-calculator",
      icon: Truck,
      category: "merchant",
    },
    {
      id: "customer-segmentation",
      title: "Customer Segmentation Tool",
      description: "Segment your customers based on purchasing behavior to create targeted marketing campaigns.",
      type: "tool" as const,
      path: "/tools/customer-segmentation",
      icon: Users,
      category: "merchant",
    },
    {
      id: "app-scaffold-generator",
      title: "App Scaffold Generator",
      description: "Generate a starter codebase for your Shopify app with all the necessary files and configurations.",
      type: "tool" as const,
      path: "/tools/app-scaffold",
      icon: AppWindow,
      category: "app-developer",
    },
    {
      id: "database-schema-designer",
      title: "App Database Schema Designer",
      description: "Design and visualize your Shopify app's database schema with this interactive tool.",
      type: "tool" as const,
      path: "/tools/database-schema",
      icon: Database,
      category: "app-developer",
    },
    {
      id: "theme-structure-learning",
      title: "Theme Structure Tutorial",
      description: "Learn how Shopify themes are structured with this interactive guide for beginners.",
      type: "tool" as const,
      path: "/tools/theme-structure",
      icon: Layers,
      category: "learner",
    },
    {
      id: "liquid-syntax-guide",
      title: "Liquid Syntax Guide",
      description: "A comprehensive guide to Liquid syntax with examples for Shopify theme development.",
      type: "tool" as const,
      path: "/tools/liquid-syntax",
      icon: BookOpen,
      category: "learner",
    },
    {
      id: "store-speed-optimizer",
      title: "Store Speed Optimizer",
      description: "Analyze and optimize your Shopify store's speed with actionable recommendations.",
      type: "tool" as const,
      path: "/tools/speed-optimizer",
      icon: Zap,
      category: "merchant",
    },
    {
      id: "mobile-responsiveness",
      title: "Mobile Responsiveness Checker",
      description: "Test your Shopify store's responsiveness across different mobile devices and screen sizes.",
      type: "tool" as const,
      path: "/tools/responsive-checker",
      icon: Smartphone,
      category: "developer",
    },
  ];

  // Mock data for pages
  const pagesData: SearchResult[] = [
    {
      id: "home",
      title: "Home",
      description: "Welcome to ShopifieTools - Your ultimate resource for Shopify tools!",
      type: "page",
      path: "/",
    },
    {
      id: "about",
      title: "About Us",
      description: "Learn about ShopifieTools and our mission to empower Shopify users worldwide.",
      type: "page",
      path: "/about",
    },
    {
      id: "tools",
      title: "All Tools",
      description: "Browse our collection of free, powerful tools for Shopify merchants and developers.",
      type: "page",
      path: "/tools",
    },
    {
      id: "blog",
      title: "Blog",
      description: "Tips, insights, and updates about Shopify development and ecommerce.",
      type: "page",
      path: "/blog",
    },
    {
      id: "sponsorship",
      title: "Sponsorship",
      description: "Promote your Shopify app or tool on ShopifieTools.com",
      type: "page",
      path: "/sponsorship",
    },
    {
      id: "contact",
      title: "Contact",
      description: "Get in touch with our team for inquiries, support, or suggestions.",
      type: "page",
      path: "/contact",
    },
    {
      id: "faq",
      title: "FAQ",
      description: "Frequently asked questions about ShopifieTools and our services.",
      type: "page",
      path: "/faq",
    },
  ];

  // Mock blog posts
  const blogPostsData: SearchResult[] = [
    {
      id: "blog-1",
      title: "How to Optimize Your Shopify Store Speed",
      description: "Learn how to improve your Shopify store loading times for better user experience and SEO ranking.",
      type: "blog",
      path: "/blog/optimize-shopify-store-speed",
    },
    {
      id: "blog-2",
      title: "Essential Shopify Apps for New Store Owners",
      description: "A curated list of must-have Shopify apps to boost your new store's functionality and performance.",
      type: "blog",
      path: "/blog/essential-shopify-apps",
    },
    {
      id: "blog-3",
      title: "Mastering Liquid: Tips and Tricks",
      description: "Advanced techniques for Shopify theme developers using Liquid templating language.",
      type: "blog",
      path: "/blog/mastering-liquid",
    },
  ];

  // Mock FAQ data
  const faqData: SearchResult[] = [
    {
      id: "faq-1",
      title: "How much do the tools on ShopifieTools cost?",
      description: "Most tools on ShopifieTools are completely free to use. Some advanced features may require a subscription.",
      type: "faq",
      path: "/faq#cost",
    },
    {
      id: "faq-2",
      title: "Do I need to create an account to use the tools?",
      description: "No, most tools can be used without creating an account. However, creating an account allows you to save your work and settings.",
      type: "faq",
      path: "/faq#account",
    },
    {
      id: "faq-3",
      title: "Are the tools compatible with all Shopify plans?",
      description: "Yes, our tools work with all Shopify plans including Basic, Shopify, and Advanced.",
      type: "faq",
      path: "/faq#compatibility",
    },
  ];

  // Combined all data for searching
  const allSearchableData: SearchResult[] = [
    ...toolsData,
    ...pagesData,
    ...blogPostsData,
    ...faqData,
  ];

  // Perform search when query changes
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simple search implementation - search in title and description
    const searchResults = allSearchableData.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(query.toLowerCase());
      const descriptionMatch = item.description.toLowerCase().includes(query.toLowerCase());
      return titleMatch || descriptionMatch;
    });
    
    setResults(searchResults);
    setIsSearching(false);
  }, [query]);

  // Handle form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update URL with search query
    window.history.pushState({}, "", `/search?q=${encodeURIComponent(searchQuery)}`);
    
    // Simple search implementation
    const searchResults = allSearchableData.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      const descriptionMatch = item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return titleMatch || descriptionMatch;
    });
    
    setResults(searchResults);
  };

  return (
    <Layout>
      <section className="relative py-20 md:py-28 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Search Results
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {query 
                ? `Showing results for "${query}"`
                : "Search for tools, blog posts, and resources"
              }
            </p>

            {/* Search form */}
            <form onSubmit={handleSearch} className="flex w-full max-w-lg gap-2">
              <Input
                type="search"
                placeholder="Search..."
                className="flex-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit">
                <SearchIcon className="h-4 w-4 mr-2" />
                Search
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          {/* Display number of results */}
          {query && (
            <div className="mb-8">
              <p className="text-muted-foreground">
                {results.length === 0 
                  ? "No results found" 
                  : `Found ${results.length} result${results.length === 1 ? "" : "s"}`}
              </p>
            </div>
          )}

          {/* Results */}
          {isSearching ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <>
              {/* No results state */}
              {query && results.length === 0 && (
                <div className="text-center py-12">
                  <div className="bg-muted inline-flex rounded-full p-6 mb-4">
                    <SearchIcon className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-4">
                    We couldn't find any matches for "{query}". Try different keywords or browse our tools.
                  </p>
                  <Button asChild>
                    <Link to="/tools">
                      Browse All Tools
                    </Link>
                  </Button>
                </div>
              )}

              {/* Results grid */}
              {results.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.map((result) => (
                    <Card key={result.id} className="flex flex-col h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          {result.type === "tool" ? (
                            <>
                              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                                {(() => {
                                  const Icon = getToolIcon(result.id);
                                  return <Icon className="h-6 w-6 text-primary" />;
                                })()}
                              </div>
                              {result.category && (
                                <div className="flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium">
                                  {(() => {
                                    const CategoryIcon = getCategoryIcon(result.category);
                                    return <CategoryIcon className="h-3 w-3 mr-1" />;
                                  })()}
                                  {result.category === "merchant" 
                                    ? "For Merchants" 
                                    : result.category === "developer" 
                                    ? "For Developers" 
                                    : result.category === "app-developer" 
                                    ? "For App Developers" 
                                    : "For Learners"}
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="rounded-full bg-secondary/10 w-12 h-12 flex items-center justify-center">
                              {result.type === "blog" ? (
                                <BookOpen className="h-6 w-6 text-secondary" />
                              ) : result.type === "faq" ? (
                                <AlertCircle className="h-6 w-6 text-secondary" />
                              ) : (
                                <Globe className="h-6 w-6 text-secondary" />
                              )}
                            </div>
                          )}
                          <div className="flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium">
                            {result.type === "tool" 
                              ? "Tool" 
                              : result.type === "blog" 
                              ? "Blog" 
                              : result.type === "faq" 
                              ? "FAQ" 
                              : "Page"}
                          </div>
                        </div>
                        <CardTitle>{result.title}</CardTitle>
                        <CardDescription>{result.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="mt-auto pt-2">
                        <Button asChild className="w-full hover:bg-primary/90">
                          <Link to={result.path}>
                            {result.type === "tool" 
                              ? "Start Using Tool" 
                              : result.type === "blog" 
                              ? "Read Article" 
                              : result.type === "faq" 
                              ? "View Answer" 
                              : "Visit Page"}
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Search;
