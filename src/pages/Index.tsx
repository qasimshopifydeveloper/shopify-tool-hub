
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import UserCategories from "@/components/home/UserCategories";
import FeaturedTools from "@/components/home/FeaturedTools";
import Testimonials from "@/components/home/Testimonials";
import HowItWorks from "@/components/home/HowItWorks";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Introduction />
      <UserCategories />
      <FeaturedTools />
      <Testimonials />
      <HowItWorks />
      <CallToAction />
    </Layout>
  );
};

export default Index;
