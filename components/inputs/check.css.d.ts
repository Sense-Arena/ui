export declare const checkStyles: {
    containerStyle: import("@vanilla-extract/recipes").RuntimeFn<{
        border: {
            black: {
                border: `1px solid var(--${string})` | `1px solid var(--${string}, ${string})` | `1px solid var(--${string}, ${number})`;
            };
            grey: {
                border: `1px solid var(--${string})` | `1px solid var(--${string}, ${string})` | `1px solid var(--${string}, ${number})`;
            };
        };
        error: {
            true: {
                border: `1px solid var(--${string})` | `1px solid var(--${string}, ${string})` | `1px solid var(--${string}, ${number})`;
            };
        };
        disabled: {
            true: {
                cursor: "not-allowed";
                opacity: number;
            };
            false: {
                selectors: {
                    '&:hover': {
                        backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    };
                };
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
    containerRow: import("@vanilla-extract/recipes").RuntimeFn<{
        disabled: {
            true: {
                cursor: "not-allowed";
                opacity: number;
            };
        };
    }>;
    labelStyle: import("@vanilla-extract/recipes").RuntimeFn<{
        disabled: {
            true: {
                cursor: "not-allowed";
            };
        };
    }>;
};
