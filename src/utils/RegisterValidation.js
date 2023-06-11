export const RegisterValidation = {
  nomorTeleponIsValid: (nomorTelepon) => {
    if (nomorTelepon.trim() === "") {
      return "Nomor telepon tidak boleh kosong";
    }

    // Check if the number starts with '08'
    if (!nomorTelepon.startsWith("08")) {
      return "Nomor telepon harus diawali dengan '08'";
    }

    // Check if the number has a length between 12 and 22 characters
    if (nomorTelepon.length < 10 || nomorTelepon.length > 22) {
      return "Nomor telepon tidak sesuai";
    }

    return null;
  },

  nameIsValid: (namaLengkap) => {
    if (namaLengkap.trim() === "") {
      return "Nama tidak boleh kosong";
    }

    const names = namaLengkap.split(" ");
    const regex = new RegExp(/^[A-Z][A-Za-z0-9]+$/);

    for (let i = 0; i < names.length; i++) {
      if (names[i].length === 1) {
        return "Nama harus lengkap";
      }

      if (!regex.test(names[i])) {
        return "Setiap nama harus dimulai dengan huruf besar";
      }
    }

    return null;
  },

  passwordIsValid: (password) => {
    if (password.trim() === "") {
      return "Kata sandi tidak boleh kosong";
    }

    if (password.length < 8) {
      return "Kata sandi harus minimal 8 karakter";
    }

    if (password.length > 20) {
      return "Kata sandi harus maksimal 20 karakter";
    }

    if (!/[a-z]/.test(password)) {
      return "Kata sandi harus memiliki setidaknya 1 huruf kecil";
    }

    if (!/[A-Z]/.test(password)) {
      return "Kata sandi harus memiliki setidaknya 1 huruf besar";
    }

    if (!/\d/.test(password)) {
      return "Kata sandi harus memiliki setidaknya 1 angka";
    }

    if (!/[!@#$%^&*]/.test(password)) {
      return "Kata sandi harus memiliki setidaknya 1 karakter khusus";
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
