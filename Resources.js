function isChangeableRank(rank) {
    //Remove formatting from input to ensure nothing weird happens
    rank = ChatLib.removeFormatting(rank);

    //simple logic to determine if the strings match and return true or false
    var ranks = [ "VIP", "MVP", "HELPER", "MOD", "ADMIN", "YOUTUBE", "BUILD", "BEAM", "SLOTH", "MCPROHOSTING", "OWNER" ];
    for(var i = 0; i < ranks.length; i++) {
        if(rank.toUpperCase().startsWith("[" + ranks[i])) {
            return true;
        }
    }
    return false;
}

//Just for code clarity, sometimes used somtimes not
function contains(obj, contains) {
    return obj.indexOf(contains) > -1;
}
