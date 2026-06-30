import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Filmes from "./Filmes";

export default function PaginaInicial({ navigation }) {
    const API = "http://10.0.2.2:3000/filmes";

    const [filmes, setFilmes] = useState([]);
    const [nome, setNome] = useState("");
    const [genero, setGenero] = useState("");
    const [ano, setAno] = useState("");
    const [capa, setCapa] = useState("");

    async function carregarFilmes() {
        const resposta = await fetch(API);
        const dados = await resposta.json();
        setFilmes(dados);
    }

    async function adicionaFilme() {
        const novoFilme = {
            nome: nome,
            ano: Number(ano),
            genero: genero,
            capa: capa,
        };

        await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(novoFilme),
        });

        setNome("");
        setAno("");
        setGenero("");
        setCapa("");

        carregarFilmes();
    }

    async function deletarFilme(id) {
        await fetch(`${API}/${id}`, {
            method: "DELETE",
        });

        carregarFilmes();
    }

    useEffect(() => {
        carregarFilmes();
    }, []);

    return (
        <View style={styles.View}>
            <Text style={styles.Titulo}>Lista de Filmes</Text>

            <TextInput
                placeholder="Digite o nome do filme"
                placeholderTextColor="#A9A9A9"
                value={nome}
                onChangeText={setNome}
                style={styles.Input}
            />

            <TextInput
                placeholder="Digite o gênero do filme"
                placeholderTextColor="#A9A9A9"
                value={genero}
                onChangeText={setGenero}
                style={styles.Input}
            />

            <TextInput
                placeholder="Digite o ano do filme"
                placeholderTextColor="#A9A9A9"
                value={ano}
                onChangeText={setAno}
                keyboardType="numeric"
                style={styles.Input}
            />

            <TextInput
                placeholder="Digite a URL da capa do filme"
                placeholderTextColor="#A9A9A9"
                value={capa}
                onChangeText={setCapa}
                style={styles.Input}
            />

            <TouchableOpacity onPress={adicionaFilme} style={styles.Button}>
                <Text style={styles.TextButton}>Adicionar</Text>
            </TouchableOpacity>

            <Filmes
                filmes={filmes}
                deletarFilme={deletarFilme}
                navigation={navigation}
            />
        </View>
    );
}

const styles = {
    View: {
        flex: 1,
        backgroundColor: "#0B0B0F",
        padding: 25,
    },

    Titulo: {
        color: "#B026FF",
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15,
    },

    Input: {
        borderWidth: 1,
        borderColor: "#8A2BE2",
        marginTop: 10,
        backgroundColor: "#15151C",
        color: "#FFFFFF",
        padding: 10,
        borderRadius: 10,
    },

    Button: {
        width: "55%",
        borderRadius: 15,
        marginTop: 15,
        height: 42,
        backgroundColor: "#8A2BE2",
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