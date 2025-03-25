import AnimatedHeadLogo from "@repo/ui/icons/AnimatedHeadLogo";
import Image from "next/image";

const page = () => {
  return (
    <section className="mt-22 h-[100vh]">
      <div className="relative">
        <div className="p-sections relative flex h-[35vh] w-full items-center justify-between gap-4 overflow-hidden bg-white bg-gradient-to-tr from-neutral-100 from-10% via-neutral-200 via-60% to-70% py-4 shadow-inner lg:flex-row">
          <h4 dir="ltr" className="z-10 mr-[350px] self-end font-serif text-5xl text-neutral-50 lg:text-6xl">
            5000DA/h
          </h4>

          <AnimatedHeadLogo className="absolute mt-20 w-180 md:w-full lg:mt-44" />
        </div>
        <Image
          src={"/HichamBABAAHMED.jpg"}
          width={300}
          height={300}
          className="absolute top-50 mx-6 rounded object-cover md:mx-10 lg:mx-20 xl:mx-40"
          alt="profile page"
        />
      </div>
    </section>
  );
};

export default page;
