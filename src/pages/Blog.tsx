
import { useState } from "react";
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
import { Calendar, Search, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

// Blog post type definition
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: number;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  thumbnailUrl: string;
  slug: string;
}

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Mock blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "10 Essential Shopify SEO Tips to Boost Your Store's Visibility",
      excerpt: "Learn how to optimize your Shopify store for search engines with these proven SEO strategies that can help increase your organic traffic and sales.",
      publishDate: "2023-05-15",
      readTime: 8,
      category: "seo",
      author: {
        name: "Emily Johnson",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      thumbnailUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      slug: "essential-shopify-seo-tips",
    },
    {
      id: "2",
      title: "How to Create a High-Converting Product Page on Shopify",
      excerpt: "Discover the key elements that make up a high-converting product page and learn how to implement them in your Shopify store.",
      publishDate: "2023-06-22",
      readTime: 10,
      category: "conversion",
      author: {
        name: "Michael Rodriguez",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      slug: "high-converting-product-page",
    },
    {
      id: "3",
      title: "Understanding Shopify's Liquid Template Language: A Beginner's Guide",
      excerpt: "A comprehensive introduction to Liquid, Shopify's template language. Learn the basics of variables, loops, conditionals, and more.",
      publishDate: "2023-07-10",
      readTime: 12,
      category: "development",
      author: {
        name: "David Chen",
        avatar: "https://randomuser.me/api/portraits/men/36.jpg",
      },
      thumbnailUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      slug: "shopify-liquid-beginners-guide",
    },
    {
      id: "4",
      title: "5 Shopify Apps That Will Skyrocket Your Sales",
      excerpt: "Discover the top Shopify apps that can help you increase sales, improve customer experience, and streamline your operations.",
      publishDate: "2023-08-05",
      readTime: 6,
      category: "apps",
      author: {
        name: "Sarah Thompson",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      },
      thumbnailUrl: "https://images.unsplash.com/photo-1556742031-c6961e8560b0",
      slug: "shopify-apps-skyrocket-sales",
    },
    {
      id: "5",
      title: "Building Your First Shopify App: A Step-by-Step Tutorial",
      excerpt: "Learn how to build your own Shopify app from scratch with this comprehensive tutorial covering everything from setup to deployment.",
      publishDate: "2023-09-18",
      readTime: 15,
      category: "development",
      author: {
        name: "David Chen",
        avatar: "https://randomuser.me/api/portraits/men/36.jpg",
      },
      thumbnailUrl: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613",
      slug: "build-first-shopify-app",
    },
    {
      id: "6",
      title: "Mastering Shopify Theme Customization Without Coding",
      excerpt: "Discover how to create a unique Shopify store without writing a single line of code using built-in customization options and apps.",
      publishDate: "2023-10-03",
      readTime: 9,
      category: "design",
      author: {
        name: "Emily Johnson",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      thumbnailUrl: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815",
      slug: "shopify-theme-customization-no-code",
    },
  ];

  // Blog categories
  const categories = [
    { value: "all", label: "All Categories" },
    { value: "seo", label: "SEO" },
    { value: "conversion", label: "Conversion" },
    { value: "development", label: "Development" },
    { value: "apps", label: "Apps" },
    { value: "design", label: "Design" },
  ];

  // Filter blog posts based on category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <Layout>
      {/* Banner/Header */}
      <section className="relative py-20 md:py-28 bg-muted">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')`,
          }}
        />
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Shopify Tools Blog – Tips, Insights, and Updates
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover the latest articles, tutorials, and resources to help you make the most of your Shopify store.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Filters and Search */}
              <div className="mb-12 flex flex-col md:flex-row gap-4 md:items-center">
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
                    placeholder="Search articles..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="md:w-1/3 h-48 md:h-auto relative">
                        <Link to={`/blog/${post.slug}`}>
                          <img 
                            src={post.thumbnailUrl} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                        </Link>
                      </div>
                      <div className="md:w-2/3 flex flex-col">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium">
                              <Tag className="h-3 w-3 mr-1" />
                              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                            </div>
                          </div>
                          <CardTitle className="text-2xl">
                            <Link 
                              to={`/blog/${post.slug}`} 
                              className="hover:text-primary transition-colors"
                            >
                              {post.title}
                            </Link>
                          </CardTitle>
                          <CardDescription>{post.excerpt}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="flex items-center mt-2">
                            <img 
                              src={post.author.avatar} 
                              alt={post.author.name} 
                              className="h-8 w-8 rounded-full mr-2"
                            />
                            <span className="text-sm text-muted-foreground">
                              {post.author.name}
                            </span>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(post.publishDate)}
                            <span className="mx-2">•</span>
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime} min read
                          </div>
                          <Button asChild variant="ghost" size="sm">
                            <Link to={`/blog/${post.slug}`} className="flex items-center">
                              Read More
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                ))}
                
                {/* Empty state */}
                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <div className="bg-muted inline-flex rounded-full p-6 mb-4">
                      <Search className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                    <p className="text-muted-foreground mb-4">
                      No articles match your current search criteria. Try adjusting your filters or search terms.
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
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Categories Widget */}
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.filter(cat => cat.value !== "all").map((category) => (
                      <button
                        key={category.value}
                        className={`flex justify-between w-full p-2 rounded-md hover:bg-muted transition-colors ${
                          selectedCategory === category.value ? "bg-primary/10 text-primary font-medium" : ""
                        }`}
                        onClick={() => setSelectedCategory(category.value)}
                      >
                        <span>{category.label}</span>
                        <span className="bg-muted rounded-full px-2 text-xs">
                          {blogPosts.filter(post => post.category === category.value).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Recent Posts Widget */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {blogPosts
                      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
                      .slice(0, 3)
                      .map((post) => (
                        <div key={post.id} className="flex gap-3">
                          <Link to={`/blog/${post.slug}`}>
                            <img 
                              src={post.thumbnailUrl} 
                              alt={post.title} 
                              className="w-16 h-16 object-cover rounded-md"
                            />
                          </Link>
                          <div className="flex flex-col">
                            <Link 
                              to={`/blog/${post.slug}`} 
                              className="font-medium hover:text-primary transition-colors line-clamp-2"
                            >
                              {post.title}
                            </Link>
                            <span className="text-xs text-muted-foreground">
                              {formatDate(post.publishDate)}
                            </span>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </CardContent>
              </Card>
              
              {/* Newsletter Signup */}
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>Subscribe to Our Newsletter</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Get the latest Shopify tips and tools delivered to your inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input
                      placeholder="Your email address"
                      type="email"
                      className="bg-primary-foreground text-foreground"
                    />
                    <Button 
                      className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    >
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
