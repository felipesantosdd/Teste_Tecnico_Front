import { BubbleStyle, ContextProps, ProviderType } from "@/interfaces/interfaces";
import { CSSProperties, createContext, useEffect, useState } from "react";



export const Context = createContext<ContextProps>({} as ContextProps)


export function Provider({ children }: ProviderType) {
    const [bubbleStyles, setBubbleStyles] = useState<CSSProperties[]>([]);

    function bubbles() {
        const arr: CSSProperties[] = [];

        for (let i = 0; i < 30; i++) {
            let randNum = Math.floor(Math.random() * 41) + 10;
            arr.push({ "--i": randNum } as CSSProperties);
        }

        setBubbleStyles(arr)
        console.log(bubbleStyles)
        return arr
    }

    return (
        <Context.Provider value={{ bubbleStyles, setBubbleStyles, bubbles }}>
            {children}
        </Context.Provider>
    );
}
