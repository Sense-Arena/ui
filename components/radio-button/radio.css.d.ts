export declare const radioBtnStyles: {
    container: import("@vanilla-extract/recipes").RuntimeFn<{
        checked: {
            true: {
                color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        disabled: {
            true: {
                opacity: number;
                cursor: "not-allowed";
                ':hover': {
                    backgroundColor: "transparent";
                };
            };
        };
    }>;
    input: string;
    containerIcons: string;
    svgRound: string;
    svgInside: import("@vanilla-extract/recipes").RuntimeFn<{
        checked: {
            true: {
                transform: "scale(1)";
                transition: "transform 150ms cubic-bezier(0, 0, 0.2, 1) 0ms";
            };
            false: {
                transform: "scale(0)";
                transition: "transform 150ms cubic-bezier(0.4, 0, 1, 1) 0ms";
            };
        };
    }>;
};
