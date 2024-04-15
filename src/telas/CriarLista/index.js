import React, {useState} from 'react'
import { Alert, TextInput, Button, FlatList,
     Text, StyleSheet, TouchableOpacity, View  } from 'react-native';

     import { initDB, createLista, createItem
, obterUltimoId } from '../../dataBase/SQLiteManager';

const formatarDataBrasil = () => {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    return `${dia}/${mes}/${ano}`
}

// Função para mostrar um alerta 
const mostrarAlertaTemporario = (mensagem) => {
    Alert.alert(mensagem);
};

export default function CriarLista({navigation}){
    const [nomeLista, setNomeLista] = useState('')
    const [dataLista, setDataLista] = useState(formatarDataBrasil())
    const [tipoLista, setTipoLista] = useState('')
    const [itens, setItens] = useState('')
    const [nomeItem, setNomeItem] = useState('')
    const [precoItem, setPrecoItem] = useState('')
    const [quantidadeItem, setQuantidadeItem] = useState('')
    const [itemEditavel, setItemEditavel] = useState(null)

    const adicionarOuAtualizarItem = () => {
        if (!nomeItem || !precoItem || !quantidadeItem) {
            mostrarAlertaTemporario('Por favor, preencha todos os campos do item.');
            return;
        }
        const itemAtualizado = {
            nome: nomeItem,
            preco: parseFloat(precoItem),
            quantidade: parseInt(quantidadeItem, 10)
        };

        if (itemEditavel !== null) {
            const itensAtualizados = [...itens];
            itensAtualizados[itemEditavel] = itemAtualizado;
            setItens(itensAtualizados);
            setItemEditavel(null);
        } else {
            setItens([...itens, itemAtualizado]);
        }

        setNomeItem('');
        setPrecoItem('');
        setQuantidadeItem('');
    };

    const salvarLista = async () => {
        if(!initDB){
            console.log('banco de dados não inicializado!')
        }else{
            try {
                await createLista(nomeLista, dataLista, tipoLista);
                const lista_id = await obterUltimoId(); // Supondo que obterUltimoId retorna o ID da última lista inserida
                for (let item of itens) {
                    await createItem(lista_id, item.nome, item.preco, item.quantidade);
                }
                navigation.goBack();
            } catch (error) {
                console.error('Erro ao salvar lista:', error);
            }
        }
    };

    return(
        <View style={styles.container}>
            <TextInput
                placeholder="Nome da Lista"
                onChangeText={setNomeLista}
                value={nomeLista}
                style={styles.input}
            />
            <TextInput
                placeholder="Data (DD/MM/YYYY)"
                onChangeText={setDataLista}
                value={dataLista}
                style={styles.input}
            />
            <TextInput
                placeholder="Tipo"
                onChangeText={setTipoLista}
                value={tipoLista}
                style={styles.input}
            />
            <TextInput
                placeholder="Nome do Item"
                onChangeText={setNomeItem}
                value={nomeItem}
                style={styles.input}
            />
            <TextInput
                placeholder="Preço do Item"
                onChangeText={setPrecoItem}
                value={precoItem}
                keyboardType="numeric"
                style={styles.input}
            />
            <TextInput
                placeholder="Quantidade"
                onChangeText={setQuantidadeItem}
                value={quantidadeItem}
                keyboardType="numeric"
                style={styles.input}
            />
            <Button title="Adicionar/Atualizar Item" onPress={adicionarOuAtualizarItem} />
            <FlatList
                data={itens}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => editarItem(index)} style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.nome}</Text>
                        <Text style={styles.itemText}>{item.preco}</Text>
                        <Text style={styles.itemText}>{item.quantidade}</Text>
                    </TouchableOpacity>
                )}
            />
            <Button title="Salvar Lista" onPress={salvarLista} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // Adicione mais estilos conforme necessário
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginVertical: 5,
        // Adicione mais estilos conforme necessário
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        // Adicione mais estilos conforme necessário
    },
    itemText: {
      fontWeight: 'bold'
    },
    // Adicione mais estilos conforme necessário
});