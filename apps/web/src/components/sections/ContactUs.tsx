import { Button } from "@repo/ui/button";
import AnimatedSecondaryLogo from "@repo/ui/icons/AnimatedSecondaryLogo";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import { Textarea } from "@repo/ui/textarea";
import Link from "next/link";
import { PiFacebookLogo, PiInstagramLogo, PiLinkedinLogo } from "react-icons/pi";
import LocationMap from "./LocationMap";

const ContactUs = () => {
  return (
    <>
      <header className="bg-primary-500 from-primary-300 via-primary-400 p-sections relative flex h-[20vh] w-full items-center justify-between gap-4 overflow-hidden bg-gradient-to-tr from-10% via-60% to-70% py-4 shadow-custom-both lg:flex-row">
        <AnimatedSecondaryLogo className="absolute mt-26 w-180 md:w-full lg:mt-54" />
        <h2 className="z-1 mb-4 text-5xl font-bold text-neutral-50 lg:text-6xl">إتصل بنا</h2>
      </header>

      <section className="p-sections flex -translate-y-10 flex-col-reverse gap-6 md:flex-row">
        <section className="flex w-full flex-col gap-6">
          <section className="flex flex-wrap gap-4 pt-6 text-lg md:pt-20">
            <section className="flex flex-col gap-4">
              <section className="flex gap-2">
                <span className="font-semibold">الإيميل</span>
                <Link href="mailto:contact@moustachir.dz">contact@moustachir.dz</Link>
              </section>
              <section className="flex gap-2">
                <span className="font-semibold">الهاتف</span>{" "}
                <Link dir="ltr" href="tel:+213 560 57 53 19">
                  +213 560 57 53 19
                </Link>
              </section>
            </section>

            <section className="flex flex-col gap-4">
              <section className="flex gap-2">
                <span className="font-semibold">العنوان</span> <p>ليدو، برج الكيفان</p>
              </section>
              <section className="flex  gap-4 flex-wrap">
                <span className="font-semibold">قنوات التواصل الإجتماعي</span>
                <section className="flex gap-2">
                  <Button variant={"white-solid"} size={"small-icon"}>
                    <PiLinkedinLogo />
                  </Button>
                  <Button variant={"white-solid"} size={"small-icon"}>
                    <PiFacebookLogo />
                  </Button>
                  <Button variant={"white-solid"} size={"small-icon"}>
                    <PiInstagramLogo />
                  </Button>
                </section>
              </section>
            </section>
          </section>
          <LocationMap
            googleMapsUrl={
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3197.1881577337144!2d3.1912555396728637!3d36.742054471783845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb18782b5f14b%3A0x93e68f26f4b8c9b9!2zU1BBIE1PVVNUQUNISVIgLSDZhdiz2KrYtNmK2LE!5e0!3m2!1sen!2sus!4v1742909708477!5m2!1sen!2sus"
            }
          />
        </section>
        <section className="flex w-full flex-col gap-4 rounded bg-white p-6 shadow-sm md:max-w-md">
          <p>للتواصل معنا يمكنك ملء النموذج التالي وسنقوم بالرد عليك في أقرب وقت ممكن.</p>
          <Label className="flex flex-col gap-2">
            <span className="px-2">الاسم</span>
            <Input placeholder="الاسم" />
          </Label>
          <Label className="flex flex-col gap-2">
            <span className="px-2">الإيميل</span>
            <Input placeholder="الإيميل" />
          </Label>
          <Label className="flex flex-col gap-2">
            <span className="px-2">الرسالة</span>
            <Textarea placeholder="الرسالة" />
          </Label>
          <Button className="self-end">إرسال</Button>
        </section>
      </section>
    </>
  );
};

export default ContactUs;
