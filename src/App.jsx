// import {useState} from "react";


// // import Siswa from "./Siswa";

// function App(){
//   const [angka, setAngka] = useState(0);
// //   return(
// //     <div className="container">
// //       <Siswa 
// //         nama = "diaz"
// //         kelas = "XI PPLG"
// //         jurusan = "PPLG"
// //       />
// //       <Siswa 
// //         nama = "Muhammad Dafa Ardiansyah"
// //         kelas = "XI MPLB"
// //         jurusan = "MPLB"
// //       />
// //       <Siswa 
// //         nama = "Irlan Ahmnad Faturrohman"
// //         kelas = "XI TJKT"
// //         jurusan = "TJKT"
// //       />
// //       <Siswa 
// //         nama = "Kayla Vani Ajura"
// //         kelas = "XI DKV"
// //         jurusan = "DKV"
// //       />
// //     </div>
// //   );
// // }

// // export default App;


// // import {useState} from "react";
// // function App(){
// //   const[angka, setAngka] = useState(0);
// //   return(
// //     <div>
// //       <h1>Ambaplikasi</h1>
// //       <h2>{angka}</h2>
// //       <button onClick={() => setAngka(angka + 1)}>Tambah</button>
// //       <button onClick={() => setAngka(angka - 1)}>Kurang</button>
// //       <button onClick={() => setAngka(0)}>Reset</button>
// //     </div>
// //   );
// // }

// // export default App;

// //   function tampilPesan(){
// //     alert("selamat belajar react");
// //   }
// //   return(
// //     <div>
// //       <h1>belajar event handling</h1>
// //       <button onClick={tampilPesan}>Click Me!</button>
// //     </div>
// //   );
// // }

// // export default App;
// //   const [nama, setNama] = useState("SISWA");
// //   return(
// //     <div>
// //       <h1>Form nama</h1>
// //       <input type="text" placeholder="masukkan nama" on charge={(e) => setNama(e.target.value)}/>
// //       <h2>hallooo {nama}</h2>
// //     </div>
// //   );
// // }
// // export default App;
// //   const hewan =[
// //     {
// //       nama: "ambacing",
// //       jenis: "kucing penyakitan"
// //     },
// //     {
// //       nama: "ambanyet",
// //       jenis: "monyet penyakitan"
// //     },
// //     {
// //       nama: "ambayam",
// //       jenis: "ayam penyakitan"
// //     },
// //     {
// //       nama: "ambazilla",
// //       jenis: "monster"
// //     }
// //   ];
// //   return(
// //     <div>
// //       <h1>Daftar binatang njirrrrr</h1>
// //       {hewan.map((data, index)=>(
// //         <div key = {index}>
// //           <h1>{data.nama}</h1>
// //           <h3>{data.jenis}</h3>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }
// // export default App;
//   const[nama, setNama] = useState("");
//   const[usia, setUsia] = useState("");
//   const[alamat, setAlamat] = useState("");
//   const[smp, setSmp] = useState("");

//   return(
//     <div>
//       <h1>FORM perdaftaran SMK Prakarya Internasional</h1>
//       <input
//         type = "text"
//         placeholder = "Nama siswa"
//         value = {nama}
//         onChange={(e)=>setNama(e.target.value)}/>
//         <input
//         type = "text"
//         placeholder = "Usia siswa"
//         value = {usia}
//         onChange={(e)=>setUsia(e.target.value)}/>
//         <input
//         type = "text"
//         placeholder = "alamat siswa"
//         value = {alamat}
//         onChange={(e)=>setAlamat(e.target.value)}/>
//         <input
//         type = "text"
//         placeholder = "asal smp siswa"
//         value = {smp}
//         onChange={(e)=>setSmp(e.target.value)}/>
//       <br>
//       </br>
//       <button onClick={() => alert("data berhasil disimpan")}>Simpan</button>
//       <br/>
//       <br/>
//       <h1>Data Calon Siswa</h1>
//       <p>Nama: {nama}</p>
//       <p>Usia: {usia}</p>
//       <p>Alamat: {alamat}</p>
//       <p>Asal sekola: {smp}</p>
//     </div>
//   );
// }

// export default App;



import { useState } from "react";
import "./App.css";

function App() {
  // menyimpan data input
  const [nama, setNama] = useState("");
  const [tugas, setTugas] = useState("");
  const [praktek, setPraktek] = useState("");
  const [ujian, setUjian] = useState("");

  // hasil perhitungan nilai
  const [nilai, setNilai] = useState(null);

  function hitungNilai(e) {
    e.preventDefault();

    // validasi nama
    if (nama.trim() === "") {
      alert("Nama tidak boleh kosong");
      return;
    }

    // konversi tipe data
    const t = Number(tugas);
    const p = Number(praktek);
    const u = Number(ujian);

    // validasi nilai
    if (
      tugas === "" || praktek === "" || ujian === "" ||
      !Number.isFinite(t) ||
      !Number.isFinite(p) ||
      !Number.isFinite(u) ||
      t < 0 || t > 100 ||
      p < 0 || p > 100 ||
      u < 0 || u > 100
    ) {
      alert("Nilai harus diisi dan berada di antara 0-100");
      return;
    }

    // rumus nilai akhir
    const nilaiAkhir = t * 0.3 + p * 0.3 + u * 0.4;

    // menentukan predikat
    let predikat = "";
    if (nilaiAkhir >= 90) {
      predikat = "A (Sangat baik)";
    } else if (nilaiAkhir >= 80) {
      predikat = "B (Baik)";
    } else if (nilaiAkhir >= 70) {
      predikat = "C (Cukup baik)";
    } else if (nilaiAkhir >= 60) {
      predikat = "D (Kurang)";
    } else {
      predikat = "Perlu perbaikan";
    }

    const status = nilaiAkhir >= 75 ? "LULUS" : "BELUM LULUS";

    // simpan hasil ke state supaya tampil
    setNilai({
      nama,
      tugas: t,
      praktek: p,
      ujian: u,
      nilaiAkhir,
      predikat,
      status,
    });
  }

  return (
    <div className="container">
      <h1>Hitung Nilai Siswa</h1>
      <p>Hitung nilai akhir siswa otomatis</p>
      <h3>Masukkan data siswa</h3>

      <form onSubmit={hitungNilai}>
        <input
          type="text"
          placeholder="Nama siswa"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          type="number"
          placeholder="Nilai tugas"
          value={tugas}
          onChange={(e) => setTugas(e.target.value)}
        />
        <input
          type="number"
          placeholder="Nilai praktik"
          value={praktek}
          onChange={(e) => setPraktek(e.target.value)}
        />
        <input
          type="number"
          placeholder="Nilai ujian"
          value={ujian}
          onChange={(e) => setUjian(e.target.value)}
        />
        <button type="submit">Hitung nilai</button>
      </form>

      {nilai !== null && (
        <div className="hasil">
          <h2>Hasil perhitungan nilai siswa</h2>
          <p>Nama : {nilai.nama}</p>
          <p>Nilai Tugas : {nilai.tugas}</p>
          <p>Nilai Praktek : {nilai.praktek}</p>
          <p>Nilai Ujian : {nilai.ujian}</p>

          <h1>Nilai akhir: {nilai.nilaiAkhir.toFixed(2)}</h1>
          <h1>Predikat: {nilai.predikat}</h1>
          <h2>Status: {nilai.status}</h2>
        </div>
      )}
    </div>
  );
}

export default App;