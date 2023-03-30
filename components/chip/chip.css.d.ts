export declare const chipStyles: {
    chipContainer: import("@vanilla-extract/recipes").RuntimeFn<{
        size: {
            s: {
                borderRadius: "1rem";
                padding: "0 0.5rem";
            };
            m: {
                borderRadius: "1rem";
                padding: "0 0.6rem";
            };
            l: {
                borderRadius: "2rem";
                padding: "0 0.7rem";
            };
        };
        color: {
            primary: {
                background: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            secondary: {
                background: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            warning: {
                background: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            dark: {
                background: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
    }>;
    chipText: import("@vanilla-extract/recipes").RuntimeFn<{
        size: {
            s: {
                borderRadius: "1rem";
                padding: "0.125rem 0";
            };
            m: {
                borderRadius: "1rem";
                padding: "0.25rem 0";
            };
            l: {
                borderRadius: "2rem";
                padding: "0.35rem 0";
            };
        };
    }>;
    chipDelIcon: import("@vanilla-extract/recipes").RuntimeFn<{
        size: {
            s: {
                width: "12px";
                height: "12px";
            };
            m: {
                width: "15px";
                height: "15px";
            };
            l: {
                width: "20px";
                height: "20px";
            };
        };
    }>;
    chipDelIconContainer: import("@vanilla-extract/recipes").RuntimeFn<{
        size: {
            s: {
                marginRight: "-0.25rem";
            };
            m: {
                marginRight: "-0.3rem";
            };
            l: {
                marginRight: "-0.35rem";
            };
        };
    }>;
};
