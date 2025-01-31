class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
      ///Pricing message
        handlePricing = () => {
          const message = this.createChatBotMessage(
            "To hear more about our pricing please visit our contact us page and enquire.");
            this.updateChatbotState(message);
            };
          ///About us message

        handleAboutUs =() => {
          const message = this.createChatBotMessage(
            "We at ThinkFriday want to give each of you the time and guidance you deserve. Whether you’re seeking a strategic alliance with the right partner or a special skillset or tool, call us today."
          );
          this.updateChatbotState(message)
        }
          ///BBBEE message

        handleBBBEE =() => {
          const message = this.createChatBotMessage(
            "BBBEE compliance is a critical consideration for businesses operating in South Africa. Navigate to our blog and read more on this very informative matter"
          );
          this.updateChatbotState(message)
        }
          ///Location message

        handleDirection =() => {
          const message = this.createChatBotMessage(
            "Locate us here: Unit 8, Northlands Retail Park, 210 Epsom Ave, Hoogland, Northriding, 2169."
          );
          this.updateChatbotState(message)
        }
          ///resources message

        handleResources =() => {
          const message = this.createChatBotMessage(
            "Compliance with both POPIA and BBBEE is essential for businesses operating in South Africa to protect personal information and promote economic transformation. By understanding the intersection of these regulatory frameworks and implementing appropriate measures, businesses can demonstrate their commitment to ethical data handling practices and contribute to sustainable development."
          );
          this.updateChatbotState(message)
        }

        //services method
        handleServices = () => {
          const message = this.createChatBotMessage(
          "We offer the following services: BBBEE adisory and consulting, Human Resources (HR) Consulting, and Skills Development Consulting. Find out more about our services by navigating to our services page"
          );
        this.updateChatbotState(message);
        };

        //mission method
        handleMission = () => {
          const message = this.createChatBotMessage(
            "Our service includes a comprehensive consult to help identify gaps and opportunities, a comprehensive report with timelines and milestones, cost analysis, and a schedule to ensure your success."
          );
          this.updateChatbotState(message);
        };
        
        //vision method
        handleVision = () => {
          const message = this.createChatBotMessage(
            "To empower businesses with strategic guidance, innovative solutions, and unwavering support for long-term success."
          );
          this.updateChatbotState(message);
        };

        //contact method
        handleContact= () => {
          const message = this.createChatBotMessage(
            "Call us on: +27 10 880 3795 or email us on: Tariq@thinkfriday.co.za"
          );
          this.updateChatbotState(message);
        };

        //team method
        handleTeam = () => {
          const message = this.createChatBotMessage(
            "The founder is Tariq Shurmah, you can navigate to the about us page to view the rest of the team"
          );
          this.updateChatbotState(message);
        };

        //partners mathod
        handleParters = () => {
          const message = this.createChatBotMessage(
            "We are partnered with Forge Academy along with Virtual Assistant 2.0"
          );
          this.updateChatbotState(message);
        };
    
    
    
  
    handleUnknown = () => {
      const message = this.createChatBotMessage("Can you rephrase?");
      this.updateChatbotState(message);
    };
  
    updateChatbotState(message) {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;