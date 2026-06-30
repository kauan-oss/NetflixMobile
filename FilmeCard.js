import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function FilmeCard({ filme, deletarFilme, navigation }) {
    const [erroImagem, setErroImagem] = useState(false);

    const imagemPadrao = "https://placehold.co/250x200/0B0B0F/B026FF/png?text=Sem+Imagem";

    const imagemFilme =
        filme.capa && filme.capa.trim() !== "" && !erroImagem
            ? filme.capa
            : imagemPadrao;

    return (
        <View style={styles.Card}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Detalhes", { filme: filme })}
            >
                <Text style={styles.NomeFilme}>
                    {filme.nome} - {filme.ano}
                </Text>

                <Image
                    source={{ uri: imagemFilme }}
                    style={styles.imagem}
                    resizeMode="cover"
                    onError={() => setErroImagem(true)}
                />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => deletarFilme(filme.id)}
                style={styles.Button}
            >
                <Text style={styles.TextButton}>Excluir</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    Card: {
        marginTop: 15,
        alignItems: "center",
        backgroundColor: "#15151C",
        borderWidth: 1,
        borderColor: "#8A2BE2",
        borderRadius: 15,
        padding: 15,
    },

    NomeFilme: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },

    imagem: {
        width: 250,
        height: 200,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: "#0B0B0F",
        borderWidth: 1,
        borderColor: "#8A2BE2",
    },

    Button: {
        width: "50%",
        borderRadius: 15,
        marginTop: 10,
        height: 40,
        backgroundColor: "#B026FF",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },

    TextButton: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
};