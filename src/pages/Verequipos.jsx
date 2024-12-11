import { useEffect, useState } from "react";
import { Equipo } from "../components/Equipo";

function Verequipos() {

    const [equipos, setEquipo] = useState([]);
    useEffect(() => {
        async function obtenerDatos() {
            const response = await fetch(
                "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Uruguayan%20Primera%20Division"
            );
            const data = await response.json();
            console.log(data);
            setEquipo(data.teams);
        }
        obtenerDatos();
    }, [])
    return equipos.map((equipo) => (
        <Equipo
            nombreEquipo={equipo.strTeam}
            years={equipo.intFormedYear}
            nombreEstadio={equipo.strStadium}
            urlEquipo={equipo.strBadge} 
            instagram={equipo.strInstagram}
            key={equipo.idTeam}
           />
        ))
}

export { Verequipos };