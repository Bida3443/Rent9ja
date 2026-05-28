// import Image from "next/image";
import Nav from "./Nav";
import Hero from "./Hero";
import Problem from "./Problem";
import Work from "./Work";
import Landlords from "./Landlords";
import Price from "./Price";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
    <Nav/>
    <Hero/>
    <Problem/>
    <Work/>
    <Landlords/>
    <Price/>
    <Contact/>
    </div>
  );
}



