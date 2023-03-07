import { PropsWithChildren } from "react";
import Footer from "./Footer";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col min-h-screen gap-16">
      <main className="mb-auto">
        {children}
      </main>
      <Footer />
    </div>
  )
}
