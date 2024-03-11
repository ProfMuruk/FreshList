import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteudoPrincipal:{
        backgroundColor:'#c1d9a9',
        height:"100%"
    },
    imagem:{
        width:'auto',
        height:250,
        resizeMode:'cover'
    },
    botaoCriartarefa:{
        backgroundColor:'#30734d',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        margin:15
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