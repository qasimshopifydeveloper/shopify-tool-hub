
import { 
  QuoteIcon, 
  Star, 
  StarHalf
} from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Shopify Store Owner",
      company: "StyleBoutique",
      quote: "These tools have saved me countless hours of work. The bulk editor alone has made managing my 500+ products so much easier!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    },
    {
      name: "David Chen",
      role: "Shopify Developer",
      company: "DevStudio",
      quote: "As a developer, I appreciate how well-built these tools are. The code is clean, efficient, and has helped me deliver projects faster.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emma Rodriguez",
      role: "App Developer",
      company: "ShopApps Inc",
      quote: "The API testing tools have been a game-changer for our app development process. We've cut our testing time in half!",
      rating: 4.5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-5 w-5 fill-primary text-primary" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-primary text-primary" />);
    }

    return stars;
  };

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Users Are Saying
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it. Hear from merchants and developers who use our tools every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 shadow border flex flex-col relative"
            >
              <QuoteIcon className="h-12 w-12 text-primary/20 absolute top-6 right-6" />
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="h-14 w-14 rounded-full object-cover border-2 border-primary mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-lg italic mb-4 flex-grow">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
