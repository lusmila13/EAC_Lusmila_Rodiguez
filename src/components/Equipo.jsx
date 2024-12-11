function Equipo({ nombreEquipo, years, nombreEstadio, instagram, urlEquipo }) {
    return (
        <div style={{ border: '1px solid black', padding: '10px', maxWidth: '300px' }}>
        <p style={{ fontWeight: 'bold', color: 'blue' }}>Nombre: {nombreEquipo}</p>
        <p>Año de fundación: {years}</p>
        <p>Estadio: {nombreEstadio}</p>
        <a href={instagram} style={{ textDecoration: 'none', color: 'red' }}>Instagram</a>
        <img src={urlEquipo} alt="Equipo" style={{ width: '100%', borderRadius: '5px' }} />
    </div>
);
}

export { Equipo }; 