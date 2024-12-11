import { useEffect, useState } from "react";
import { Equipo } from "../components/Equipo";


function EquipoFavorito() {
    const [equipo, setEquipo] = useState([]);
    useEffect(() => {
        async function obtenerDatos() {
            const response = await fetch(
                "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Uruguayan%20Primera%20Division"
            );
            const data = await response.json()
            const EquipoFavorito = data.teams.find(
                (equipo) => equipo.strTeam === "Nacional Montevideo"
            );
            console.log(data);
            console.log("EquipoFavorito", EquipoFavorito);
            setEquipo(EquipoFavorito);
        }
        obtenerDatos();
    }, [])
    return (
        <Equipo
            nombreEquipo={equipo.strTeamAlternate}
            years={equipo.intFormedYears}
            nombreEstadio={equipo.strStadium}
            instagram={equipo.strInstagram}
            urlEquipo={equipo.strBadge} />
    );
}

export { EquipoFavorito };
