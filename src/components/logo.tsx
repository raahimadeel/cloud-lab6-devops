import { cn } from "@/lib/utils";
import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex items-center justify-center w-12 h-12", className)}>
            <Image
                src="https://picsum.photos/seed/scitlogo/100/100"
                width={48}
                height={48}
                alt="SCIT Logo"
                className="rounded-full"
                data-ai-hint="logo abstract"
            />
        </div>
    )
}