export declare const iconBtnStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    color: {
        primary: {
            border: "none";
            selectors: {
                '&:focus:not(:disabled)': {
                    border: `2px solid var(--${string})` | `2px solid var(--${string}, ${string})` | `2px solid var(--${string}, ${number})`;
                };
            };
        };
        secondary: {
            border: `1px solid var(--${string})` | `1px solid var(--${string}, ${string})` | `1px solid var(--${string}, ${number})`;
            selectors: {
                '&:focus:not(:disabled)': {
                    border: `2px solid var(--${string})` | `2px solid var(--${string}, ${string})` | `2px solid var(--${string}, ${number})`;
                };
            };
        };
    };
    size: {
        m: {
            height: "48px";
            width: "48px";
            minHeight: "48px";
            minWidth: "48px";
            fontSize: "24px";
            borderRadius: "10px";
        };
        s: {
            height: "36px";
            width: "36px";
            minHeight: "36px";
            minWidth: "36px";
            fontSize: "16px";
            borderRadius: "8px";
        };
    };
}>;
