register("tick", function() {
    //get Settings
    var toggle = customRankSettings.getSetting("Custom Rank", "Toggle Module");
    var rank = customRankSettings.getSettingObject("Custom Rank", "Rank").text;

    //Ensure module is on
    if(!toggle) {
        return;
    }

    //Reset scoreboard cache and ensure it is rendered
    Scoreboard.resetCache();
    if(!(Scoreboard.getTitle().trim() != "" && Scoreboard.getLines().length > 0)) {
        return;
    }

    //Change the line saying "Rank:" to CustomRank
    for(var i = 0; i < Scoreboard.getLines().length; i++) {
        var line = Scoreboard.getLines().get(i);
        if(contains(line.getName(), "Rank: ")) {
            Scoreboard.setLine(line.getPoints(), "§fRank: " + rank.replace(/\[/g, "").replace(/]/g, "").replace(/&/g, "§"), true);
        }
    }
});