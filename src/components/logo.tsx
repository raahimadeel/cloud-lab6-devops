import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex items-center justify-center w-10 h-10", className)}>
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-primary"
            >
                <g>
                    <path d="M50 10 C40 20, 30 50, 50 90" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path d="M50 10 C42 25, 35 50, 50 90" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path d="M50 10 C44 30, 40 50, 50 90" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path d="M50 10 C46 35, 45 50, 50 90" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path d="M50 10 C48 40, 50 50, 50 90" stroke="currentColor" strokeWidth="4" fill="none" />
                </g>
                <g transform="scale(-1, 1) translate(-100, 0)">
                    <path d="M50 10 C40 20, 30 50, 50 90" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path d="M50 10 C42 25, 35 50, 50 90" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path d="M50 10 C44 30, 40 50, 50 90" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path d="M50 10 C46 35, 45 50, 50 90" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path d="M50 10 C48 40, 50 50, 50 90" stroke="currentColor" strokeWidth="4" fill="none" />
                </g>
            </svg>
        </div>
    )
}
