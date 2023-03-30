export declare const tableStyles: {
    table: string;
    tCell: import("@vanilla-extract/recipes").RuntimeFn<{
        cellType: {
            head: {
                padding: "1.5em 0.75em";
                borderBottom: `1px solid var(--${string})` | `1px solid var(--${string}, ${string})` | `1px solid var(--${string}, ${number})`;
            };
            body: {
                padding: "0.75rem";
                height: number;
                borderBottom: `1px dashed var(--${string})` | `1px dashed var(--${string}, ${string})` | `1px dashed var(--${string}, ${number})`;
            };
        };
        align: {
            center: {
                textAlign: "center";
            };
            right: {
                textAlign: "right";
            };
        };
        minWidth: {
            true: {
                width: number;
            };
        };
        withoutPadding: {
            all: {
                padding: number;
            };
            top: {
                paddingTop: number;
            };
            bottom: {
                paddingBottom: number;
            };
        };
    }>;
    withHover: import("@vanilla-extract/recipes").RuntimeFn<{
        hover: {
            true: {
                cursor: "pointer";
                selectors: {
                    '&:hover': {
                        backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    };
                };
            };
        };
    }>;
};
