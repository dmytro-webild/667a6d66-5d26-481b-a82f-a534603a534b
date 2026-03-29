"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Circle } from "lucide-react";
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

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
          <NavbarLayoutFloatingInline
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
                title: "Website Design",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/graphic-illustration-of-web-design-proce-1774738303413-24d3332b.png"
              },
              {
                id: "2",                tags: ["Conversion"],
                title: "Landing Pages",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/landing-page-conceptual-art-showing-a-hi-1774738303023-45c1a9a5.png"
              },
              {
                id: "3",                tags: ["Modernization"],
                title: "Website Redesign",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/website-transformation-visual-before-and-1774738304386-c81e4952.png"
              },
              {
                id: "4",                tags: ["Insights"],
                title: "Google Analytics Access",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQ4BQzowisLDTKS7JYoLl4Sxq7/dashboard-analytics-visual-with-charts-a-1774738302785-a4dc0312.png"
              }
            ]}
            title="Our Services"
            description="Professional web design solutions tailored to scale your brand."
          />
        </div>

        <div id="metric" data-section="metric">
          <MetricCardOne
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="uniform-all-items-equal"
            useInvertedBackground={false}
            title="Proven Performance"
            description="We don't just build sites, we build online attraction towards your business."
            metrics={[
              {
                id: "m1",                value: "Traffic",                title: "Increase traffic towards your business.",                description: "Built to increase traffic and visibility with mobile compatibility.",                icon: Circle
              },
              {
                id: "m2",                value: "Modern",                title: "Visually appealing website.",                description: "Landing clientele with modern visuals and HTTPS secured hosting.",                icon: Circle
              }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
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