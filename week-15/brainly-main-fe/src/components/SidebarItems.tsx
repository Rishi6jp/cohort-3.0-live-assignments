import type { ReactElement } from "react";

export function SidebarItem({text, icon}:{
    text: string;
    icon: ReactElement;
}) {
    return <div className="flex items-center text-gray-700 py-2 hover:bg-gray-200 rounded transition-all duration-150">
        <div className="pr-2">
            {icon}
        </div>
        <div>
            {text}
        </div>
    </div>
}