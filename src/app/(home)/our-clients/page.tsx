import type { Metadata } from "next";
import OurClients from "@/component/our-clients/OurClients";

export const metadata: Metadata = {
  title: "Our Clients & Case Studies | Amaze PMS",
  description:
    "Discover how Amaze PMS delivers 24/7 technical dispatch and zero downtime facility operations for commercial towers, shopping malls, luxury residential, and healthcare centers.",
};

export default function OurClientsPage() {
  return <OurClients />;
}