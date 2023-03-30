export declare const containerStyle: import("@vanilla-extract/recipes").RuntimeFn<{
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
    withEndAdornment: {
        true: {
            padding: "0 4px 0 0";
        };
        false: {
            padding: "0";
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
export declare const fieldWrap: string;
export declare const fieldEndAdornment: string;
export declare const fieldEndIcon: string;
export declare const labelStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        simple: {
            fontSize: "18px";
            lineHeight: "24px";
            transform: "translateY(16px)";
        };
        focused: {
            fontSize: "14px";
            lineHeight: "20px";
            transform: "translateY(8px)";
        };
    };
    disabled: {
        true: {
            cursor: "not-allowed";
        };
    };
}>;
export declare const inputStyle: import("@vanilla-extract/recipes").RuntimeFn<{
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
    withIcon: {
        true: {
            paddingRight: number;
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
