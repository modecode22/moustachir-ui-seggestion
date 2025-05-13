import AnimatedHeadLogo from "@repo/ui/icons/AnimatedHeadLogo";

const OurMission = () => {
  return (
    <section id="our-mission" className="bg-primary-500 from-primary-300 via-primary-400 p-sections relative flex min-h-[50vh] w-full items-center justify-between gap-4 overflow-hidden  bg-gradient-to-tr from-10% via-60% to-70% py-4  lg:flex-row shadow-custom-both">
      <section className="relative z-1">
        <h2 className="mb-4 text-5xl font-bold text-neutral-50 lg:text-6xl">مهمتنا</h2>
        <p className="text-neutral-400 lg:max-w-3xl lg:text-lg">
          تهدف مستشير لنشر ثقافة الإستشارات في الجزائر عن طريق توفير فضاء يرشدكم نحو الأفضل، ويختصر عليكم الجهد والمال
          والوقت. لأننا نؤمن بأن للإستشارات دور مهم لنجاح أي مشروع في الحياة، قد وفرنا لكم منصة مستشير للإستشارات عن
          بعد، تتيح لك فرصة اللقاء والحصول على استشارات من طرف أفضل الشخصيات الجزائرية المحلية والعالمية الفاعلة في
          مجالها: استشارات رواد أعمال، المؤسسات الناشئة ، إقتصادية ومالية، التصدير والإستيراد، قانونية، تقنية
          وتكنولوجية، التجارة الإلكترونية، التوصيل والدفع الإلكتروني، صناعة المحتوى والتسويق الرقمي، الهندسة المعمارية
          والمدنية، فلاحية، تعليمية ولغوية، إعلامية وفنية، إجتماعية و أسرية
        </p>
      </section>

      <AnimatedHeadLogo className="absolute mt-20 w-180 md:w-full lg:mt-44" />
    </section>
  );
};

export default OurMission;
