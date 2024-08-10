"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";
import { DialogContent } from "./ui/Dialog";

interface ServiceItem {
    title: string;
    details: React.ReactNode | string;
    thumbnail: string;
    href: string;
    category?: string[];
}

interface ServiceDialogProps {
    item: ServiceItem;
}

export const ServiceDialog: React.FC<ServiceDialogProps> = ({ item }) => (
    <DialogContent className="sm:max-w-[425px]">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-[50px] h-[50px]">
          <Image
            src={item.thumbnail}
            alt={`${item.title} icon`}
            fill
            sizes="50px"
            className="object-contain rounded-md"
          />
        </div>
        <h2 className="text-lg font-semibold">{item.title}</h2>
      </div>
      
      <div className="mb-4">{item.details}</div>
      <Button asChild>
        <Link href={item.href} target="_blank" rel="noopener noreferrer">
            Learn More
        </Link>
      </Button>
    </DialogContent>
  );
  
  export default ServiceDialog;
