import Footer from "./components/static/footer";
import NavBar from "./components/static/navbar";
import Certs from "./sections/main/Certs";
import Contact from "./sections/main/Contact";
import Gallery from "./sections/main/Gallery";
import Initial from "./sections/main/Initial";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Initial />
      <Certs />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
