import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const protocol = h.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;
  const title = "TBI Benefit Advisors | Florida Health Insurance Guidance";
  const description = "Personal guidance for ACA health insurance plan options in Florida from TBI Benefit Advisors, serving clients since 1999.";
  return { title, description, openGraph: { title, description, images: [{ url: image, width: 1733, height: 907, alt: "TBI Benefit Advisors — Florida health insurance guidance since 1999" }] }, twitter: { card: "summary_large_image", title, description, images: [image] } };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
