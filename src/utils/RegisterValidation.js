export const RegisterValidation = {
  nomorTeleponIsValid: (nomorTelepon) => {
    if (nomorTelepon.trim() === "") {
      return "Nomor telepon tidak boleh kosong";
    }

    const regex = new RegExp(/^(\+62|62|0)[2-9]{1}[0-9]{7,11}$/);

    // TODO: Check if phone number exists in database

    if (!regex.test(nomorTelepon) || nomorTelepon.length > 12) {
      return "Nomor telepon tidak sesuai";
    }

    return null;
  },

  nameIsValid: (namaLengkap) => {
    if (namaLengkap.trim() === "") {
      return "Nama tidak boleh kosong";
    }

    const regex = new RegExp(/^([A-Z][a-z]*\s)+[A-Z][a-z]*$/);

    if (!regex.test(namaLengkap)) {
      return "Nama harus mulai dengan huruf besar dan lengkap";
    }

    return null;
  },

  passwordIsValid: (password) => {
    if (password.trim() === "") {
      return "Kata sandi tidak boleh kosong";
    }

    const regex = new RegExp(/^(?=.*[0-9a-zA-Z])(?=.*[!@#$%^&*])(?=.{8,})/);

    if (!regex.test(password)) {
      return "Menggunakan setidaknya satu huruf besar dan kecil,karakter spesial dan 8 karakter atau lebih";
    }

    return null;
  },

  passwordMatches: (password, passwordConfirmation) => {
    if (password.trim() === "") {
      return "Kata sandi tidak boleh kosong";
    }

    if (password !== passwordConfirmation) {
      return "Kata sandi tidak sama";
    }

    return null;
  },
};
