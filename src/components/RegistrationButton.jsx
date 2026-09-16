//boton de registro
function RegistrationButton({ activity, onRegister,isRegistered}){
    const handleRegister = () =>{
        onRegister(activity);
    };

    return (
        <button onClick={handleRegister} disabled={isRegistered}>
            {isRegistered? "Inscrito" : "Inscribirme"} 
        </button>
    );
}
export default RegistrationButton;
//el componente recibe tres Props activity, onRegister,isRegistered
//isRegister permite saber si el usuario ya esta incrito
//disabled en isRegistered desactiva el boton despues de incribirse
 //{isRegistered? "Inscrito" : "Inscribirme"} esto cambia el texto del boton segun el caso