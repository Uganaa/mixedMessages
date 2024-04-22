const randomMessageGenerator = (messages) => {
    const randomMessageId = Math.floor(Math.random() * messages.length);
    return randomMessageId
}

const dadJokes = ["April showers bring May flowers, but what do May flowers bring? Pilgrims", 
            "What do you call a fake noodle? An Impasta",
            "How do you make a tissue dance? Put a little boogie in it",
            "What is a funny mountain called? Hill-arious",
            "What do you call a song about a tortilla? A wrap.",
            "What’s Forrest Gump’s password? 1forrest1",
            "Where do pirates buy hooks? The second hand store",
            "The child refused to nap. She was found guilty of resisting a rest",
            "Why did the tomato blush? It saw the salad dressing!",
            "Why is it bad to iron a four leaf clover? Because you should never press your luck",
            "What did one hat say to the other? Wait here, I’m going on ahead!",
            "What keys unlock a banana? Mon-keys",
            "What is a fancy fish called? So-fish-ticated",
            "What’s blue and doesn’t weigh much? Light blue",
            "Where do you learn to make a banana split? Sundae school",
            "What happened to the frog that parked illegally? It got toad",
            "What type of bear is toothless? A gummy bear",
            "What cars do eggs drive? A Yolkswagen",
            "Why didn’t the skeleton go on the rollercoaster? It didn’t have the guts",
            "What did the cereal bring to the bank? Chex",
            "How does the moon style his hair? Eclipse it",
            "Why did the birds attack the dog? He was pure bread",
            "What did one wall say to the other? Let’s meet at the corner",
            "Why couldn’t the bicycle stand up alone? Because it was two tired",
            "How do you make seven even? Take away the s",
            "What’s it called when a snowman throws a tantrum? A meltdown",
            "What did the scarecrow win an award for? He was outstanding in his field",
            "What cars do sheep drive? Lamborghinis",
            "How do cows learn about current events? They read the moo-spaper",
            "How do you make a water bed bouncier? Fill it with Poland Spring water"];

const mixedMessages = () => {
    const randomId = randomMessageGenerator(dadJokes);
    console.log(dadJokes[randomId]);
}

mixedMessages();