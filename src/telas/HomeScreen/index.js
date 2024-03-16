import React from "react";
import {View,  Image, TouchableOpacity, Text, FlatList, ScrollView} from "react-native"
import { Card } from "react-native-elements";

import styles from "./style";


export default function HomeScreen(){

    const listaCompra = [{id: '1', nome:'Lista atacadao', dia:'23/02/2024', tipo:'supermercado'},
    {id: '2', nome:'Lista frutaria', dia:'08/01/2024', tipo:'supermercado'},
    {id: '3', nome:'Lista ferragens', dia:'03/03/2024', tipo:'construção'},
    {id: '4', nome:'Lista escolar', dia:'01/02/2024', tipo:'papelaria'},
    {id: '5', nome:'Lista escolar', dia:'01/02/2024', tipo:'papelaria'}]

    return(
        <View style={styles.consteudoPrincipal}>
            <ScrollView>
            <Image source={require('../../../assets/img2.jpg')} style={styles.imagem} />
            <TouchableOpacity style={styles.botaoCriarTarefa}>
                <Text style={styles.textoBotao}>Criar Lista</Text>
            </TouchableOpacity>
            
            <FlatList style={styles.estiloLista}
            showsVerticalScrollIndicator={true}
            data={listaCompra}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>{
                return(
                <Card containerStyle={styles.estiloCards}>
                    <Card.Title style={styles.estiloCardsTitulo}>
                        {item.nome}
                    </Card.Title>
                    <Card.Divider/>
                    <Text style={styles.estiloCardsTexto}>Data: {item.dia}</Text>
                    <Text style={styles.estiloCardsTexto}>Tipo: {item.tipo}</Text>
                </Card>
            )}}
        >   
            </FlatList>
            </ScrollView>
        </View>
    )
}