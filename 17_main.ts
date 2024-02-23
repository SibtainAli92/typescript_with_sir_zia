// Question #17
let guest_list: string[] = [ 'Sibtain', 'Tayyab', 'Javed', 'Hanzala' ];
let not_person: string = 'Javed';
let new_guest: string = 'Sami';
guest_list[2] = new_guest;
guest_list.unshift('Rashid', 'Rizwan', 'Usman')
console.log(`\nUnfortunately we can not arrange big table, Only two people allow.`);
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam.${remove_guest} you are not invited for dinner.`)
}
for(let i=0; i<guest_list.length;i++){
   console.log('Respect Sir/Madam' + guest_list[i] + ',\nYes you are still invited on tomorrow dinner.\nThank you\n');
}
guest_list.splice(0,2)
console.log(guest_list)