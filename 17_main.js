// Question #17
var guest_list = ['Sibtain', 'Tayyab', 'Javed', 'Hanzala'];
var not_person = 'Javed';
var new_guest = 'Sami';
guest_list[2] = new_guest;
guest_list.unshift('Rashid', 'Rizwan', 'Usman');
console.log("\nUnfortunately we can not arrange big table, Only two people allow.");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam.".concat(remove_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respect Sir/Madam' + guest_list[i] + ',\nYes you are still invited on tomorrow dinner.\nThank you\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
