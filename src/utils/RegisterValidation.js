export const RegisterValidation = {
  nomorTeleponIsValid: (nomorTelepon) => {
    const regex = new RegExp(/^(\+62|62|0)[2-9]{1}[0-9]{7,11}$/);

    // TODO: Check if phone number exists in database

    if (nomorTelepon.test(regex) && nomorTelepon.length <= 12) {
      return "Nomor telepon tidak sesuai";
    }

    return null;
  },

  nameIsValid: (namaLengkap) => {
    const regex = new RegExp(/^([A-Z][a-z]*\s)+[A-Z][a-z]*$/);

    if (namaLengkap.test(regex) == false) {
      return "Nama harus mulai dengan huruf besar dan lengkap";
    }

    return null;
  },

  passwordIsValid: (password) => {
    const regex = new RegExp(/^(?=.*[0-9a-zA-Z])(?=.*[!@#$%^&*])(?=.{8,})/);

    if (password.test(regex) == false) {
      return "Kata sandi harus menggunakan setidaknya satu huruf besar dan satu huruf kecil, satu karakter spesial dan 8 karakter atau lebih";
    }

    return null;
  },

  passwordMatches: (password, passwordConfirmation) => {
    if (password.localeCompare(passwordConfirmation) === 0) {
      return "Kata sandi tidak sama";
    }

    return null;
  },
};
