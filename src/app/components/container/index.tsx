"use client";
import { usePathname } from "next/navigation";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container(props: ContainerProps) {
  const { children } = props;
  const pathname = usePathname();
  if (pathname === "/") {
    return <main>{children}</main>;
  }
  return <main className=" max-w-screen-xl mx-auto p-4">{children}</main>;
}
