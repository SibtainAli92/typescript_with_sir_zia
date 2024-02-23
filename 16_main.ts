// Question #16
let guest_list: string[] = [ 'Sibtain', 'Tayyab', 'Javed', 'Hanzala' ];
let not_person: string = 'Javed';
let new_guest: string = 'Sami';
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length;i++){
    console.log('Respect Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n');
}
guest_list.unshift('Rashid', 'Rizwan', 'Usman')
for(let i=0; i<guest_list.length;i++){
    console.log('Respect Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow. we found big table so we decide to invite three more guest\nThank you\n');
}