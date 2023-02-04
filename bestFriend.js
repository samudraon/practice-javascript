function bestFriend(names) {
    let friendName = names[0];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (name.length > friendName.length) {
            friendName = name;
        }
    }
    return friendName;
}

const friendNames = ['Salman', 'Farhan Ferdous','Samudra Karmaker', 'Nafi', 'Ahasan Nahid']
const friends = bestFriend(friendNames);
console.log(friends);