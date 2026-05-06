import Banner from "@/components/banner/Banner";
import ContactSection from "@/components/contact/Contact";
import Counting from "@/components/countSection/Counting";
import Footer from "@/components/footer/Footer";
import ResumeSection from "@/components/resumeSection/ResumeSection";
import Technologies from "@/components/technologies/Technologies";


export default function Home() {
  return (
    <div>
         <Banner></Banner>
         <Counting></Counting>
         <ResumeSection></ResumeSection>
         <Technologies></Technologies>
         <ContactSection></ContactSection>
         <Footer></Footer>
    </div>
  );
}
