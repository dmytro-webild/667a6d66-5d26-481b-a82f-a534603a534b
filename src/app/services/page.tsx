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
              { name: "Home", id: "/" },
              { name: "Services", id: "/services" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="WebCraft Co"
          />
        </div>

        <div id="services-list" data-section="services-list" style={{ display: "block" }}>
          <FeatureCardNineteen
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              {
                id: 1,
                tag: "Design",                title: "Website Design",                subtitle: "Unique Branding",                description: "Every website is uniquely designed to reflect your brand’s identity, values, and vision—creating a polished, high-end experience that builds trust and credibility.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/graphic-illustration-of-web-design-proce-1774738303413-24d3332b.png"
              },
              {
                id: 2,
                tag: "Conversion",                title: "Landing Pages",                subtitle: "Increase Client Conversion",                description: "Targeted pages that turn visitors into loyal customers.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/landing-page-conceptual-art-showing-a-hi-1774738303023-45c1a9a5.png"
              },
              {
                id: 3,
                tag: "Modernization",                title: "Website Redesign",                subtitle: "Fresh Look",                description: "Modernize your outdated site with current trends.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/website-transformation-visual-before-and-1774738304386-c81e4952.png"
              },
              {
                id: 4,
                tag: "Insights",                title: "Google Analytics Access",                subtitle: "Measurable Results",                description: "Track and optimize your performance with professional data insights.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/dashboard-analytics-visual-with-charts-a-1774738302785-a4dc0312.png"
              }
            ]}
            title="Our Services"
            description="Professional web design solutions tailored to scale your brand."
          />
        </div>

        <div id="metric" data-section="metric" style={{ display: "block" }}>
          <MetricCardSeven
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            title="Proven Performance"
            description="We don't just build sites, we build online attraction towards your business."
            metrics={[
              {
                id: "m1",                value: "Traffic",                title: "Increase traffic towards your business.",                items: [
                  "Built to increase traffic and visibility",                  "Mobile compatibility"
                ]
              },
              {
                id: "m2",                value: "Modern",                title: "Visually appealing website.",                items: [
                  "landing clientele with modern visuals",                  "HTTPS secured website"
                ]
              }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="WebCraft Co"
            columns={[
              {
                title: "Navigation",                items: [
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: "Contact", href: "/contact" },
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