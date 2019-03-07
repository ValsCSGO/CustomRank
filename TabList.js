register("tick", function() {
    //Get Settings
    var toggle = customRankSettings.getSetting("Custom Rank", "Toggle Module");
    var nick = customRankSettings.getSettingObject("Custom Rank", "Nick").text;
    var rank = customRankSettings.getSettingObject("Custom Rank", "Rank").text;

    //Make sure the mod is on and the player has been defined
    if(!toggle || Player.getPlayer() == undefined || Player.getDisplayName() == undefined) {
        return;
    }

    //Set the player's name in tab to their rank and nick
    Player.setTabDisplayName(new TextComponent(rank + " " + nick));
});
