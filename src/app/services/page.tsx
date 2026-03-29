"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

export default function ServicesPage() {
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

        <div id="services-list" data-section="services-list">
          <FeatureCardTwentyThree
            animationType="blur-reveal"
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              {
                id: "1",                tags: ["Design"],
                title: "Website Design",                description: "Every website is uniquely designed to reflect your brand’s identity, values, and vision—creating a polished, high-end experience that builds trust and credibility.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/graphic-illustration-of-web-design-proce-1774738303413-24d3332b.png"
              },
              {
                id: "2",                tags: ["Conversion"],
                title: "Landing Pages",                description: "Targeted pages that turn visitors into loyal customers.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/landing-page-conceptual-art-showing-a-hi-1774738303023-45c1a9a5.png"
              },
              {
                id: "3",                tags: ["Modernization"],
                title: "Website Redesign",                description: "Modernize your outdated site with current trends.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/website-transformation-visual-before-and-1774738304386-c81e4952.png"
              },
              {
                id: "4",                tags: ["Insights"],
                title: "Google Analytics Access",                description: "Track and optimize your performance with professional data insights.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/dashboard-analytics-visual-with-charts-a-1774738302785-a4dc0312.png"
              }
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
            description="We don't just build sites, we build online attraction towards your business."
            metrics={[
              {
                id: "m1",                value: "Traffic",                title: "Increase traffic towards your business.",                description: "Built to increase traffic and visibility with mobile compatibility.",                icon: (props) => <div />
              },
              {
                id: "m2",                value: "Modern",                title: "Visually appealing website.",                description: "Landing clientele with modern visuals and HTTPS secured hosting.",                icon: (props) => <div />
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