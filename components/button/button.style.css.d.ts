export declare const btnStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        s: {
            height: "36px";
            minWidth: "90px";
        };
        m: {
            height: "48px";
            minWidth: "148px";
        };
        l: {
            height: "64px";
            minWidth: "199px";
            '@media': {
                'screen and (max-width: 768px)': {
                    height: "48px";
                    minWidth: "148px";
                    borderRadius: "24px";
                };
            };
        };
    };
    color: {
        primary: {
            background: `linear-gradient(270deg, #F33F05 0%, var(--${string}) 100%)` | `linear-gradient(270deg, #F33F05 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, #F33F05 0%, var(--${string}, ${number}) 100%)`;
            selectors: {
                '&:hover:not(:disabled)': {
                    background: `linear-gradient(270deg, var(--${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${number}) 100%)`;
                };
                '&:active:not(:disabled)': {
                    background: `linear-gradient(270deg, var(--${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${number}) 100%)`;
                    transform: "translateY(2px)";
                };
            };
        };
        secondary: {
            background: `linear-gradient(270deg, var(--${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${number}) 100%)`;
            selectors: {
                '&:hover:not(:disabled)': {
                    background: `linear-gradient(270deg, var(--${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${number}) 100%)`;
                };
                '&:active:not(:disabled)': {
                    background: `linear-gradient(270deg, var(--${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${number}) 100%)`;
                    transform: "translateY(2px)";
                };
            };
        };
        secondary_action: {
            background: `linear-gradient(270deg, var(--${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${number}) 100%)`;
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            selectors: {
                '&:hover:not(:disabled)': {
                    background: `linear-gradient(270deg, var(--${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${number}) 100%)`;
                };
                '&:active:not(:disabled)': {
                    background: `linear-gradient(270deg, var(--${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${number}) 100%)`;
                    transform: "translateY(2px)";
                };
            };
        };
        outline: {
            background: "transparent";
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            border: `1px solid var(--${string})` | `1px solid var(--${string}, ${string})` | `1px solid var(--${string}, ${number})`;
            selectors: {
                '&:hover:not(:disabled)': {
                    background: `linear-gradient(270deg, var(--${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${number}) 100%)`;
                };
                '&:active:not(:disabled)': {
                    background: `linear-gradient(270deg, var(--${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${number}) 100%)`;
                    transform: "translateY(2px)";
                };
            };
        };
        outline_secondary: {
            background: "transparent";
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            border: `1px solid var(--${string})` | `1px solid var(--${string}, ${string})` | `1px solid var(--${string}, ${number})`;
            selectors: {
                '&:hover:not(:disabled)': {
                    background: `linear-gradient(270deg, var(--${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${number}) 100%)`;
                };
                '&:active:not(:disabled)': {
                    background: `linear-gradient(270deg, var(--${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${string}) 0%, var(--${string}, ${number}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${string}) 100%)` | `linear-gradient(270deg, var(--${string}, ${number}) 0%, var(--${string}, ${number}) 100%)`;
                    transform: "translateY(2px)";
                };
            };
        };
    };
    mode: {
        rounded: {
            borderRadius: "999px";
        };
        square: {
            borderRadius: "10px";
        };
    };
    fullWidth: {
        true: {
            width: "100%";
            justifyContent: "space-between";
        };
        false: {
            width: "auto";
        };
    };
    minWidth: {
        true: {
            minWidth: "auto";
        };
    };
}>;
export declare const btnTxtStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        s: {
            fontSize: "14px";
            lineHeight: "16px";
        };
        m: {
            fontSize: "16px";
            lineHeight: "19px";
        };
        l: {
            fontSize: "18px";
            lineHeight: "22px";
        };
    };
    fullWidth: {
        true: {
            margin: "auto 0";
        };
    };
    color: {
        primary: {};
        secondary: {};
        secondary_action: {
            textTransform: "unset";
        };
        outline: {};
        outline_secondary: {};
    };
}>;
export declare const btnIconStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    color: {
        primary: {
            color: "inherit";
        };
        secondary: {
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        secondary_action: {
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        outline: {
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        outline_secondary: {
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
    fullWidth: {
        true: {
            margin: "auto 0";
        };
    };
}>;
export declare const btnIconBase: string;
