
function layDanhSachBaiHat() {
  const ds = JSON.parse(localStorage.getItem("dsBaiHat"));
  if (ds && Array.isArray(ds)) return ds;
  
  const macDinh = [
    { id: 1, tieuDe: "Tinh Dau Qua Chen", ngheSi: "Quang Hung MasterD", cover: "images/cover1.jpg", file: "audio/song1.mp3" },
    { id: 2, tieuDe: "Kim Phut, Kim Gio", ngheSi: "HIEUTHUHAI", cover: "images/cover2.jpg", file: "audio/song2.mp3" },
    { id: 3, tieuDe: "Catch Me If You Can", ngheSi: "Negav", cover: "images/cover3.jpg", file: "audio/song3.mp3" },
    { id: 4, tieuDe: "Ngao Ngo", ngheSi: "ERIK", cover: "images/cover4.jpg", file: "audio/song4.mp3" },
    { id: 5, tieuDe: "Doa Phu Dung Cuoi Cung", ngheSi: "Duc Phuc", cover: "images/cover5.jpg", file: "audio/song5.mp3" }
  ];
  
  localStorage.setItem("dsBaiHat", JSON.stringify(macDinh));
  return macDinh;
}

function luuDanhSachBaiHat(moi) {
  localStorage.setItem("dsBaiHat", JSON.stringify(moi));
}
