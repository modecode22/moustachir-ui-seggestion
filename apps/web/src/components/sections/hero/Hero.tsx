import { ElegantShapes } from "./ElegantShape";
import { HeroAnimations } from "./HeroAnimations";

interface HeroProps {
  badge?: string;
  title1?: string;
  title2?: string;
}

export function Hero({ badge = "مستشير", title1 = "نرشدكم", title2 = "نحو الأفضل" }: HeroProps) {
  const description =
    "مستشير هي منصة إستشارات إلكترونية تتيح لك فرصة اللقاء و الحصول على إستشارات من طرف أفضل الشخصيات الجزائرية، المحلية والعالمية الفاعلة في مختلف المجالات";
  const buttonText = "أصبح مستشار";
  const seccondButtonText = "طلب إستشارة";

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative flex min-h-screen w-full justify-center overflow-hidden bg-neutral-100 pt-44 sm:items-center sm:pt-0"
      dir="rtl"
    >
      {/* Static background gradient - server rendered */}
      <div className="absolute inset-0" />
      {/* Client-side shapes that don't impact SEO */}
      <ElegantShapes />
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* SEO-friendly server-rendered content (visible to crawlers) */}
          <div className="sr-only">
            <div>{badge}</div>
            <h1>
              {title1} {title2}
            </h1>
            <p>{description}</p>
            <button>{buttonText}</button>
          </div>
          {/* Visible animated content (for visual users) */}
          <HeroAnimations
            badge={badge}
            title1={title1}
            title2={title2}
            description={description}
            buttonText={buttonText}
            seccondButtonText={seccondButtonText}
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-50 via-neutral-50/60 to-neutral-50/80" />
    </section>
  );
}
