"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import { Mail } from "lucide-react";

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

  <div id="contact-section" data-section="contact-section">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "How much do you charge?",          content: "Our pricing is custom to fit your specific needs and budget. prices Vary from $500-$800"},
        {
          id: "f2",          title: "How fast is delivery?",          content: "3 business days "},
        {
          id: "f3",          title: "What the best way to get into contact with WebCraft?",          content: "The fastest way is to call us at 706-816-2380 "},
      ]}
      ctaTitle="Let’s Build Your Website Today"
      ctaDescription="Get in touch with Luke Wilkins at WebCraft7.co@gmail.com or call 706-816-2380. We’re ready to grow your business."
      ctaButton={{
        text: "Contact Us",        href: "mailto:WebCraft7.co@gmail.com"}}
      ctaIcon={Mail}
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