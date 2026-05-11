function formatGuests(names) {
    const guests = names.slice(1).map(name => `Guest: ${name}`);
    return guests.join("\n");
}

const names = ["Aaryan", "Arush", "Arushi", "Amitansh"];
console.log(formatGuests(names));
