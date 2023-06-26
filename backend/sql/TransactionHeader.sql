CREATE TABLE TransactionHeader (
    transaction_id INTEGER AUTO_INCREMENT,
    customer_id INTEGER,
    seller_id INTEGER,
    transaction_date DATE NOT NULL,
    transaction_time TIME NOT NULL,
    status_pemesanan ENUM('Sedang Diproses', 'Sedang Dikirim', 'Terkirim', 'Selesai'),
    PRIMARY KEY (transaction_id),
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id) ON DELETE CASCADE,
    FOREIGN KEY (seller_id) REFERENCES seller(seller_id) ON DELETE CASCADE
);