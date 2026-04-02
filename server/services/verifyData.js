export function isPhoneValid(phoneNumber) {
    let isValid = false;

    const phoneRegex = /^3\d{9}$/;

    if (phoneRegex.test(phoneNumber)) {
        isValid = true;
    }

    return isValid;
}

export function isNameValid(name) {
    let isValid = false;
    
    if (!(name.length < 3 || name.includes(" "))) {
        isValid = true;
    }

    return isValid;
}