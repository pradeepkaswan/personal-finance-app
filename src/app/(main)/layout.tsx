import AdaptiveNavigation from "@/components/adaptive-navigation";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="lg:flex">
      <AdaptiveNavigation />
      <main className="flex-1">{children}</main>
    </div>
  );
}
