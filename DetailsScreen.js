import { useState } from "react";
import { View, Text, Image } from "react-native";

export default function DetailsScreen({ route }) {
    const { filme } = route.params;
    const [erroImagem, setErroImagem] = useState(false);

    const imagemPadrao = "https://placehold.co/250x250/0B0B0F/B026FF/png?text=Sem+Imagem";

    const imagemFilme =
        filme.capa && filme.capa.trim() !== "" && !erroImagem
            ? filme.capa
            : imagemPadrao;

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{filme.nome}</Text>

            <Text style={styles.texto}>Ano: {filme.ano}</Text>
            <Text style={styles.texto}>Gênero: {filme.genero}</Text>

            <Image
                source={{ uri: imagemFilme }}
                style={styles.imagem}
                resizeMode="cover"
                onError={() => setErroImagem(true)}
            />
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: "#0B0B0F",
    },

    titulo: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#B026FF",
        textAlign: "center",
    },

    texto: {
        color: "#FFFFFF",
        fontSize: 18,
        marginTop: 5,
    },

    imagem: {
        width: 250,
        height: 250,
        borderRadius: 10,
        marginTop: 20,
        borderWidth: 2,
        borderColor: "#8A2BE2",
        backgroundColor: "#15151C",
    },
};