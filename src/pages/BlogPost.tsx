
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Tag, User, ArrowRight } from "lucide-react";

// Blog post type definition
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
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

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real application, this would be an API call
    // For now, we'll use mock data
    const fetchPost = () => {
      setLoading(true);
      
      // Mock blog posts data - same as in Blog.tsx
      const blogPosts: BlogPost[] = [
        {
          id: "1",
          title: "10 Essential Shopify SEO Tips to Boost Your Store's Visibility",
          excerpt: "Learn how to optimize your Shopify store for search engines with these proven SEO strategies that can help increase your organic traffic and sales.",
          content: `
            <h2>Introduction to Shopify SEO</h2>
            <p>Search Engine Optimization (SEO) is crucial for any online store, and Shopify is no exception. When done right, SEO can significantly increase your store's visibility, drive more organic traffic, and boost your sales without requiring a large advertising budget.</p>
            
            <h2>1. Optimize Your Store Structure</h2>
            <p>A well-organized store structure makes it easier for search engines to crawl and index your site. Create a logical hierarchy with clear categories and subcategories. Limit the depth of your navigation so that all products are accessible within 3 clicks from the homepage.</p>
            
            <h2>2. Conduct Thorough Keyword Research</h2>
            <p>Understanding what terms your potential customers are searching for is the foundation of good SEO. Use tools like Google Keyword Planner, Ahrefs, or SEMrush to find relevant keywords with good search volume and manageable competition.</p>
            
            <h2>3. Optimize Product Titles and Descriptions</h2>
            <p>Include your main keywords in your product titles naturally. Write unique, detailed product descriptions that incorporate relevant keywords while providing valuable information to customers. Avoid copying manufacturers' descriptions, as duplicate content can hurt your SEO.</p>
            
            <h2>4. Improve Site Speed</h2>
            <p>Site speed is a critical ranking factor. Compress images, use a fast theme, and minimize unnecessary apps to improve loading times. Use tools like Google PageSpeed Insights to identify specific areas for improvement.</p>
            
            <h2>5. Implement Structured Data</h2>
            <p>Structured data (schema markup) helps search engines understand your content better and can result in rich snippets in search results. Implement product schema for your products to display information like price, availability, and reviews directly in search results.</p>
            
            <h2>6. Create a Blog with Valuable Content</h2>
            <p>A blog allows you to target informational keywords related to your products. Create high-quality content that answers your customers' questions, provides useful information, and naturally incorporates relevant keywords.</p>
            
            <h2>7. Optimize Images</h2>
            <p>Compress images to reduce file size without sacrificing quality. Use descriptive file names and include alt text that describes the image while incorporating relevant keywords.</p>
            
            <h2>8. Build Quality Backlinks</h2>
            <p>Backlinks from reputable websites signal to search engines that your store is trustworthy. Develop relationships with industry bloggers, submit guest posts, and create shareable content to attract natural backlinks.</p>
            
            <h2>9. Improve User Experience</h2>
            <p>A positive user experience leads to lower bounce rates and longer time on site, which are signals that search engines use to rank pages. Ensure your site is mobile-friendly, easy to navigate, and has clear calls to action.</p>
            
            <h2>10. Monitor and Adjust</h2>
            <p>SEO is an ongoing process. Use tools like Google Analytics and Google Search Console to monitor your performance. Pay attention to metrics like organic traffic, bounce rate, and conversion rate. Adjust your strategy based on what's working and what isn't.</p>
            
            <h2>Conclusion</h2>
            <p>Implementing these Shopify SEO tips can significantly improve your store's visibility in search results. Remember that SEO is a long-term strategy, and it may take some time to see results. Be patient, consistent, and always focused on providing value to your customers.</p>
          `,
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
          content: `
            <h2>The Importance of Optimized Product Pages</h2>
            <p>Your product pages are where the magic happens—where browsers turn into buyers. No matter how much traffic you drive to your Shopify store, if your product pages don't convert, you're leaving money on the table.</p>
            
            <h2>1. Use High-Quality Product Images</h2>
            <p>High-quality images are essential for showcasing your products effectively. Include multiple images showing different angles, features, and the product in use. Consider using 360-degree views or videos to give customers a complete understanding of what they're buying.</p>
            
            <h2>2. Write Compelling Product Descriptions</h2>
            <p>Your product descriptions should not only describe the features but also highlight the benefits and tell a story. Address potential pain points and explain how your product solves them. Use persuasive language that appeals to your target audience's emotions and desires.</p>
            
            <h2>3. Display Clear Pricing</h2>
            <p>Make your pricing clear and transparent. If you offer discounts, show both the original and discounted prices. Consider using price anchoring to make your prices seem more attractive. Be upfront about any additional costs like shipping or taxes.</p>
            
            <h2>4. Implement Trust Signals</h2>
            <p>Include elements that build trust, such as security badges, money-back guarantees, and warranty information. Highlight your return policy to reassure customers that their purchase is risk-free.</p>
            
            <h2>5. Showcase Customer Reviews</h2>
            <p>Positive reviews and testimonials provide social proof and can significantly increase conversion rates. Display star ratings prominently and include detailed reviews that address specific benefits or concerns. Consider adding photo or video reviews for even more impact.</p>
            
            <h2>6. Create Urgency and Scarcity</h2>
            <p>Tastefully implemented urgency and scarcity tactics can boost conversions by encouraging immediate action. Use countdown timers for limited-time offers, display stock levels for popular items, or highlight limited edition products.</p>
            
            <h2>7. Optimize Your Call to Action</h2>
            <p>Your Add to Cart button should be prominent, visually distinct, and use actionable language. Test different colors, sizes, and wording to find what works best for your audience. Consider adding secondary CTAs, like "Add to Wishlist" or "Learn More."</p>
            
            <h2>8. Include Sizing and Compatibility Information</h2>
            <p>Provide detailed sizing guides, dimension charts, or compatibility information to help customers make informed decisions. This reduces uncertainty and helps prevent returns.</p>
            
            <h2>9. Add Related Products</h2>
            <p>Cross-sell related items or upsell premium alternatives to increase average order value. Make sure these recommendations are genuinely relevant to the product being viewed.</p>
            
            <h2>10. Optimize for Mobile</h2>
            <p>With the majority of shoppers browsing on mobile devices, ensure your product pages look and function flawlessly on smartphones. Simplify the layout, use large touch-friendly buttons, and ensure text is readable without zooming.</p>
            
            <h2>Conclusion</h2>
            <p>Creating high-converting product pages requires attention to detail and continuous testing and optimization. Focus on providing all the information customers need to make a purchase decision while creating an emotional connection that drives them to action. Regularly analyze your conversion rates and experiment with different elements to find what resonates best with your specific audience.</p>
          `,
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
          content: `
            <h2>What is Liquid?</h2>
            <p>Liquid is an open-source template language created by Shopify and written in Ruby. It's the backbone of Shopify themes, allowing developers to create dynamic, customizable storefronts by loading dynamic content into template files.</p>
            
            <h2>Understanding Liquid Basics</h2>
            <p>Liquid uses a combination of objects, tags, and filters to load dynamic content into your Shopify theme. Let's break down each of these components:</p>
            
            <h3>Objects</h3>
            <p>Objects contain content that you want to display on a page. They're denoted by double curly braces: {{ and }}. For example, {{ product.title }} outputs the title of a product.</p>
            
            <h3>Tags</h3>
            <p>Tags create the logic and control flow for templates. They're denoted by curly braces and percent signs: {% and %}. For example, {% if product.available %} creates a conditional statement that checks if a product is available.</p>
            
            <h3>Filters</h3>
            <p>Filters change the output of an object. They're applied to objects using a pipe character |. For example, {{ product.title | upcase }} outputs the product title in all uppercase letters.</p>
            
            <h2>Working with Variables</h2>
            <p>In Liquid, you can assign your own variables using the assign or capture tags:</p>
            <pre>{% assign my_variable = "Hello, world!" %}</pre>
            <p>You can then output this variable using the object syntax:</p>
            <pre>{{ my_variable }}</pre>
            
            <h2>Conditional Logic</h2>
            <p>Liquid allows you to use conditional statements to control what is displayed on the page:</p>
            <pre>
{% if product.available %}
  In stock
{% else %}
  Sold out
{% endif %}
            </pre>
            
            <h2>Loops</h2>
            <p>You can iterate over collections using for loops:</p>
            <pre>
{% for product in collection.products %}
  {{ product.title }}
{% endfor %}
            </pre>
            
            <h2>Accessing Shopify Objects</h2>
            <p>Liquid gives you access to a variety of Shopify-specific objects that contain store data:</p>
            <ul>
              <li>{{ product }} - The current product</li>
              <li>{{ collection }} - The current collection</li>
              <li>{{ cart }} - The customer's shopping cart</li>
              <li>{{ shop }} - Store information like name and URL</li>
              <li>{{ customer }} - Information about the logged-in customer</li>
            </ul>
            
            <h2>Template Organization</h2>
            <p>Shopify themes are organized into layouts, templates, and snippets:</p>
            <ul>
              <li>Layouts define the structure shared across multiple pages</li>
              <li>Templates define the content for specific page types</li>
              <li>Snippets are reusable pieces of code that can be included in other templates</li>
            </ul>
            
            <h2>Including Snippets</h2>
            <p>You can include snippets in your templates using the include tag:</p>
            <pre>{% include 'product-card' %}</pre>
            
            <h2>Section Rendering</h2>
            <p>Sections are customizable modules that can be added, removed, and reordered by merchants:</p>
            <pre>{% section 'featured-collection' %}</pre>
            
            <h2>Best Practices</h2>
            <ul>
              <li>Comment your code for better maintainability</li>
              <li>Use whitespace control ({% if condition -%} and {%- endif %}) to control output formatting</li>
              <li>Leverage the increment and decrement tags for creating counters</li>
              <li>Use the unless tag as a shorthand for if not conditions</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Liquid is a powerful yet approachable template language that gives you the flexibility to create custom Shopify themes. By understanding the basics outlined in this guide, you're well on your way to creating dynamic, customizable Shopify storefronts.</p>
          `,
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
          content: `
            <h2>Introduction</h2>
            <p>The Shopify App Store offers thousands of apps designed to enhance your store's functionality and performance. With so many options available, it can be challenging to determine which ones are worth your investment. In this article, we'll explore five exceptional Shopify apps that have proven track records for boosting sales and improving store performance.</p>
            
            <h2>1. Klaviyo Email Marketing</h2>
            <h3>What It Does:</h3>
            <p>Klaviyo is a comprehensive email marketing platform that allows you to create highly targeted email campaigns based on customer behavior and preferences. It goes beyond basic email marketing by offering advanced segmentation, automation, and personalization features.</p>
            
            <h3>How It Increases Sales:</h3>
            <p>Automated flows like abandoned cart recovery, welcome series, and post-purchase follow-ups help recover lost sales and encourage repeat purchases. Personalized product recommendations based on browsing history and purchase behavior significantly increase conversion rates. Detailed analytics help you understand what's working and continuously improve your email strategy.</p>
            
            <h3>Best For:</h3>
            <p>Stores of all sizes looking to implement sophisticated email marketing strategies. Particularly valuable for stores with repeat customers or subscription-based models.</p>
            
            <h2>2. Privy</h2>
            <h3>What It Does:</h3>
            <p>Privy combines email capture, on-site displays, and email marketing in one platform. It allows you to create targeted popups, banners, fly-outs, and other on-site displays to engage visitors and collect email addresses.</p>
            
            <h3>How It Increases Sales:</h3>
            <p>Exit-intent popups can recover potentially lost visitors by offering incentives to stay or subscribe. Targeted displays based on visitor behavior, location, or cart value can present relevant offers at the perfect moment. Automated email sequences nurture leads and bring subscribers back to your store to complete purchases.</p>
            
            <h3>Best For:</h3>
            <p>Stores focused on growing their email list and reducing cart abandonment. Great for stores with products that benefit from educational content or require consideration before purchase.</p>
            
            <h2>3. Loox Product Reviews</h2>
            <h3>What It Does:</h3>
            <p>Loox is a photo review app that encourages customers to submit photos along with their product reviews. It automatically emails customers after purchase requesting a review with photos and offers incentives for submissions.</p>
            
            <h3>How It Increases Sales:</h3>
            <p>Photo reviews provide authentic social proof that builds trust much more effectively than text-only reviews. The app creates shoppable Instagram-like photo galleries that can be displayed on product pages, home pages, or dedicated review pages. Review request emails bring customers back to your store, often resulting in additional purchases.</p>
            
            <h3>Best For:</h3>
            <p>Visual product categories like fashion, home decor, beauty, and lifestyle products where seeing the item in use adds significant value for potential buyers.</p>
            
            <h2>4. Smile.io Rewards Program</h2>
            <h3>What It Does:</h3>
            <p>Smile.io allows you to create customizable loyalty programs, referral programs, and VIP tiers. Customers can earn points through purchases, social shares, referrals, and other actions you define.</p>
            
            <h3>How It Increases Sales:</h3>
            <p>Loyalty programs incentivize repeat purchases by offering rewards for continued engagement. Referral programs turn your existing customers into brand advocates who bring in new customers. VIP tiers create exclusivity and encourage higher spending to reach premium status levels.</p>
            
            <h3>Best For:</h3>
            <p>Stores with products that lend themselves to repeat purchases or stores looking to build a community around their brand. Particularly effective for competitive markets where customer loyalty is crucial.</p>
            
            <h2>5. Bold Upsell</h2>
            <h3>What It Does:</h3>
            <p>Bold Upsell allows you to offer relevant product upgrades, add-ons, and bundles at various points in the customer journey. It creates targeted upsell and cross-sell offers based on what's in the customer's cart.</p>
            
            <h3>How It Increases Sales:</h3>
            <p>Intelligent product recommendations increase average order value by suggesting relevant additions. Post-purchase upsells capture additional sales after the initial purchase commitment. Bundle offers can increase perceived value while boosting order totals.</p>
            
            <h3>Best For:</h3>
            <p>Stores with complementary products or product lines with various price tiers. Particularly valuable for stores selling products with natural add-ons or accessories.</p>
            
            <h2>Implementation Tips</h2>
            <p>Start with one or two apps that address your most pressing needs rather than implementing all five simultaneously. Take advantage of free trials to test functionality and measure impact before committing. Focus on proper configuration and customization to align with your brand aesthetic and customer experience goals.</p>
            
            <h2>Conclusion</h2>
            <p>The right combination of Shopify apps can dramatically increase your store's conversion rate, average order value, and customer lifetime value. The five apps highlighted in this article represent some of the most powerful tools available for Shopify merchants looking to boost their sales. Remember that the effectiveness of any app ultimately depends on proper implementation and alignment with your overall business strategy.</p>
          `,
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
          content: `
            <h2>Introduction</h2>
            <p>Building a Shopify app can be an excellent way to extend the platform's functionality, solve merchant problems, and potentially create a new revenue stream. This tutorial will guide you through the process of creating your first Shopify app, from setting up your development environment to deploying your app to the Shopify App Store.</p>
            
            <h2>Prerequisites</h2>
            <p>Before we begin, you'll need:</p>
            <ul>
              <li>Basic knowledge of JavaScript/Node.js</li>
              <li>Familiarity with React (for the frontend)</li>
              <li>A Shopify Partner account (free to create)</li>
              <li>Node.js and npm installed on your computer</li>
              <li>A code editor (like VS Code, Sublime Text, etc.)</li>
            </ul>
            
            <h2>Step 1: Set Up Your Development Environment</h2>
            <p>The first step is to install the Shopify CLI, which will help you create and manage your app:</p>
            <pre>npm install -g @shopify/cli @shopify/theme</pre>
            <p>Now, create a new Shopify app project:</p>
            <pre>shopify app create</pre>
            <p>Follow the prompts to set up your app. You'll need to:</p>
            <ul>
              <li>Choose a name for your app</li>
              <li>Select the app type (we'll choose "Node.js app")</li>
              <li>Choose your preferred frontend framework (React is recommended)</li>
            </ul>
            <p>The CLI will create a new directory with your app's name and set up all the necessary files and dependencies.</p>
            
            <h2>Step 2: Configure Your App in the Shopify Partner Dashboard</h2>
            <p>Log in to your Shopify Partner account and navigate to "Apps" > "Create app".</p>
            <ul>
              <li>Enter your app name and select "Public app"</li>
              <li>Set the App URL to "https://localhost:3000"</li>
              <li>Set the Allowed redirection URL(s) to "https://localhost:3000/auth/callback"</li>
              <li>Save the app</li>
            </ul>
            <p>After saving, you'll be provided with an API key and API secret key. Copy these values as you'll need them in the next step.</p>
            
            <h2>Step 3: Configure Your Local Environment</h2>
            <p>In your app directory, create a .env file with the following content:</p>
            <pre>
SHOPIFY_API_KEY=your_api_key
SHOPIFY_API_SECRET=your_api_secret
SCOPES=write_products,read_orders
HOST=https://localhost:3000
            </pre>
            <p>Replace "your_api_key" and "your_api_secret" with the values from the previous step. The SCOPES variable defines what permissions your app will request from merchants.</p>
            
            <h2>Step 4: Understand the App Structure</h2>
            <p>Your app will have two main components:</p>
            <ol>
              <li>Backend (Node.js/Express): Handles authentication, API calls to Shopify, and serves your frontend</li>
              <li>Frontend (React): The user interface of your app that merchants will interact with</li>
            </ol>
            <p>Take some time to explore the files and folders created by the CLI to understand the structure.</p>
            
            <h2>Step 5: Develop Your App Functionality</h2>
            <p>Now it's time to implement your app's core functionality. Let's create a simple app that displays a list of products from the merchant's store and allows adding a "Sale" tag to products.</p>
            
            <h3>Backend Changes:</h3>
            <p>Update the server.js (or index.js) file to include a new endpoint that fetches products:</p>
            <pre>
app.get('/api/products', async (req, res) => {
  const session = await Shopify.Utils.loadCurrentSession(req, res);
  
  if (!session) {
    return res.status(401).send('Unauthorized');
  }
  
  try {
    const client = new Shopify.Clients.Rest(session.shop, session.accessToken);
    const response = await client.get({
      path: 'products',
    });
    
    res.status(200).send(response.body);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/api/products/tag', async (req, res) => {
  const session = await Shopify.Utils.loadCurrentSession(req, res);
  const { productId, tags } = req.body;
  
  if (!session) {
    return res.status(401).send('Unauthorized');
  }
  
  try {
    const client = new Shopify.Clients.Rest(session.shop, session.accessToken);
    const response = await client.put({
      path: `products/${productId}`,
      data: { product: { id: productId, tags } },
    });
    
    res.status(200).send(response.body);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
            </pre>
            
            <h3>Frontend Changes:</h3>
            <p>Update your main React component to display products and add the tagging functionality:</p>
            <pre>
import { useEffect, useState } from 'react';
import { Card, Button, ResourceList, Avatar, TextStyle } from '@shopify/polaris';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchProducts();
  }, []);
  
  async function fetchProducts() {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  }
  
  async function addSaleTag(productId, currentTags) {
    const tagsArray = currentTags ? currentTags.split(', ') : [];
    if (!tagsArray.includes('sale')) {
      tagsArray.push('sale');
    }
    const newTags = tagsArray.join(', ');
    
    try {
      await fetch('/api/products/tag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, tags: newTags }),
      });
      
      // Refresh the product list
      fetchProducts();
    } catch (error) {
      console.error('Error adding tag:', error);
    }
  }
  
  return (
    <Card title="Products">
      <ResourceList
        loading={loading}
        items={products}
        renderItem={(product) => (
          <ResourceList.Item
            id={product.id}
            media={
              <Avatar
                customer
                size="medium"
                name={product.title}
                source={product.image ? product.image.src : ''}
              />
            }
            accessibilityLabel={`View details for ${product.title}`}
            name={<TextStyle variation="strong">{product.title}</TextStyle>}
            secondaryActions={[
              {
                content: 'Add "Sale" Tag',
                onAction: () => addSaleTag(product.id, product.tags),
              },
            ]}
          />
        )}
      />
    </Card>
  );
}

export default ProductList;
            </pre>
            
            <h2>Step 6: Test Your App</h2>
            <p>Start your development server:</p>
            <pre>npm run dev</pre>
            <p>The Shopify CLI will automatically create a development store for you and install your app on it. You can then test your app in this development store.</p>
            
            <h2>Step 7: Prepare for Deployment</h2>
            <p>Once you're satisfied with your app, you'll need to deploy it to a hosting service. Popular options include:</p>
            <ul>
              <li>Heroku</li>
              <li>AWS</li>
              <li>Digital Ocean</li>
              <li>Vercel</li>
            </ul>
            <p>Update your app URLs in the Shopify Partner Dashboard to point to your production URLs instead of localhost.</p>
            
            <h2>Step 8: Submit to the Shopify App Store (Optional)</h2>
            <p>If you want to publish your app to the Shopify App Store:</p>
            <ol>
              <li>Ensure your app complies with Shopify's requirements and guidelines</li>
              <li>Prepare marketing materials (screenshots, descriptions, etc.)</li>
              <li>Submit your app for review in the Partner Dashboard</li>
            </ol>
            
            <h2>Conclusion</h2>
            <p>Congratulations! You've built your first Shopify app. This is just the beginning – you can continue to enhance your app with more features, better UI, and additional integration points with Shopify. The Shopify App ecosystem offers countless opportunities for developers to create valuable tools for merchants around the world.</p>
          `,
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
          content: `
            <h2>Introduction</h2>
            <p>Many Shopify store owners believe that creating a unique, professional-looking store requires extensive coding knowledge or a large budget for custom development. The good news is that Shopify's ecosystem has evolved to offer powerful customization options that don't require any coding skills. In this guide, we'll explore how to transform your Shopify store using only built-in customization tools and code-free apps.</p>
            
            <h2>Choosing the Right Foundation: Selecting Your Theme</h2>
            <p>Your theme is the foundation of your store's design. While it might be tempting to choose based solely on aesthetics, consider these factors:</p>
            
            <h3>Flexibility</h3>
            <p>Look for themes with robust customization options in the theme editor. Themes like Dawn (Shopify's reference theme), Prestige, Impulse, and Brooklyn offer extensive customization settings without requiring code edits.</p>
            
            <h3>Section Support</h3>
            <p>Ensure your theme supports Sections throughout the store, not just on the homepage. Newer themes with "Sections Everywhere" allow you to add, rearrange, and customize content on all pages.</p>
            
            <h3>Mobile Optimization</h3>
            <p>With most shopping happening on mobile devices, choose a theme that looks excellent on smartphones and provides mobile-specific customization options.</p>
            
            <h2>Mastering the Theme Editor</h2>
            <p>Shopify's Theme Editor is more powerful than many store owners realize. Here's how to make the most of it:</p>
            
            <h3>Theme Settings</h3>
            <p>Theme settings control global elements like colors, typography, and layout options:</p>
            <ol>
              <li>Create a cohesive color palette using the color selectors</li>
              <li>Adjust typography for better readability and brand alignment</li>
              <li>Configure layout options like spacing, container widths, and grid settings</li>
              <li>Customize buttons, forms, and other UI elements</li>
            </ol>
            
            <h3>Section Manipulation</h3>
            <p>Sections allow modular content building:</p>
            <ol>
              <li>Add new sections by clicking "Add section"</li>
              <li>Rearrange sections by dragging and dropping</li>
              <li>Use "Section groups" to create collapsible sets of related sections</li>
              <li>Duplicate sections to create variations with different content</li>
            </ol>
            
            <h3>Block Customization</h3>
            <p>Within sections, blocks provide even more granular control:</p>
            <ol>
              <li>Add and remove blocks to control what elements appear</li>
              <li>Rearrange blocks to change their display order</li>
              <li>Customize individual block settings for precise control</li>
            </ol>
            
            <h2>Leveraging Code-Free Apps for Enhanced Functionality</h2>
            <p>While the Theme Editor offers extensive design control, apps can add functionality without coding:</p>
            
            <h3>Page Builders</h3>
            <p>Apps like Pagefly, Shogun, and GemPages offer drag-and-drop interfaces for creating complex layouts:</p>
            <ul>
              <li>Build advanced grid layouts with precise control</li>
              <li>Create animated elements and interactive features</li>
              <li>Design custom product pages with advanced galleries</li>
              <li>Implement conditional content that shows based on user behavior</li>
            </ul>
            
            <h3>Header and Navigation Enhancers</h3>
            <p>Customize your store's navigation without touching code:</p>
            <ul>
              <li>Improve mega menus with images and custom layouts</li>
              <li>Create sticky headers with animation effects</li>
              <li>Implement mobile-specific navigation options</li>
            </ul>
            
            <h3>Product Page Enhancers</h3>
            <p>Transform your product pages with apps that add:</p>
            <ul>
              <li>360-degree product viewers</li>
              <li>Video galleries and zooming capabilities</li>
              <li>Size guides and comparison charts</li>
              <li>Advanced product options and customizers</li>
            </ul>
            
            <h2>Advanced Customization Without Code</h2>
            <p>For even more unique touches without coding:</p>
            
            <h3>Custom CSS Apps</h3>
            <p>Apps like CSS Hero and Easy CSS allow you to modify your site's appearance through visual interfaces rather than writing code directly.</p>
            
            <h3>Font and Typography Tools</h3>
            <p>Use apps like Font Bundle to access thousands of fonts beyond the standard options in the Theme Editor.</p>
            
            <h3>Icon and Graphic Sets</h3>
            <p>Incorporate custom icons and graphics using apps that provide drag-and-drop libraries of visual elements.</p>
            
            <h2>Best Practices for No-Code Customization</h2>
            <ul>
              <li>Start with global theme settings before adding apps for a more cohesive look</li>
              <li>Use a staging or development store to test changes before implementing them on your live store</li>
              <li>Regularly back up your theme before making significant changes</li>
              <li>Be selective with apps to avoid bloating your store and slowing page load times</li>
              <li>Consider performance impacts of heavy customizations, especially on mobile devices</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>With Shopify's robust Theme Editor and the extensive ecosystem of no-code apps, you can create a unique, professional store without writing a single line of code. Focus on understanding the capabilities of your chosen theme, master the Theme Editor, and selectively implement apps that enhance your store's functionality and design. By taking this approach, you can achieve a custom look and feel that stands out from template-based stores while avoiding the cost and complexity of custom development.</p>
          `,
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

      const foundPost = blogPosts.find(p => p.slug === slug);
      
      if (foundPost) {
        setPost(foundPost);
      } else {
        setError("Blog post not found");
      }
      
      setLoading(false);
    };
    
    fetchPost();
  }, [slug]);

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (loading) {
    return (
      <Layout>
        <div className="container px-4 md:px-6 py-12">
          <div className="mx-auto w-full max-w-3xl">
            <div className="space-y-4">
              <div className="h-12 bg-muted rounded animate-pulse"></div>
              <div className="h-64 bg-muted rounded animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded animate-pulse"></div>
                <div className="h-4 bg-muted rounded animate-pulse"></div>
                <div className="h-4 bg-muted rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="container px-4 md:px-6 py-12">
          <div className="mx-auto w-full max-w-3xl text-center">
            <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Blog post header */}
      <div className="bg-muted py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto w-full max-w-3xl">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4"
              asChild
            >
              <Link to="/blog" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Link>
            </Button>
            
            <div className="flex items-center space-x-2 mb-4">
              <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Tag className="h-3 w-3 mr-1 inline" />
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </div>
              <span className="text-muted-foreground text-sm">•</span>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime} min read
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center mb-8">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="h-10 w-10 rounded-full mr-3"
              />
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3 inline mr-1" />
                  {formatDate(post.publishDate)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured image */}
      <div className="container px-4 md:px-6 py-8">
        <div className="mx-auto w-full max-w-4xl">
          <div className="aspect-video rounded-lg overflow-hidden mb-12">
            <img 
              src={post.thumbnailUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Blog post content */}
      <div className="container px-4 md:px-6 pb-16">
        <div className="mx-auto w-full max-w-3xl">
          <Card>
            <CardContent className="p-8">
              <div 
                className="prose prose-blue max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-8 pt-0 border-t gap-4">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-muted-foreground" />
                <div className="text-sm">
                  <span className="text-muted-foreground">Written by </span>
                  <span className="font-medium">{post.author.name}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  Copy Link
                </Button>
              </div>
            </CardFooter>
          </Card>
          
          {/* Related posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...blogPosts]
                .filter(p => p.category === post.category && p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Card key={relatedPost.id} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <img 
                        src={relatedPost.thumbnailUrl} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                          <Tag className="h-3 w-3 mr-1 inline" />
                          {relatedPost.category.charAt(0).toUpperCase() + relatedPost.category.slice(1)}
                        </div>
                      </div>
                      <CardTitle className="text-xl">
                        <Link 
                          to={`/blog/${relatedPost.slug}`} 
                          className="hover:text-primary transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(relatedPost.publishDate)}
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link to={`/blog/${relatedPost.slug}`} className="flex items-center">
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostPage;
