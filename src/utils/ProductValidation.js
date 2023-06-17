class ProductValidation {
  static validNameLength(productName) {
    if (productName === null || productName === "") {
      return "Nama produk harus diisi";
    }
    if (productName.length > 50 || productName.length === 0) {
      return "Nama produk harus <= 50 karakter";
    }

    return null;
  }

  static validDescriptionLength(productDescription) {
    if (productDescription === null || productDescription === "") {
      return "Deskripsi produk harus diisi";
    }
    if (productDescription.length > 65535 || productDescription.length === 0) {
      return "Deskripsi produk harus <= 65535 karakter";
    }

    return null;
  }

  static validBeratPerPesanan(beratPerPesanan) {
    if (beratPerPesanan === null || beratPerPesanan === 0) {
      return "Berat per Pesanan harus diisi";
    }

    return null;
  }

  static validHargaPerPesanan(hargaPerPesanan) {
    if (hargaPerPesanan === null || hargaPerPesanan === 0) {
      return "Harga per pesanan harus diisi";
    }

    return null;
  }

  static validStok(stok) {
    if (stok === null || stok === 0) {
      return "Stok harus diisi";
    }

    return null;
  }
}

export default ProductValidation;
