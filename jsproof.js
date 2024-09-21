let nftCollection = [];

function makeNFT(name, species, habitat, power, rarity) {
    const nft = {
        name: name,
        species: species,
        habitat: habitat,
        power: power,
        rarity: rarity
    };
    nftCollection.push(nft);
}

function printNFTDetails() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT #${index + 1}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Species: ${nft.species}`);
        console.log(`Habitat: ${nft.habitat}`);
        console.log(`Power: ${nft.power}`);
        console.log(`Rarity: ${nft.rarity}`);
        console.log('------------------------');
    });
}

makeNFT("Monster Dragon", "Dragon", "Mountain", "Fire Breath", "Epic");
makeNFT("spectacular Unicorn", "Unicorn", "Forest", "Healing", "Legendary");
makeNFT("doodle Monkey", "Monkey", "Jungle", "Agility", "Master");

printNFTDetails();
