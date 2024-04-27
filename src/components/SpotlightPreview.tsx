import { Spotlight } from "./ui/Spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-[40rem]  w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] bg-grid-white relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative  w-full pt-20 md:pt-0"></div>
    </div>
  );
}
