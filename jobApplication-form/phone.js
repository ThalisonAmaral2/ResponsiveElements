const phone = document.getElementById('phone');

phone.addEventListener('input', () => {
    //(89) 9 0000-0000
    const formatedPhoneNumber = formatPhoneNumber(phone.value);
    phone.value = formatedPhoneNumber
})

const formatPhoneNumber = (phoneNumberInput) => {
    let phoneNumber = phoneNumberInput.replace(/[^0-9]/g, "");
    if(phoneNumber.trim() != ''){
        
        let formatedPhoneNumber = ''
        for (let i = 0; i < phoneNumber.length; i++) {

            let digit = (i>10) ? '' : phoneNumber[i]


            formatedPhoneNumber += (i === 0) ? '(' : '';
            formatedPhoneNumber += (i === 2) ? ') ' : '';
            formatedPhoneNumber += (i === 3) ? ' ' : '';
            formatedPhoneNumber += (i === 7) ? '-' : '';
            formatedPhoneNumber += digit

        }
        return formatedPhoneNumber

    }else{
        return ''
    }
}