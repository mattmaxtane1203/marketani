CREATE TABLE product (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    nama_produk VARCHAR(50) NOT NULL,
    deskripsi TEXT NOT NULL,
    berat_per_pesanan INTEGER NOT NULL,
    harga_per_pesanan INTEGER NOT NULL,
    stok INTEGER NOT NULL,
    amount_sold INTEGER NULL,
    asal_produk ENUM('lokal', 'impor') NOT NULL,
    metode_pengembangan ENUM('konvensional', 'organik', 'hidroponik') NOT NULL,
    seller_id INTEGER REFERENCES seller(seller_id) ON DELETE CASCADE
);
