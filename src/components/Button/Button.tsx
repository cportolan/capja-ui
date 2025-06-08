import { ReactNode } from "react";
import { Spinner } from "../Spinner/Spinner";

type ButtonProps = {
    children: ReactNode;
    variant?: "primary" | "secondary";
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    size?: "small" | "medium" | "large";
    onClick?: () => void;
};

export const Button = ({ children, variant = "primary", disabled = false, loading = false, className = "", onClick, }: ButtonProps) => {
    const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2 font-semibold transition";

    const variants = {
        primary: "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer",
        secondary: "bg-gray-200 text-black hover:bg-gray-300 cursor-pointer",
    };

    const disabledStyles = "bg-gray-400 text-gray-600 cursor-not-allowed opacity-50";
    const loadingStyles = "bg-blue-300 text-white cursor-wait";

    const isInteractive = !disabled && !loading;

    const finalClassName = [base, isInteractive ? variants[variant] : loading ? loadingStyles : disabledStyles, className].join(" ");

    return (
        <button onClick={isInteractive ? onClick : undefined} disabled={!isInteractive} className={finalClassName}>
            {loading && <Spinner size={18} color="white" />}
            {loading ? "Cargando..." : children}
        </button>
    );
};
