// Ambil elemen input
const kegiatan = document.getElementById('kegiatan');
const tanggal = document.getElementById('tanggal');
const mulai = document.getElementById('mulai');
const selesai = document.getElementById('selesai');
const catatan = document.getElementById('catatan');

// Ambil elemen preview
const previewKegiatan = document.getElementById('preview-kegiatan');
const previewTanggal = document.getElementById('preview-tanggal');
const previewMulai = document.getElementById('preview-mulai');
const previewSelesai = document.getElementById('preview-selesai');
const previewCatatan = document.getElementById('preview-catatan');

// Fungsi update preview
function updatePreview() {
  previewKegiatan.textContent = kegiatan.value || '-';
  previewTanggal.textContent = tanggal.value || '-';
  previewMulai.textContent = mulai.value || '-';
  previewSelesai.textContent = selesai.value || '-';
  previewCatatan.textContent = catatan.value || '-';
}

// Event listener untuk live preview
kegiatan.addEventListener('input', updatePreview);
tanggal.addEventListener('input', updatePreview);
mulai.addEventListener('input', updatePreview);
selesai.addEventListener('input', updatePreview);
catatan.addEventListener('input', updatePreview);