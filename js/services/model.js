/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "Number": {
        "type": "number"
    },
    "Boolean": {
        "type": "boolean"
    },
    "String": {
        "type": "string"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "branch": new $a.LocalStorage("branch", "String"),

    "house": new $a.LocalStorage("house", "String"),

    "senate": new $a.LocalStorage("senate", "String"),

    "congress": new $a.LocalStorage("congress", "String"),

    "council": new $a.LocalStorage("council", "String")
};