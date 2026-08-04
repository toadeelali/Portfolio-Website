import type { Category } from "@/data/projects";
import { CategoryHero } from "@/components/CategoryHero";
import { Catalog } from "@/components/Catalog";

export function CategoryPage({ category }: { category: Category }) {
  return (
    <>
      <CategoryHero category={category} />
      <Catalog category={category} />
    </>
  );
}
