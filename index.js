

function writeCards(recipients, event) {
    let array = []
    
    for (let i = 0; i < recipients.length; i++){
    array.push(`Thank you, ${recipients[i]}, for the wonderful ${event} gift!`);
    
    }
    return array; 
}


