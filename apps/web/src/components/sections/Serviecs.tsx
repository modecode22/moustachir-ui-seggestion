import { services } from "@/lib/constants";
import { Card, CardContent, CardHeader } from "@repo/ui/card";
import { ReactNode } from "react";

export default function Services() {
  return (
    <section className="p-sections py-4">
      <div className="@container mx-auto">
        <h2 className="text-primary-500 mt-14 text-right text-5xl font-bold lg:text-6xl">خدماتنا</h2>
        <div className="mx-auto mt-12 grid max-w-sm gap-8 *:text-center md:mt-14 @min-4xl:max-w-full @min-4xl:grid-cols-3">
          {services.map((service) => {
            return (
              <Card
                key={service.title}
                className="group overflow-hidden rounded border border-zinc-100 bg-white p-1 shadow-lg shadow-zinc-100/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
              >
                <CardHeader className="pb-4">
                  <CardDecorator>
                    <service.icon
                      className="size-6 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-600"
                      aria-hidden
                    />
                  </CardDecorator>
                  <h3 className="mt-6 text-lg font-semibold text-neutral-900">{service.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-600">{service.description}</p>
                </CardContent>
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
      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 opacity-0 blur-md transition-all duration-500 group-hover:opacity-60 group-hover:blur-xl"
    />
    <div
      aria-hidden
      className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-300 to-purple-400 opacity-0 blur-lg transition-all delay-75 duration-500 group-hover:opacity-50 group-hover:blur-2xl"
    />

    <div className="absolute inset-0 m-auto flex size-14 items-center justify-center rounded border border-zinc-200 bg-white shadow-md transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-lg">
      <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">{children}</div>
    </div>
  </div>
);
