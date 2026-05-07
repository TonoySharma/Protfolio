import Banner from "@/components/banner/Banner";
import ContactSection from "@/components/contact/Contact";
import Counting from "@/components/countSection/Counting";
import Footer from "@/components/footer/Footer";
import ProjectSection from "@/components/projectSection/Project";
import ResumeSection from "@/components/resumeSection/ResumeSection";
import Technologies from "@/components/technologies/Technologies";

export const metadata = {
  title: "Tonoy Sharma | Full Stack Developer",
  description:
    "Personal portfolio of Tonoy Sharma, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
};



export default function Home() {
  return (
    <div>
         <Banner></Banner>
         <Counting></Counting>
         <ResumeSection></ResumeSection>
         <Technologies></Technologies>
         <ProjectSection></ProjectSection>
         <ContactSection></ContactSection>
         <Footer></Footer>
    </div>
  );
}
