export declare const ddMenuStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    bRadius: {
        10: {
            borderRadius: "10px";
        };
        8: {
            borderRadius: "8px";
        };
    };
}>;
export declare const ddMenuItemStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    selected: {
        true: {
            backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
}>;
export declare const ddMenuItemNotFound: string;
