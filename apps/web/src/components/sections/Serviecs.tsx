import { services } from "@/lib/constants";
import { Card, CardContent, CardHeader } from "@repo/ui/card";
import LogoHead from "@repo/ui/icons/LogoHead";
import { ReactNode } from "react";

export default function Services() {
  return (
    <section id="services" className="p-sections py-20 w-full select-none">
      <div className="@container w-full mx-auto">
        <h2 className="text-primary-500  text-right text-5xl font-bold lg:text-6xl">خدماتنا</h2>
        <div className="mx-auto mt-12 grid  gap-8 *:text-center md:mt-14 @min-4xl:max-w-full @min-4xl:grid-cols-3 grid-cols-1 md:grid-cols-2 w-full ">

          {services.map((service) => {
            return (
              <Card
                key={service.title}
                className="group relative overflow-hidden rounded border border-neutral-100 bg-gradient-to-b from-white via-white to-neutral-50 p-1 shadow-lg shadow-zinc-100/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary-50 hover:shadow-xl w-full"
              >
                <CardHeader className="pb-4 z-10 relative">
                  <CardDecorator>
                    <service.icon
                      className="group-hover:text-secondary-300 text-primary-200 size-6 transition-all duration-300 group-hover:scale-110"
                      aria-hidden
                    />
                  </CardDecorator>
                  <h3 className="mt-6 text-lg font-semibold text-neutral-900">{service.title}</h3>
                </CardHeader>
                <CardContent className="z-10 relative">
                  <p className="text-sm  text-neutral-600">{service.description}</p>
                </CardContent>
                <LogoHead className="absolute inset-0 top-8  duration-100 transition-all" pathClasses="fill-neutral-100/50 stroke-0 duration-150 transition-all" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200">
    <div
      aria-hidden
      className="from-primary-100/50 to-secondary-100/50 absolute inset-0 rounded-full bg-gradient-to-r opacity-0 blur-md transition-all duration-500 group-hover:opacity-60 group-hover:blur-xl"
    />
    <div
      aria-hidden
      className="from-primary-200/50 to-secondary-200/50 absolute inset-0 rounded-full bg-gradient-to-tr opacity-0 blur-lg transition-all delay-75 duration-500 group-hover:opacity-50 group-hover:blur-2xl"
    />
    <div className="absolute inset-0 m-auto flex size-14 items-center justify-center rounded border border-zinc-200 bg-white shadow-md transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-lg">
      <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">{children}</div>
    </div>
  </div>
);
