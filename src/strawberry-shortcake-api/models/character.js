/**
 * Modelo para un character de Strawberry Shortcake.
 */
module.exports = class Character {
    _id;
    season;
    name;
    nickName;
    age;
    gender;
    relatives;
    theme;
    occupation;
    hairColor;
    eyeColor;
    picture;
    goal;
    like;
    disLike;
    friends;
    enemies;
    geneation;
    pets;
    personality;
    appearance;
    voiceActor;
    summary;
    species;
    source;

    constructor( id,
        season,
        name,
        nickName,
        age,
        gender,
        relatives,
        theme,
        occupation,
        hairColor,
        eyeColor,
        picture,
        goal,
        like,
        disLike,
        friends,
        enemies,
        geneation,
        pets,
        personality,
        appearance,
        voiceActor,
        summary,
        species,
        source ) {

        this._id = id;
        this.season = season;
        this.name = name;
        this.nickName = nickName;
        this.age = age;
        this.gender = gender;
        this.relatives = relatives;
        this.theme = theme;
        this.occupation = occupation;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.picture = picture;
        this.goal = goal;
        this.like = like;
        this.disLike = disLike;
        this.friends = friends;
        this.enemies = enemies;
        this.geneation = geneation;
        this.pets = pets;
        this.personality = personality;
        this.appearance = appearance;
        this.voiceActor = voiceActor;
        this.summary = summary;
        this.species = species;
        this.source = source;
    }
};

/* 
Data:
Ingles: Strawberry Shortcake (Pastelito de frutilla) > https://en.wikipedia.org/wiki/Strawberry_Shortcake
Source: https://strawberryshortcake.fandom.com/wiki/Strawberry_Shortcake%27s_Berry_Bitty_Adventures
*/
