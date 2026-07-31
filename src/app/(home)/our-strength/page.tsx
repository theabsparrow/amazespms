import type { Metadata } from "next";
import OurStrength from "@/component/our-strength/OurStrength";

export const metadata: Metadata = {
  title: "Our Strength & Tech Infrastructure | Amaze PMS",
  description:
    "Explore the operational pillars and technology infrastructure of Amaze PMS. 24/7 Smart Command Center, IoT predictive sensors, 500+ certified engineers, and CAFM portal.",
};

export default function OurStrengthPage() {
  return <OurStrength />;
}