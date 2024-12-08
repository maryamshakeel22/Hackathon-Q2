import Image from "next/image";
import Hero from "./homepage/hero";
import SecTwo from "./homepage/secTwo";
import SecThree from "./homepage/secThree";
import SecFour from "./homepage/secFour";
import SecFive from "./homepage/secFive";

export default function Home() {
  return (
    <div>
      <Hero />
      <SecTwo />
      <SecThree />
      <SecFour />
      <SecFive />
    </div>
  );
}
