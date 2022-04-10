import React, { ReactNode } from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { fonts, colors } from "../../theme";

interface WFLTextProps extends TextProps {
    children: ReactNode;
    font?: string;
    size?: string;
    color?: string;
}

const WFLText = ({ children, font, size, style, color = colors.white, ...props }: WFLTextProps) => {
    return (
        <Text
            style={[
                styles.text,
                {
                    fontFamily: font ? fonts.fontStyle[font] : fonts.fontStyle.black,
                    fontSize: size ? fonts.fontSize[size] : fonts.fontSize.h4,
                    color: colors[color] ? colors[color] : color,
                },
                style,
            ]}
            textBreakStrategy="simple"
            {...props}>
            {children && children}
        </Text>
    );
};

export default WFLText;

const styles = StyleSheet.create({
    text: {
        textAlign: "left",
        letterSpacing: 0.5,
        includeFontPadding: false,
    },
});
