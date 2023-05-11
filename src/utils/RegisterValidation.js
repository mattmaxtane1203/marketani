export const RegisterValidation = {
    nomorTeleponIsValid: (nomorTelepon) => {
        const regex = new RegExp(/^(\+62|62|0)[2-9]{1}[0-9]{7,11}$/)
    
        // TODO: Check if phone number exists in database
    
        return nomorTelepon.test(regex) && nomorTelepon.length <= 12
    },
    
    nameIsValid: (namaLengkap) => {
    
        const regex = new RegExp(/^([A-Z][a-z]*\s)+[A-Z][a-z]*$/)
    
        return namaLengkap.test(regex)
    },
    
    passwordMatches: (password, passwordConfirmation) => {
        
        return password.localeCompare(passwordConfirmation) === 0;
    }
}