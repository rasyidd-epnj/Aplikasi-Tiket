alert(`Selamat Datang di Aplikasi Tiket, Mulailah`)

let nama = prompt(`Masukkan Nama Anda`)
let umur = parseInt(prompt(`Masukkan Umur Anda`))

if (umur >= 13) {
    alert(`Anda Boleh Masuk Studio!`)
  let studio = prompt(`Silahkan Pilih Studio \nA \nB \nC`).toUpperCase()

  if (studio == `A`) {
    alert(`Tiket untuk ${nama} , Studio A, Umur ${umur} , Silahkan Masuk`)
  } else if (studio == `B`) {
    alert(`Tiket untuk ${nama} , Studio B, Umur ${umur} , Silahkan Masuk`)
  } else if (studio == `C`) {
    alert(`Tiket untuk ${nama} , Studio C, Umur ${umur} , Silahkan Masuk`)
  } else {
    alert(`Studio tidak valid`)
  }
} else {
    alert(`Maaf, anda belum cukup umur untuk masuk studio!`)
}  


