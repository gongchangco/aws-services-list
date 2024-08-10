"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { DialogTrigger, Dialog } from "./Dialog";
import ServiceDialog from "../Details";

interface ServiceItem {
    title: string;
    details: React.ReactNode | string;
    thumbnail: string;
    href: string;
    category?: string[];
}
  
interface HoverEffectProps {
    items: ServiceItem[];
    className?: string;
}

export const HoverEffect: React.FC<HoverEffectProps> = ({ items, className }) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-6  py-8",
                className
            )}
        >
            {items.map((item, idx) => (
                <Dialog key={idx}>
                    <DialogTrigger asChild>
                        <div
                            key={idx}
                            className="relative group block p-4"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <AnimatePresence>
                                {hoveredIndex === idx && (
                                    <motion.span
                                        className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-300/[0.5] block rounded-2xl shadow-md"
                                        layoutId="hoverBackground"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { duration: 0.15 },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: { duration: 0.15, delay: 0.2 },
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                            
                            <div className="relative">
                                <Image
                                    src={item.thumbnail}
                                    alt={`${item.title} icon`}
                                    width={70}
                                    height={70}
                                    className="hover:shadow-lg cursor-pointer"
                                />
                            </div>
                        </div>
                    </DialogTrigger>

                    <ServiceDialog item={item} />
                </Dialog>
            ))}
        </div>
    );
};
