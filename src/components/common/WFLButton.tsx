import React, { ReactNode, useEffect } from "react";
import { useState } from "react";
import { StyleSheet, TouchableHighlight, ActivityIndicator, TouchableHighlightProps } from "react-native";

import { colors, borderRadius_btn } from "../../theme";
import WFLText from "./WFLText";

interface WFLButtonProps extends TouchableHighlightProps {
    children: React.ReactNode;
    showLoading?: boolean;
    style?: object;
    loadingInd?: ReactNode;
    onPress?: any;
}

const WFLButton = ({ children, style, showLoading = false, onPress, loadingInd, ...props }: WFLButtonProps) => {
    const [loading, setLoading] = useState(false);

    const loadingCallback = () => {
        setLoading(false);
    };

    const handleOnPress = () => {
        if (showLoading) {
            setLoading(true);
        }

        if (typeof onPress === "function" && !loading) {
            onPress(loadingCallback);
        }
    };

    let content = children;

    if (loading) {
        content = loadingInd || <ActivityIndicator color={colors.white} />;
    } else {
        content = <WFLText size="h4" font="semibold">{children}</WFLText>
    }

    useEffect(() => {
        return () => {
            setLoading(false);
        };
    }, []);

    return (
        <TouchableHighlight
            disabled={loading}
            onPress={handleOnPress}
            underlayColor={colors.primary_selected}
            style={[styles.button, style]}
            {...props}>
            {content}
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 20,
        paddingHorizontal: 40,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: borderRadius_btn,
    },
});

export default WFLButton;
