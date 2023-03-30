export declare const dividerStyles: {
    divider: import("@vanilla-extract/recipes").RuntimeFn<{
        textAlign: {
            left: {};
            right: {};
            center: {};
        };
        variant: {
            fullWidth: {};
            inset: {
                marginLeft: "72px";
            };
            middle: {};
        };
        orientation: {
            horizontal: {};
            vertical: {
                height: "100%";
                borderBottomWidth: number;
                borderRightWidth: "thin";
            };
        };
        hasChildren: {
            true: {
                display: "flex";
                whiteSpace: "nowrap";
                textAlign: "center";
                border: number;
                '::before': {
                    position: "relative";
                    width: "100%";
                    borderTop: `thin solid var(--${string})` | `thin solid var(--${string}, ${string})` | `thin solid var(--${string}, ${number})`;
                    top: "50%";
                    content: "\"\"";
                    transform: "translateY(50%)";
                };
                '::after': {
                    position: "relative";
                    width: "100%";
                    borderTop: `thin solid var(--${string})` | `thin solid var(--${string}, ${string})` | `thin solid var(--${string}, ${number})`;
                    top: "50%";
                    content: "\"\"";
                    transform: "translateY(50%)";
                };
            };
            false: {};
        };
    }>;
    wrapper: import("@vanilla-extract/recipes").RuntimeFn<{
        orientation: {
            horizontal: {};
            vertical: {
                paddingTop: "1rem";
                paddingBottom: "1rem";
            };
        };
    }>;
};
