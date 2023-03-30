export declare const pLinkStyle: string;
export declare const linkStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        primary: {
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            fontSize: "24px";
            letterSpacing: "-0.5px";
            lineHeight: "28px";
            '@media': {
                'screen and (max-width: 768px)': {
                    fontSize: "18px";
                    letterSpacing: "0";
                    lineHeight: "24px";
                };
            };
        };
        secondary: {
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            fontSize: "18px";
            letterSpacing: number;
            lineHeight: "24px";
        };
    };
}>;
export declare const linkTxtStyle: Record<"primary" | "secondary", string>;
