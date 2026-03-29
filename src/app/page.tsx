"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
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
          value: "Professional ",          label: "High quality "},
        {
          value: "",          label: "+Client Retention"},
        {
          value: "Increase Clients",          label: "+Avg Traffic Growth"},
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Get Started Today",          href: "/contact"},
        {
          text: "See Our Services",          href: "/services"},
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
      description="At WebCraft Co, we believe every business deserves a professional, high-performing website. Luke Wilkins created this business to bridge the gap between quality design and affordability for small business owners."
      subdescription="Our mission is simple: create personalized, clean, and innovative web solutions that drive real results for your unique goals."
      icon={Award}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/a-minimalist-high-end-web-design-agency--1774738302697-43614847.png?_wi=2"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      title="Meet the Owner"
      description="Work directly with our lead designer to ensure your vision is perfectly translated into a high-performing digital experience."
      team={[
        {
          id: "t1",          name: "Luke Wilkins",          role: "Owner & Lead Designer",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/uploaded-1774756702294-zjtskn4f.jpg"
        }
      ]}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Modern Websites for lower cost"
      description="Websites valued at $1500-."
      plans={[
        {
          id: "p1",          badge: "Website ",          price: "$500-800",          subtitle: "Start your web presence",          features: [
            "1-3 Page Structure",            "modern animated styled design ",            "Domain Setup",            "Mobile Responsive Design",            "Secure HTTPS Hosting"],
        },
      ]}
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
      ]}
      copyrightText="© 2025 WebCraft Co | Design by Luke Wilkins"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}