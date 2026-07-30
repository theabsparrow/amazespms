import type { Metadata } from "next";
import Services from "@/component/services/Services";

export const metadata: Metadata = {
  title: "Services & AMC Packages | Amaze PMS",
  description:
    "Explore integrated property & facility services by Amaze PMS. HVAC, High Voltage Power, Plumbing, Soft Janitorial Services, Security & AMC Maintenance Contracts.",
};

export default function ServicesPage() {
  return <Services />;
}
