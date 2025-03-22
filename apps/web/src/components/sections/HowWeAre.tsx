import AnimatedHeadLogo from "@repo/ui/icons/AnimatedHeadLogo";

const HowWeAre = () => {
  return (
    <section className="bg-primary-500 relative from-primary-300 via-primary-400 p-sections flex h-[50vh] w-full items-center justify-between overflow-hidden bg-gradient-to-tr from-10% via-60% to-70% py-4 shadow-inner lg:flex-row  gap-4">
      <section className="relative z-1">
        <h2 className="lg:text-6xl text-5xl mb-4 font-bold text-neutral-50">من نحن ؟</h2>
        <p className="lg:text-lg text-neutral-400 lg:max-w-3xl">
          تهدف مستشير لنشر ثقافة الإستشارات في الجزائر عن طريق توفير فضاء يرشدكم نحو الأفضل، ويختصر عليكم الجهد والمال
          والوقت. لأننا نؤمن بأن للإستشارات دور مهم لنجاح أي مشروع في الحياة، قد وفرنا لكم منصة مستشير للإستشارات عن
          بعد، تتيح لك فرصة اللقاء والحصول على استشارات من طرف أفضل الشخصيات الجزائرية المحلية والعالمية الفاعلة في
          مجالها: استشارات رواد أعمال، المؤسسات الناشئة ، إقتصادية ومالية، التصدير والإستيراد، قانونية، تقنية
          وتكنولوجية، التجارة الإلكترونية، التوصيل والدفع الإلكتروني، صناعة المحتوى والتسويق الرقمي، الهندسة المعمارية
          والمدنية، فلاحية، تعليمية ولغوية، إعلامية وفنية، إجتماعية و أسرية
        </p>
      </section>

      <AnimatedHeadLogo className="lg:mt-44 md:w-full absolute  w-180 mt-20 " />
    </section>
  );
};

export default HowWeAre;
