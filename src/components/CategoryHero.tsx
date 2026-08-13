import Link from 'next/link';
import type { Category } from '@/data/projects';

export function CategoryHero({ category }: { category: Category }) {
  return (
    <section className="phero grid-bg">
      <div className="inner">
        <div className="breadcrumb reveal">
          <Link href="/">Work</Link> / {category.breadcrumb}
        </div>
        <div className="phero-annot reveal">
          <span>
            DWG NO. <b>{category.dwg}</b>
          </span>
          <span>
            CATEGORY <b>{category.categoryNo}</b>
          </span>
          <span>
            SHEET <b>1 OF 1</b>
          </span>
        </div>
        <h1 className="headline reveal">{category.headline}</h1>
        <p className="sub reveal">{category.sub}</p>
      </div>
    </section>
  );
}
