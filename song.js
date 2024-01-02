client_commands.play = function (args) {
    var playingAudio = new Audio(args[0]);
    playingAudio.play();
}
client_commands.pause = function () {
    playingAudio.pause();
}
client_commands.continue = function () {
    playingAudio.play();
}
