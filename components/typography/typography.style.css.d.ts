export declare const h1Style: import("@vanilla-extract/recipes").RuntimeFn<{
    weight: {
        light: {
            fontWeight: number;
        };
        medium: {
            fontWeight: number;
        };
        normal: {
            fontWeight: number;
        };
    };
    root: {
        h1: {
            fontSize: "80px";
            lineHeight: "96px";
            letterSpacing: "1.5px";
            '@media': {
                'screen and (max-width: 834px)': {
                    fontSize: "48px";
                    letterSpacing: "0.75px";
                    lineHeight: "57px";
                };
                'screen and (max-height: 796px)': {
                    fontSize: "48px";
                    letterSpacing: "0.75px";
                    lineHeight: "57px";
                };
            };
        };
        h2: {
            fontSize: "48px";
            letterSpacing: "0.75px";
            lineHeight: "57px";
            '@media': {
                'screen and (max-width: 834px)': {
                    fontSize: "24px";
                    letterSpacing: "0.38px";
                    lineHeight: "28px";
                };
            };
        };
        h3: {
            fontSize: "24px";
            letterSpacing: "0.38px";
            lineHeight: "28px";
            '@media': {
                'screen and (max-width: 834px)': {
                    fontSize: "18px";
                    letterSpacing: "0";
                    lineHeight: "22px";
                };
            };
        };
        h4: {
            fontSize: "18px";
            letterSpacing: "0";
            lineHeight: "22px";
        };
    };
}>;
export declare const paragraphStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        perex: {
            fontSize: "32px";
            fontWeight: number;
            lineHeight: "40px";
            '@media': {
                'screen and (max-width: 834px)': {
                    fontSize: "24px";
                    lineHeight: "32px";
                };
                'screen and (max-height: 796px)': {
                    fontSize: "24px";
                    lineHeight: "32px";
                };
            };
        };
        body: {
            fontSize: "24px";
            fontWeight: number;
            lineHeight: "32px";
            '@media': {
                'screen and (max-width: 834px)': {
                    fontSize: "18px";
                    lineHeight: "24px";
                    fontWeight: number;
                };
            };
        };
        caption: {
            fontSize: "18px";
            lineHeight: "24px";
        };
        label: {
            fontSize: "16px";
            fontWeight: number;
            lineHeight: "19px";
        };
        note: {
            fontSize: "14px";
            lineHeight: "20px";
        };
    };
}>;
