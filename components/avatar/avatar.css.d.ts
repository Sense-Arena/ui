export declare const avatarStyles: {
    container: import("@vanilla-extract/recipes").RuntimeFn<{
        bg: {
            white: {
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        size: {
            m: {
                width: "54px";
                height: "54px";
            };
            s: {
                width: "36px";
                height: "36px";
            };
            l: {
                width: "98px";
                height: "98px";
            };
        };
    }>;
    img: string;
    loading: string;
};
