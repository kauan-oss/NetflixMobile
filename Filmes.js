import { FlatList } from "react-native";
import FilmeCard from "./FilmeCard";

export default function Filmes({ filmes, deletarFilme, navigation }) {
    return (
        <FlatList
            data={filmes}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 30 }}
            renderItem={({ item }) => (
                <FilmeCard
                    filme={item}
                    deletarFilme={deletarFilme}
                    navigation={navigation}
                />
            )}
        />
    );
}