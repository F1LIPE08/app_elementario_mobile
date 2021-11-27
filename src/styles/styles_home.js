import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    //textos e títulos

    textTitle:{
        fontWeight:'bold',
        textAlign:'center',
        paddingTop: 12,
        color: '#fff',
    },

    textDesc:{
        textAlign: 'justify',
        width: '60%',
        marginLeft: 73,
        paddingTop: 12,
        color:'#fff',
    },

    textSecDesc:{
        textAlign: 'justify',
        width: '60%',
        marginLeft: 73,
        paddingTop: 15
    },

    textBtn:{
        textAlign:'center',
        color: '#fff',
        fontWeight: 'bold',
    },

    textAutors:{
        fontWeight:'bold',
        textAlign:'center',
        paddingTop: 20,
    },

    textTitleSec:{
        fontWeight: 'bold',
        textAlign:'center',
        paddingTop: 30,
    },

    descTonin:{
        marginLeft: 42,
        fontSize: 15,
    },

    descDanilo:{
        marginLeft: 233,
        fontSize: 15,
    },

    descLuis:{
        marginLeft: 15,
        fontSize: 15,
    },

    descMatheus:{
        marginLeft: 233,
        paddingBottom: 50,
        fontSize: 15,
    },

    descDudu:{
        marginLeft: 135,
        paddingBottom: 50,
        fontSize: 15,
    },


    //views

    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#f4f4f4',
        alignItems: 'center'
    },

    viewFirst:{
        width:'100%',
        height: 300,
        backgroundColor: '#0ff'
    },

    viewSec:{
        width:'100%',
        height: 300,
        backgroundColor: '#fff'
    },

    divAutors:{
        paddingBottom: 100
    },
    divisorLine:{
        width: '55%',
        height: 2,
        backgroundColor: 'black',
        left: 82,
      },

    
    //imagens

    imgBg:{
        width: '100%',
        height: 350
    },

    atomLogo:{
        height: 80,
        width:80,
        padding:0,
        marginLeft: 145,
        marginTop:15
    },
    
    imgTonin:{
        height: 90,
        width: 90,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 40,
        marginTop: 30
    },

    imgDanilo:{
        height: 90,
        width: 90,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 240,
        marginTop: -110
    },

    imgLuis:{
        height: 90,
        width: 90,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 40,
        marginTop: 50
    },

    imgMatheus:{
        height: 90,
        width: 90,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 240,
        marginTop: -110
    },

    imgDudu:{
        height: 90,
        width: 90,
        borderRadius: 100,
        marginLeft: 150,

    },


    //botões

    btnConsult:{
        padding: 15,
        backgroundColor: '#ff69b4',
        width: 150,
        marginLeft: 110,
        marginTop: 20   
    },
});
  
export default styles;  