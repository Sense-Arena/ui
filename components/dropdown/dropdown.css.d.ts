export declare const ddContainerStyle: import("@vanilla-extract/recipes").RuntimeFn<{
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
    size: {
        s: {
            height: "36px";
            padding: "6px 14px";
        };
        m: {
            height: "48px";
            padding: "14px";
        };
        l: {
            height: "60px";
            padding: "18px 14px";
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
export declare const ddText: string;
export declare const ddIconStyle: string;
