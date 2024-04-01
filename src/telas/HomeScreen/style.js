import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    consteudoPrincipal:{
    backgroundColor: '#C1D9A9',
height:"100%"
    },
    imagem:{
        width:'auto',
        height:250,
    },
    botaoCriarTarefa:{
        backgroundColor: '#30734D',
        flexDirection: 'row',

        alignItems:'center',
        justifyContent:'center',
        margin:15
    },

    textoBotao:{
        textAlign: 'justify',
        color: '#FFF',
        fontSize:18,
        fontWeight: 'bold',
        paddingTop:15,
        paddingBottom: 15,
    },
    estiloLista:{
        padding:15,
    },
    estiloCards:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center', 
        borderRadius:15      
    },
    estiloCardsTitulo:{
        fontSize:20,
        fontWeight:'bold'
    },
    estiloCardsTexto:{
        fontSize:16,
    },

    textoBotaoCriarTarefa:{
        fontFamily:"Poppins_500Medium",
        color:'#FFF',
        fontSize: 18,
        paddingTop: 15,
        paddingBottom: 15,
    },
    estiloFlatList:{
        flex:1,
        paddingBottom: 15,
        
    },
    estiloCard:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom:20
    },
    estiloCardTitulo:{
        fontSize:20,
        fontWeight:'bold'
    },
    estiloCardTexto:{
        fontSize:16
    }
})

export default styles;