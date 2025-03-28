import { PropsWithChildren } from "react";

export default function ErrorMessage({children} : PropsWithChildren) {
    return (
        <p className="bg-red-500 p-2 text-white font-bold text-sm text-center">
            {children}
        </p>
    )
}
