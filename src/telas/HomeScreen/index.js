import React from "react";
import { View, Image, TouchableOpacity, Text, FlatList} from "react-native";

import styles from "./style";
import { Card } from "react-native-elements";

export default function HomeScreen(){
    const listasCompras = [
        {id:'1', nome:'Lista atacadão', dia:'23/02/2024', tipo:'supermercado'},
        {id:'2', nome:'Lista Ferragens', dia:'03/02/2024', tipo:'construção'},
        {id:'3', nome:'Lista escolar', dia:'01/01/2024', tipo:'papelaria'},
        {id:'4', nome:'Lista frutaria', dia:'23/12/2023', tipo:'supermercado'},
        {id:'5', nome:'Lista compras', dia:'23/02/2024', tipo:'supermercado'},
        {id:'6', nome:'Lista atacadão', dia:'23/02/2024', tipo:'supermercado'},
        {id:'7', nome:'Lista atacadão', dia:'23/02/2024', tipo:'supermercado'},
        {id:'8', nome:'Lista atacadão', dia:'23/02/2024', tipo:'supermercado'},
    ]
    const ListaComprasItem = ({ item }) => (
        <Card containerStyle={styles.estiloCard}>
          <Card.Title style={styles.estiloCardTitulo}>{item.nome}</Card.Title>
          <Card.Divider />
          <Text style={styles.estiloCardTexto}>Data: {item.dia}</Text>
        </Card>
      );

    return(
        <View style={styles.conteudoPrincipal}>
            
                <Image source={require('../../../assets/img1.jpg')} style={styles.imagem} />
                <TouchableOpacity style={styles.botaoCriartarefa}>
                    <Text style={styles.textoBotaoCriarTarefa}>Criar nova lista</Text>
                </TouchableOpacity>

                <FlatList
                    style={styles.estiloFlatList}
                    showsVerticalScrollIndicator={true} keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ListaComprasItem item={item} />}
                    ItemSeparatorComponent={() => <View style={styles.separador} />} // Adicione um separador
                    ListEmptyComponent={<Text style={styles.listaVazia}>Nenhuma lista encontrada</Text>} // Mensagem quando a lista estiver vazia
                />
            
        </View>
    )
}