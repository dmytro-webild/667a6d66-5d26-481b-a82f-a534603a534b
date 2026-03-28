"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLarge"
        background="noiseDiagonalGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "/"},
        {
          name: "Services",          id: "/services"},
        {
          name: "Contact",          id: "/contact"},
      ]}
      brandName="WebCraft Co"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "radial-gradient"}}
      title="Websites That Grow Your Business Fast"
      description="Custom-designed, affordable websites built for small businesses and startups. Professional design, rapid deployment, measurable results."
      kpis={[
        {
          value: "100+",          label: "Projects Delivered"},
        {
          value: "95%",          label: "Client Retention"},
        {
          value: "2x",          label: "Avg Traffic Growth"},
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Get Started Today",          href: "/contact"},
        {
          text: "See Our Work",          href: "/services"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/a-minimalist-high-end-web-design-agency--1774738302697-43614847.png?_wi=1"
      imageAlt="Modern agency workplace"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about-short" data-section="about-short">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About WebCraft"
      title="We Help Businesses Succeed Online"
      description="At WebCraft Co, we believe every business deserves a professional, high-performing website. Luke Wilkins founded us to bridge the gap between quality design and affordability for small business owners."
      subdescription="Our mission is simple: create personalized, clean, and innovative web solutions that drive real results for your unique goals."
      icon={Award}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/a-minimalist-high-end-web-design-agency--1774738302697-43614847.png?_wi=2"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          title: "Amazing Results",          quote: "WebCraft transformed my small business reach in just a month.",          name: "Sarah Johnson",          role: "CEO, Cafe Daily",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/portrait-of-a-confident-small-business-o-1774738303450-d0353268.png?_wi=1"},
        {
          id: "2",          title: "Truly Professional",          quote: "Luke made the process so easy. A joy to work with.",          name: "Michael Chen",          role: "Founder, TechStart",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/portrait-of-a-creative-startup-founder-w-1774738303537-26d16cee.png"},
        {
          id: "3",          title: "Affordable Quality",          quote: "Finally, an agency that delivers high-end design without the massive price tag.",          name: "Emily Rodriguez",          role: "Owner, Boutique Co",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/portrait-of-a-successful-restaurant-owne-1774738302297-067c5c7c.png"},
        {
          id: "4",          title: "Fast Deployment",          quote: "Got my site live in two weeks exactly as promised.",          name: "David Kim",          role: "Manager, City Mart",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/portrait-of-a-young-digital-service-prof-1774738302205-74d4c940.png"},
        {
          id: "5",          title: "Exceeded Expectations",          quote: "The communication was excellent, and the final site is beautiful.",          name: "Marcus Thorne",          role: "Director, Creative Hub",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/portrait-of-a-confident-small-business-o-1774738303450-d0353268.png?_wi=2"},
      ]}
      title="What Our Clients Say"
      description="Real feedback from our satisfied clients."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Simple, Transparent Pricing"
      description="Choose the plan that fits your business stage."
      plans={[
        {
          id: "p1",          badge: "Starter",          price: "$499",          subtitle: "Basic web presence",          features: [
            "Mobile responsive",            "Contact form",            "SEO optimization"],
        },
        {
          id: "p2",          badge: "Growth",          price: "$999",          subtitle: "For growing businesses",          features: [
            "Everything in Starter",            "Analytics dashboard",            "Social media integration"],
        },
        {
          id: "p3",          badge: "Pro",          price: "$1499",          subtitle: "Full digital suite",          features: [
            "Everything in Growth",            "Custom branding",            "Monthly maintenance"],
        },
      ]}
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      title="Trusted by Growing Businesses"
      description="We are proud to have helped dozens of local brands establish their digital footprint."
      names={[
        "Cafe Daily",        "TechStart",        "Boutique Co",        "City Mart",        "Creative Hub"]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="WebCraft Co"
      columns={[
        {
          title: "Navigation",          items: [
            {
              label: "Home",              href: "/"},
            {
              label: "Services",              href: "/services"},
            {
              label: "Contact",              href: "/contact"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "Email",              href: "mailto:WebCraft7.co@gmail.com"},
            {
              label: "Call Us",              href: "tel:7068162380"},
          ],
        },
      ]}
      copyrightText="© 2025 WebCraft Co | Design by Luke Wilkins"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
