function printInfo(names, phone) {
    const namesList = names.split(',');
    const phonesList = phone.split(',');
    for (let i = 0; i < namesList; i++) {
        const name = namesList[i];
        const phone = phonesList[i];
        console.log(`${name} - ${phone}`);
    }
}
printInfo('mazub', 'sdfgsg')
printInfo('fgdgd', 'dfsfgsdg')