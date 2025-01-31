class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
      
      if (lowerCaseMessage.includes("pricing")) {
        this.actionProvider.handlePricing();
      } else if (lowerCaseMessage.includes("services")) {
        this.actionProvider.handleServices();
      } else if(lowerCaseMessage.includes("website")){
        this.actionProvider.handleAboutUs();
      } else if(lowerCaseMessage.includes("bbbee")){
        this.actionProvider.handleBBBEE();
      } else if(lowerCaseMessage.includes("resources")){
        this.actionProvider.handleResources();
      } else if(lowerCaseMessage.includes("locate")){
        this.actionProvider.handleDirection();
      } else if(lowerCaseMessage.includes("partners")){
        this.actionProvider.handleParters();
      } else if(lowerCaseMessage.includes("team")){
        this.actionProvider.handleTeam();
      } else if(lowerCaseMessage.includes("contact")){
        this.actionProvider.handleContact();
      } else if(lowerCaseMessage.includes("vision")){
        this.actionProvider.handleVision();
      } else if(lowerCaseMessage.includes("mission")){
        this.actionProvider.handleMission();
      } 
      else {
        this.actionProvider.handleUnknown();
      }
    }
  }
  
  export default MessageParser;