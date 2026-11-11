function Siswa(props) {
    return(
        <div>
            <h2>{props.nama}</h2>
            <p>Kelas: {props.kelas}</p>
            <p>Jurusan: {props.jurusan}</p>
        </div>
    );
}
export default Siswa;
