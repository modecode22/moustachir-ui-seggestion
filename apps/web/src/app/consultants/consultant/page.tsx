import LogoHead from "@repo/ui/icons/LogoHead";
import Image from "next/image";

const page = () => {
  return (
    <section className="h-[100vh]">
      <div className="relative">
        <div className=" p-sections shadow-custom relative flex h-[20rem] w-full items-center justify-between gap-4 overflow-hidden bg-primary-500 from-primary-300 via-primary-400 bg-gradient-to-tr from-10% via-60% to-70% py-4  lg:flex-row">
          <LogoHead pathClasses="stroke-primary-300" className="absolute w-180 md:w-full lg:mt-44" />
        </div>
        <div
          style={{ backgroundImage: "url('/noise.png')" }}
          className="pointer-events-none absolute inset-0 [z-index:-1] bg-[size:180px] bg-repeat opacity-[0.035] dark:opacity-[0.015]"
        ></div>
        <section className="p-sections relative md:bottom-[8rem] bottom-[4rem] flex w-full flex-row-reverse md:gap-8 gap-4 ">
          <section className="grid w-full grid-rows-2">
            <section className="h-full flex items-center">
            <h4 className="z-10 w-full text-5xl  text-neutral-50 lg:text-7xl  flex flex-col justify-end"><span className="font-serif">5000</span><span className=" px-3 w-fit rounded bg-primary-300  text-base lg:text-lg">دينار جزائري / الساعة</span></h4>
            </section>
          </section>

          <div className="md:min-h-[16rem] p-0 rounded    relative min-h-[8rem] min-w-[8rem] md:min-w-[16rem]">
            <Image src={"/HichamBABAAHMED.jpg"} fill className="absolute border-8 shadow-sm border-white/50 backdrop-blur-md   rounded object-cover m-0 inset-0" alt="profile page" /> 
          </div>
        </section>
      </div>
    </section>
  );
};

export default page;
