
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Tools", path: "/tools" },
        { name: "Sponsorship", path: "/sponsorship" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "YouTube", icon: Youtube, url: "#" },
  ];

  return (
    <footer className="bg-muted py-12 mt-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="flex items-center space-x-2 text-xl font-bold text-primary mb-4"
            >
              <span className="text-shopify-green">Shopify</span>
              <span>Tools</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Your ultimate resource for Shopify tools, guides, and resources for merchants, developers, app builders, and learners.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((category) => (
            <div key={category.title} className="flex flex-col space-y-3">
              <h3 className="font-semibold text-foreground">{category.title}</h3>
              {category.links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} ShopifyTools.com. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Created by a certified Shopify developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
