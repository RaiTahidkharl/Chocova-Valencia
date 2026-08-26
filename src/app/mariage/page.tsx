import type { Metadata } from "next";
import { CelebrationExplorer } from "@/components/home/CelebrationExplorer";

export const metadata: Metadata = {
  title: "Celebraciones",
  description: "Tartas personalizadas para bodas, cumpleaños, bautizos, comuniones y eventos de empresa.",
};

export default function CelebrationsPage() {
  return <CelebrationExplorer />;
}
