import React, { useCallback, useState } from "react";
import { View, Image, TouchableOpacity, Text, FlatList, ActivityIndicator} from "react-native";
import { useFocusEffect } from '@react-navigation/native'
import Texto from '../../componentes/Texto'
import styles from "./style";
import { Card } from "react-native-elements";
import { getItem, getLista } from "../../dataBase/SQLiteManager";
import CriarLista from "../CriarLista";

export default function HomeScreen({navigation}){
    const [listasCompras, setListasCompras] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [itensCarregados, setItensCasrregados] = useState(false)

    const carregarListasCompras = async () =>{
        try{
            setCarregando(true)
            let listas = await getLista();
            if(!Array.isArray(listas)){
                listas = [];
            }
            for(let lista of listas){
                let itens = await getItem();
                if(!Array.isArray(itens)){
                    itens = [];
                }
                lista.itens = itens;
            }
            setListasCompras(listas);
            setItensCasrregados(true);

        }catch(error){
            console.log('Erro ao carregar listas: ', error)
        }finally{
            setCarregando(false);
        }
    }

    useFocusEffect(
        useCallback( () =>{
            setTimeout(() => {
                carregarListasCompras();
            }, 2000);
        }, [])
    );
    
    const ListaComprasItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ItensLista', {listaId: item.id})}>
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
                <TouchableOpacity style={styles.botaoCriarTarefa} onPress={() => navigation.navigate('CriarLista')}>
                    <Text style={styles.textoBotao}>Criar nova lista</Text>
                </TouchableOpacity>
                {carregando ? (
                    <ActivityIndicator size="large" color="0000FF" />
                ) : (
                    <FlatList
                        style={styles.estiloFlatList}
                        data={listasCompras}
                        showsVerticalScrollIndicator={true} keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ListaComprasItem item={item} />}
                        ItemSeparatorComponent={() => <View style={styles.separador} />} // Adicione um separador
                        ListEmptyComponent={<Texto style={styles.listaVazia}>Nenhuma lista encontrada</Texto>} // Mensagem quando a lista estiver vazia
                    />
                )}
            
        </View>
    )
}