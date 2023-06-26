CREATE TABLE TransactionDetail (
    transaction_id INTEGER,
    product_id INTEGER REFERENCES product(product_id),
    quantity INTEGER NOT NULL,
    PRIMARY KEY (transaction_id, product_id),
    FOREIGN KEY (transaction_id) REFERENCES TransactionHeader(transaction_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);