import SideNavBar from "@/app/components/side-navbar/side-navbar";

export const metadata = {
  title: "Projects",
  description: "Hier werden meine Projekte präsentiert.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex min-h-screen">
      {/*SideNavBar to organise projects*/}
      <SideNavBar />
      {children}
    </div>
  );
}
