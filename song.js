client_commands.play = function (args) {
    playingAudio = new Audio(args[0]);
    playingAudio.play();
}
client_commands.pause = function () {
    playingAudio.pause();
}
client_commands.continue = function () {
    playingAudio.play();
}
// yeah it didn't work first try
