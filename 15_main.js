// Question #15
var guest_list = ['Sibtain', 'Tayyab', 'Javed'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respect Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n');
}
var not_person = 'Javed';
var new_guest = 'Sami';
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respect Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n');
}
console.log("The person who is not a guest, ".concat(not_person, ", is not in the list."));
