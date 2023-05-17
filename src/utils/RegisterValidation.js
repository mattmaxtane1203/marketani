export const RegisterValidation = {
    nomorTeleponIsValid: (nomorTelepon) => {
        const regex = new RegExp(/^(\+62|62|0)[2-9]{1}[0-9]{7,11}$/)
    
        // TODO: Check if phone number exists in database
    
        if(nomorTelepon.test(regex) && nomorTelepon.length <= 12){
            return "Nomor telepon tidak sesuai";
        }

        return null;
    },
    
    nameIsValid: (namaLengkap) => {
    
        const regex = new RegExp(/^([A-Z][a-z]*\s)+[A-Z][a-z]*$/)
    
        return namaLengkap.test(regex)
    },

    passwordIsValid: (password) => {

        const regex = new RegExp(/^(?=.*[0-9a-zA-Z])(?=.*[!@#$%^&*])(?=.{8,})/)

        return password.test(regex)
    },
    
    passwordMatches: (password, passwordConfirmation) => {
        
        return password.localeCompare(passwordConfirmation) === 0;
    }
}