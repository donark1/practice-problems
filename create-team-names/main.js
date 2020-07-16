function createTeamName(namesArray) {
    var reorderArray = namesArray.sort()
    return reorderArray.map(i => i.charAt(0)).join("");
}
