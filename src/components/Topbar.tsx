"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", href: "/#work", id: "work" },
  { label: "Products", href: "/#products", id: "products" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export function Topbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onSubPage = pathname !== "/";

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 641) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="topbar">
      <div className="inner">
        <Link className="logo" href="/">
          ADEEL <span>{"// CODEGINX"}</span>
        </Link>
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                onSubPage && link.id === "work" ? "current" : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="nav-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="navDrawer"
          onClick={() => setOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className={`nav-drawer${open ? " open" : ""}`}
        id="navDrawer"
        aria-hidden={!open}
      >
        <div className="nav-drawer-head">
          <div className="logo">
            ADEEL <span>{"// CODEGINX"}</span>
          </div>
          <button
            type="button"
            className="nav-close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>
        <nav className="nav-drawer-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div
        className={`nav-backdrop${open ? " open" : ""}`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />
    </header>
  );
}
