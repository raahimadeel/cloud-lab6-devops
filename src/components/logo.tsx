// import { cn } from "@/lib/utils";
// import Image from "next/image";

// export const Logo = ({ className }: { className?: string }) => {
//     return (
//         <div className={cn("flex items-center justify-center w-12 h-12", className)}>
//             <Image
//                 src="https://picsum.photos/seed/scitlogo/100/100"
//                 width={48}
//                 height={48}
//                 alt="SCIT Logo"
//                 className="rounded-md"
//                 data-ai-hint="logo abstract"
//             />
//         </div>
//     )
// }

import { cn } from "@/lib/utils";
import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex items-center justify-center w-24 h-18", className)}>
            <Image
                src="/scit-logo-abstract.png"
                width={100}
                height={70}
                alt="SCIT Logo"
                className="rounded-md"
                data-ai-hint="logo abstract"
            />
        </div>
    )
}
