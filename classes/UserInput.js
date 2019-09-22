class UserInput {
    constructor(searchTerm, prefix) {
        this.searchTerm = searchTerm;
        this.prefix = prefix;
    }  
    
    getCompleteSearchTerm() {
        return {
            'searchTerm': this.searchTerm,
            'prefix': this.prefix
        };
    }
}

module.exports = UserInput;
