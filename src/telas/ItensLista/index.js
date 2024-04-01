import React from "react"
import { View, Text, FlatList } from "react-native"
import { Card } from "react-native-elements";

import styles from "./style";

export default function ItensLista({navigation, route}){

    const itensDaLista = route.params.listaItens;

    function valorTotal(){
        let total = 0;
        for(let i=0; i < itensDaLista?.length; i++){
            total += (itensDaLista[i].preco.toFixed(2)*itensDaLista[i].quantidade)
        }
        return total.toFixed(2);
    }
            
    const ItensL =({item}) =>(
        <Card>
            <Card.Title>Produto: 
                <Text>{item.produto}</Text>
            </Card.Title>
            <Text>{item.preco}</Text>
            <Text>{item.quantidade}</Text>
            <Text>{(item.preco * item.quantidade).toFixed(2)}</Text>
        </Card>
    )  
    return(
        <View style={styles.viewPrincipal}>
        <FlatList
            data={itensDaLista}
            keyExtractor={(item) => item.produto}
            renderItem={({item})=> <ItensL item={item} />} 
            ListEmptyComponent={<Text>Nenhum item na lista</Text>}
        />
        <Text style={styles.valorTotalView}>Total da compra: {valorTotal()}</Text>
        </View>
    )
}