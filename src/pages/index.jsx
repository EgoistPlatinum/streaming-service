import Hero from "@/sections/Hero";
import Categories from "@/sections/Categories";
import Devices from "@/sections/Devices/index.js";

export const metadata = {
  title: 'Home',
  isHeaderFixed: true
}

export default function () {
  return (
    <>
      <Hero/>
      <Categories/>
      <Devices/>
    </>
  )
}
