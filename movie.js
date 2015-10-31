var ProtoBuf = require("protobufjs");

var builder = ProtoBuf.loadProtoFile("complex.proto"),
    Game = builder.build("Movie"),
    Movie = Game.Movies.Movie,
message = builder.build("Message");

// Construct with arguments list in field order:

// OR: Construct with values from an object, implicit message creation (address) and enum values as strings:
var movie = new Movie({
    "judul": "Cetar",
    "detail": {
        "genre": "Romantic.",
        "aktris": "Elfira"{
            "country": "Jogja"
        }
    },
    //"speed": "SUPERFAST" // also equivalent to "speed": 2
});

// OR: It's also possible to mix all of this!

// Afterwards, just encode your message:
var buffer = car.encode();
console.log = (buffer);
//var dbuffer = Car.decode(buffer);
//console.console.log(dbuffer);
