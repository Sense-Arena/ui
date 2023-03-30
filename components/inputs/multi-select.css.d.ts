export declare const multiSelectStyles: {
    iconStyle: string;
    label: string;
    text: import("@vanilla-extract/recipes").RuntimeFn<{
        withLabel: {
            true: {
                paddingTop: number;
            };
        };
    }>;
    container: import("@vanilla-extract/recipes").RuntimeFn<{
        border: {
            black: {
                border: `1px solid var(--${string})` | `1px solid var(--${string}, ${string})` | `1px solid var(--${string}, ${number})`;
            };
            grey: {
                border: `1px solid var(--${string})` | `1px solid var(--${string}, ${string})` | `1px solid var(--${string}, ${number})`;
            };
        };
        disabled: {
            true: {
                opacity: number;
                cursor: "not-allowed";
                selectors: {
                    '&:hover': {
                        backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    };
                };
            };
        };
        error: {
            true: {
                border: `1px solid var(--${string})` | `1px solid var(--${string}, ${string})` | `1px solid var(--${string}, ${number})`;
            };
        };
        opened: {
            true: {
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        fullWidth: {
            true: {
                width: "100%";
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
    select: string;
    chips: import("@vanilla-extract/recipes").RuntimeFn<{
        withLabel: {
            true: {
                marginTop: number;
                marginBottom: number;
            };
        };
    }>;
    chip: string;
};
