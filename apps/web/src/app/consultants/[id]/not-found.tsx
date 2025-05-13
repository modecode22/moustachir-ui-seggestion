import { cn } from "@repo/ui/lib/utils";
import { buttonVariants } from "@repo/ui/stylesui/buttons";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="p-sections flex min-h-[100vh] flex-col items-center justify-center gap-4">
      <div className="text-2xl text-neutral-500">لم يتم العثور على المستشار</div>
      <Link className={cn(buttonVariants({ variant: "primary-solid" }))} href="/consultants">
        العودة إلى قائمة المستشارين
      </Link>
    </section>
  );
}
