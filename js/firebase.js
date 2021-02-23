// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCWmAwugUJEWDtVvqa8B8fLMhFVbLef87w",
    authDomain: "arca-43bec.firebaseapp.com",
    projectId: "arca-43bec",
    storageBucket: "arca-43bec.appspot.com",
    messagingSenderId: "218232599371",
    appId: "1:218232599371:web:05fd60e4037a31b3d1aece"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db =  firebase.firestore();



var f = new Date();
var fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
var hora = f.getHours() + ':' +f.getMinutes();
const navegador = navigator.userAgent;
const pagina = filename();

function filename(){
    var rutaAbsoluta = self.location.href;   
    var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
    var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
    return rutaRelativa;  
}
function getIP(json) {
    if(json.ip != '201.145.126.4'){
        db.collection('vistas').doc().set({
            fecha,
            hora,
            navegador,
            pagina
        });
    }
}

