// Question #15
let guest_list: string[] = [ 'Sibtain', 'Tayyab', 'Javed' ];
for(let i=0; i<guest_list.length;i++){
    console.log('Respect Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n');
}
let not_person: string = 'Javed';
let new_guest: string = 'Sami';
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length;i++){
    console.log('Respect Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n');
}
console.log(`The person who is not a guest, ${not_person}, is not in the list.`);