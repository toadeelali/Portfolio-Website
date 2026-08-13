import { CategoryPage } from "@/components/CategoryPage";
import { categories } from "@/data/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ category: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = categories[category];
  if (!cat) return {};
  return {
    title: `${cat.headline} — Adeel`,
    description: cat.sub,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = categories[category];
  if (!cat) notFound();
  return <CategoryPage category={cat} />;
}
