import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

const BRAND = "EuraLink Logistics";

const WHATSAPP_URL =
  String(import.meta.env.VITE_WHATSAPP_URL ?? "").trim() ||
  "https://wa.me/77758841790?text=" +
    encodeURIComponent(
      "Hello, I would like to know more about EuraLink Logistics / 你好，我想了解 EuraLink Logistics 跨境物流合作"
    );

const LOGO_SRC = "/logo.png";
const BG_SRC = "/bg.png";

function Bilingual({ cn, ru, className = "" }: { cn: string; ru: string; className?: string }) {
  return (
    <div className={className}>
      <p className="text-white font-semibold leading-snug">{cn}</p>
      <p className="mt-1.5 text-sm text-orange-400/95 leading-snug">{ru}</p>
    </div>
  );
}

function GlassCard({
  children,
  delay = 0,
  className = "",
  float = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  float?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] ${className}`}
    >
      <motion.div
        animate={float ? { y: [0, -5, 0] } : undefined}
        transition={float ? { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: delay * 1.5 } : undefined}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function IconWhatsApp({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-label="WhatsApp"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function Landing() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start start", "end end"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  useEffect(() => {
    document.title = BRAND;
  }, []);

  return (
    <div className="relative min-h-dvh w-full overflow-x-hidden bg-black text-white">
      <div className="fixed inset-0 z-0" aria-hidden>
        <img src={BG_SRC} alt="" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <motion.div ref={scrollRef} style={{ y: contentY }} className="relative z-10">
        <section className="relative flex min-h-dvh flex-col items-center justify-center px-6 pb-28 pt-[max(2.5rem,env(safe-area-inset-top))] text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full max-w-2xl flex-col items-center gap-0"
          >
            <motion.div
              className="inline-flex flex-col items-center leading-[0]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              <div className="flex flex-col items-center -space-y-[5.25rem]">
                <img
                  src={LOGO_SRC}
                  alt="EuraLink"
                  className="block h-auto w-[min(96vw,840px)] max-h-[256px] object-contain object-bottom [filter:none]"
                  width={840}
                  height={256}
                />
                <p className="m-0 p-0 text-[22px] font-bold uppercase tracking-[0.22em] text-orange-400 leading-none">
                  Logistics
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mt-10 w-full space-y-3 border-t border-white/10 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <p className="text-[17px] font-semibold leading-relaxed text-white/95">
                连接中国与中亚的
                <span className="text-orange-400">高效物流网络</span>
              </p>
              <p className="text-[13px] font-medium leading-relaxed text-orange-400/85">
                Эффективная логистическая сеть между Китаем и Центральной Азией
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1">
              <motion.div
                className="h-1.5 w-1 rounded-full bg-orange-400"
                animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        <section className="px-5 pb-8 pt-4">
          <motion.h2
            className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-white/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            WHO WE SERVE
          </motion.h2>
          <div className="mx-auto flex max-w-md flex-col gap-4">
            <GlassCard delay={0} float className="p-5">
              <Bilingual cn="本地批发商" ru="Местные оптовики" />
            </GlassCard>
            <GlassCard delay={0.08} float className="p-5">
              <Bilingual cn="中国电商卖家" ru="Китайские e-commerce продавцы" />
            </GlassCard>
            <GlassCard delay={0.16} float className="p-5">
              <Bilingual cn="跨境贸易企业" ru="Компании международной торговли" />
            </GlassCard>
          </div>
        </section>

        <section className="px-5 pb-32 pt-6">
          <motion.h2
            className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-white/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            WHY EURALINK
          </motion.h2>
          <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
            {[
              { cn: "稳定清关", ru: "Стабильная растаможка" },
              { cn: "自主运力", ru: "Собственная логистическая сеть" },
              { cn: "本地执行网络", ru: "Локальное исполнение" },
              { cn: "中国-中亚物流经验", ru: "Опыт перевозок Китай–Центральная Азия" },
            ].map((item, i) => (
              <GlassCard key={item.cn} delay={i * 0.06} className="p-4">
                <p className="text-sm font-bold text-white">{item.cn}</p>
                <p className="mt-2 text-xs leading-snug text-orange-400/90">{item.ru}</p>
              </GlassCard>
            ))}
          </div>
        </section>
      </motion.div>

      <div className="fixed bottom-0 left-0 right-0 z-50 px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 to-transparent" />
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Contact us on WhatsApp"
          className="relative mx-auto flex max-w-md items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 font-bold text-white shadow-[0_0_32px_rgba(37,211,102,0.45)]"
          whileTap={{ scale: 0.98 }}
          animate={{
            boxShadow: [
              "0 0 24px rgba(37,211,102,0.35)",
              "0 0 40px rgba(37,211,102,0.55)",
              "0 0 24px rgba(37,211,102,0.35)",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
            <IconWhatsApp className="h-6 w-6 shrink-0 text-white" />
          </span>
          <span className="flex flex-col items-start leading-tight">
            <span className="text-base">立即联系</span>
            <span className="text-xs font-semibold opacity-90">Связаться сейчас</span>
          </span>
        </motion.a>
      </div>
    </div>
  );
}
