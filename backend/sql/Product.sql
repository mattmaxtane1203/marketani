CREATE TABLE product (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    nama_produk VARCHAR(50),
    deskripsi TEXT,
    berat_per_pesanan INTEGER,
    harga_per_pesanan INTEGER,
    stok INTEGER,
    asal_produk ENUM('lokal', 'impor'),
    metode_pengembangan ENUM('konvensional', 'organik', 'hidroponik'),
    foto_produk VARCHAR(255),
    seller_id INTEGER REFERENCES seller(seller_id) ON DELETE CASCADE
);
