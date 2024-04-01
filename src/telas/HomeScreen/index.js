import React from "react";
import { View, Image, TouchableOpacity, Text, FlatList} from "react-native";
import Texto from '../../componentes/Texto'
import styles from "./style";
import { Card } from "react-native-elements";

export default function HomeScreen({navigation}){
    const listasCompras = [
        {id:'1', nome:'Lista atacadão', dia:'23/02/2024', tipo:'supermercado',
        itens:[{produto:'maça',preco: 12.99, quantidade: 5},
                {produto:'leite',preco: 12.99, quantidade: 5},
                {produto:'bolacha',preco: 12.99, quantidade: 5},
                {produto:'pinga',preco: 12.99, quantidade: 5},
                {produto:'bucha',preco: 12.99, quantidade: 5},
                {produto:'refrigerante',preco: 12.99, quantidade: 5},
                {produto:'shampoo',preco: 12.99, quantidade: 5},
                {produto:'sabonete',preco: 1.99, quantidade: 3},
                {produto:'pasta de dente',preco: 6.89, quantidade: 2},
                {produto:'refrigerante zero',preco: 5.00, quantidade: 4},
                {produto:'xuxu',preco: 9.00, quantidade: 4}
        ]
    },
        {id:'2', nome:'Lista Ferragens', dia:'03/02/2024', tipo:'construção'},
        {id:'3', nome:'Lista escolar', dia:'01/01/2024', tipo:'papelaria'},
        {id:'4', nome:'Lista frutaria', dia:'23/12/2023', tipo:'supermercado'},
        {id:'5', nome:'Lista compras', dia:'23/02/2024', tipo:'supermercado'},
        {id:'6', nome:'Lista atacadão', dia:'23/02/2024', tipo:'supermercado'},
        {id:'7', nome:'Lista atacadão', dia:'23/02/2024', tipo:'supermercado'},
        {id:'8', nome:'Lista atacadão', dia:'23/02/2024', tipo:'supermercado'},
    ]
    const ListaComprasItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ItensLista', {listaItens: item.itens})}>
            <Card containerStyle={styles.estiloCard}>
            <Card.Title style={styles.estiloCardTitulo}>{item.nome}</Card.Title>
            <Card.Divider />
            <Texto style={styles.estiloCardTexto}>Data: {item.dia}</Texto>
            </Card>
        </TouchableOpacity>
      );

    return(
        <View style={styles.conteudoPrincipal}>
            
                <Image source={require('../../../assets/img1.jpg')} style={styles.imagem} />
                <TouchableOpacity style={styles.botaoCriarTarefa}>
                    <Text style={styles.textoBotao}>Criar nova lista</Text>
                </TouchableOpacity>

                <FlatList
                    style={styles.estiloFlatList}
                    data={listasCompras}
                    showsVerticalScrollIndicator={true} keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ListaComprasItem item={item} />}
                    ItemSeparatorComponent={() => <View style={styles.separador} />} // Adicione um separador
                    ListEmptyComponent={<Texto style={styles.listaVazia}>Nenhuma lista encontrada</Texto>} // Mensagem quando a lista estiver vazia
                />
            
        </View>
    )
}