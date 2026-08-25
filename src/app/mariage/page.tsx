import type { Metadata } from "next";
import { CelebrationExplorer } from "@/components/home/CelebrationExplorer";

export const metadata: Metadata = {
  title: "Celebrations",
  description: "Personalised cakes for weddings, birthdays, baptisms, communions and corporate events.",
};

export default function CelebrationsPage() {
  return <CelebrationExplorer />;
}
