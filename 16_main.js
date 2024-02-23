// Question #16
var guest_list = ['Sibtain', 'Tayyab', 'Javed', 'Hanzala'];
var not_person = 'Javed';
var new_guest = 'Sami';
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respect Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n');
}
guest_list.unshift('Rashid', 'Rizwan', 'Usman');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respect Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow. we found big table so we decide to invite three more guest\nThank you\n');
}
