"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

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
          name: "Home",
          id: "/",
        },
        {
          name: "Services",
          id: "/services",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="WebCraft Co"
    />
  </div>

  <div id="services-list" data-section="services-list">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          tag: "Design",
          title: "Website Design",
          subtitle: "Unique Branding",
          description: "Custom sites crafted to fit your brand identity.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/graphic-illustration-of-web-design-proce-1774738303413-24d3332b.png",
        },
        {
          id: 2,
          tag: "Conversion",
          title: "Landing Pages",
          subtitle: "High Conversion",
          description: "Targeted pages that turn visitors into loyal customers.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/landing-page-conceptual-art-showing-a-hi-1774738303023-45c1a9a5.png",
        },
        {
          id: 3,
          tag: "Modernization",
          title: "Website Redesign",
          subtitle: "Fresh Look",
          description: "Modernize your outdated site with current trends.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/website-transformation-visual-before-and-1774738304386-c81e4952.png",
        },
        {
          id: 4,
          tag: "Insights",
          title: "Google Analytics Access",
          subtitle: "Measurable Results",
          description: "Track your traffic effortlessly with our built-in analytics dashboards.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/dashboard-analytics-visual-with-charts-a-1774738302785-a4dc0312.png",
        },
      ]}
      title="Our Services"
      description="Professional web design solutions tailored to scale your brand."
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Proven Performance"
      description="We don't just build sites, we build growth engines."
      metrics={[
        {
          id: "m1",
          value: "150%",
          title: "Average Traffic Increase",
          items: [
            "SEO improvement",
            "Mobile speed",
          ],
        },
        {
          id: "m2",
          value: "3x",
          title: "Conversion Rate Boost",
          items: [
            "Landing page logic",
            "UX flow",
          ],
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="WebCraft Co"
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Services",
              href: "/services",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Email",
              href: "mailto:WebCraft7.co@gmail.com",
            },
            {
              label: "Call Us",
              href: "tel:7068162380",
            },
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
