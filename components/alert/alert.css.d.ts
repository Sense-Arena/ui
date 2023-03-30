export declare const alertStyles: {
    alertContainer: import("@vanilla-extract/recipes").RuntimeFn<{
        severity: {
            error: {
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            warning: {
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            info: {
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            success: {
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        bRadius: {
            10: {
                borderRadius: "10px";
            };
            8: {
                borderRadius: "8px";
            };
        };
    }>;
    iconWrap: string;
    svg: string;
    message: string;
};
