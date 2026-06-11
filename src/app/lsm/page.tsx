import Image from "next/image"; 
import { FadeIn } from "../../components/ui/fade-in";
import PageHeader from "../../components/PageHeader";

export default function LSM() {
  return (
    <div className="bg-white selection:bg-accent-500 selection:text-white">
      <PageHeader 
        title="LSM" 
        breadcrumbs={[{ label: "LSM", href: "/lsm" }]} 
      />


          </div>
  );
}