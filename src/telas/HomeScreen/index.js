import React from "react";
import {View,  Image, TouchableOpacity, Text, FlatList, ScrollView} from "react-native"
import { Card } from "react-native-elements";
import Texto from '../../componentes/Texto'

import styles from "./style";


export default function HomeScreen({navigation}){

    const ListaComprasItem = ({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('ItensLista', {listaItens: item.itens})}>
            <Card containerStyle={styles.estiloCard}>
            <Card.Title style={styles.estiloCardTitulo}>{item.nome}</Card.Title>
            <Card.Divider />
            <Text style={styles.estiloCardTexto}>Data: {item.dia}</Text>
            </Card>
        </TouchableOpacity>
      );

    const listaCompra = [{id: '1', nome:'Lista atacadao', dia:'23/02/2024', tipo:'supermercado',
    itens:[{produto:'maça', preco: 12.99, quantidade: 5},
            {produto:'leite', preco: 12.99, quantidade: 5},
            {produto:'bolacha', preco: 12.99, quantidade: 5},
            {produto:'pinga', preco: 12.99, quantidade: 5},
            {produto:'bucha', preco: 12.99, quantidade: 5},
            {produto:'refrigerante', preco: 12.99, quantidade: 5},
            {produto:'shampoo', preco: 12.99, quantidade: 5},
            {produto:'sabonete', preco: 1.99, quantidade: 3},
            {produto:'pasta de dente', preco: 6.89, quantidade: 2},
            {produto:'refrigerante zero', preco: 5.00, quantidade: 4},
            {produto:'xuxu', preco: 9.00, quantidade: 4}
            ]
},
    {id: '2', nome:'Lista frutaria', dia:'08/01/2024', tipo:'supermercado'},
    {id: '3', nome:'Lista ferragens', dia:'03/03/2024', tipo:'construção'},
    {id: '4', nome:'Lista escolar', dia:'01/02/2024', tipo:'papelaria'},
    {id: '5', nome:'Lista escolar', dia:'01/02/2024', tipo:'papelaria'}]

    return(
        <View style={styles.consteudoPrincipal}>
            
            <Image source={require('../../../assets/img2.jpg')} style={styles.imagem} />
            <TouchableOpacity style={styles.botaoCriartarefa}>
                    <Texto style={styles.textoBotaoCriarTarefa}>Criar nova lista</Texto>
                </TouchableOpacity>

                <FlatList
                    style={styles.estiloFlatList}
                    showsVerticalScrollIndicator={true}
                    data={listaCompra}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ListaComprasItem item={item} />}
                    ItemSeparatorComponent={() => <View style={styles.separador} />} // Adicione um separador
                    ListEmptyComponent={<Text style={styles.listaVazia}>Nenhuma lista encontrada</Text>} // Mensagem quando a lista estiver vazia
                />
            
        </View>
    )
}