"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <nav className="p-4 border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href={`/${locale}`} className="font-semibold">
          GSphotography
        </Link>

        <div className="flex gap-6 items-center">
          <Link href={`/${locale}`}>{t("home")}</Link>
          <Link href={`/${locale}/portfolio`}>{t("gallery")}</Link>
          <Link href={`/${locale}/about`}>{t("about")}</Link>
          <Link href={`/${locale}/contact`}>{t("contact")}</Link>
        </div>
      </div>
    </nav>
  );
}
