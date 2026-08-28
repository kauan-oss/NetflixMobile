import { useEffect, useRef } from "react";
import { View, Animated } from "react-native";

export default function Shimmer() {
    const movimento = useRef(new Animated.Value(-250)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(movimento, {
                toValue: 250,
                duration: 1200,
                useNativeDriver: true,
            })
        ).start();
    }, []);

    return (
        <View style={styles.card}>
            <View style={styles.titulo} />
            <View style={styles.imagem} />
            <View style={styles.botao} />

            <Animated.View
                style={[
                    styles.luz,
                    {
                        transform: [{ translateX: movimento }],
                    },
                ]}
            />
        </View>
    );
}

const styles = {
    card: {
        height: 285,
        marginTop: 15,
        backgroundColor: "#15151C",
        borderWidth: 1,
        borderColor: "#8A2BE2",
        borderRadius: 15,
        alignItems: "center",
        padding: 15,
        overflow: "hidden",
    },

    titulo: {
        width: 180,
        height: 20,
        backgroundColor: "#2A2A33",
        borderRadius: 5,
    },

    imagem: {
        width: 250,
        height: 200,
        marginTop: 10,
        backgroundColor: "#2A2A33",
        borderRadius: 10,
    },

    botao: {
        width: 120,
        height: 40,
        marginTop: 10,
        backgroundColor: "#2A2A33",
        borderRadius: 15,
    },

    luz: {
        position: "absolute",
        width: 70,
        height: "120%",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
};
