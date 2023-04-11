const express= require('express');
//objeto que representa la aplicacion

const app = express();
app.use(express.json());

app.use(function(req,res,next){
    res.header("Access-control-Allow-Origin","*"); //permito solo el acceso  a ciertas ip
    res.header("Access-control-Allow-Methods","POST");
    res.header("Access-control-Allow-Headers","Content-type")
    next();//despues de procesar esto siga 
})
app.get(
    '/api/sumar',(req,res)=>{
        res.json("hola")
    }

)

//definir una ruta desde una api 
app.post(
    '/api/sumar'
    //se requieren 2 objetos
    ,(req,res)=>{
        //TO DO procedimiento de la peticion
        console.log('Peticion post desde esta ruta ')
        const {numero_1,numero_2}=req.body;
        const sumar = parseFloat(numero_1) +parseFloat (numero_2);
        res.json(sumar);
    }
);

app.post("/api/restar",(req,res)=>{
    const {numero_1,numero_2}=req.body; // deconstruccion de un objeto Json
    const restar = numero_1-numero_2
    res.json(restar)
});

app.post("/api/multiplicar",(req,res)=>{
    const {numero_1,numero_2}=req.body; 
    const restar = numero_1*numero_2
    res.json(restar)
});

app.post("/api/dividir",(req,res)=>{ 
try{
    const {numero_1,numero_2}=req.body; 
    const resultado=numero_1/numero_2; 

    res.json(resultado)

}catch(error){
    var resultado = error;
}
    res.json(resultado)
});

//taller como crear una ruta a la cual se le pueda pasar un numero indeterminado de datos
app.listen(3001,()=>{`Servidor ejecutandose en el puerto 3000`});