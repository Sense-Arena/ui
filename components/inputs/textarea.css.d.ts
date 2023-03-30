export declare const textareaStyles: {
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
    labelStyle: import("@vanilla-extract/recipes").RuntimeFn<{
        variant: {
            simple: {
                fontSize: "18px";
                lineHeight: "24px";
                transform: "translateY(10px)";
            };
            focused: {
                fontSize: "14px";
                lineHeight: "20px";
                transform: "translateY(0px)";
            };
        };
        disabled: {
            true: {
                cursor: "not-allowed";
            };
        };
    }>;
    inputStyle: import("@vanilla-extract/recipes").RuntimeFn<{
        variant: {
            simple: {
                opacity: number;
            };
            focused: {
                opacity: number;
            };
        };
        disabled: {
            true: {
                cursor: "not-allowed";
            };
            false: {
                selectors: {
                    '&:focus:not(:disabled)': {
                        outline: number;
                        caretColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    };
                };
            };
        };
    }>;
};
