register("chat", function(event) {
    //Get settings
    var toggle = customRankSettings.getSetting("Custom Rank", "Toggle Module");
    var nick = customRankSettings.getSettingObject("Custom Rank", "Nick").text;
    var rank = customRankSettings.getSettingObject("Custom Rank", "Rank").text;

    //Ensure module is on
    if(!toggle) {
        return;
    }

    //Ensure the player was involved with the message
    var playerName = Player.getName();
    var msg = ChatLib.getChatMessage(event, true);
    if (!contains(ChatLib.removeFormatting(msg), playerName)) {
        return;
    }

    //Actually change the text
    var donorRank = split[split.length - 1];
    if (!isChangeableRank(donorRank)) {
        //If the player spoke, add a space between rank and name
        msg = msg.replace(playerName, ((ChatLib.removeFormatting(msg).indexOf(playerName + ":") > -1) ? rank + " " : "") + nick);
    } else {
        //any other time the name is seen in chat just change their info
        msg = msg.replace(donorRank + " " + playerName, rank + " " + nick);
    }

    //Even nons need white chat
    msg = msg.replace(nick + "&7", nick + "&f");

    //chat the message and cancel the old one
    ChatLib.chat(msg);
    cancel(event);
}).setPriority(Priority.LOW).triggerIfCanceled(false);
