// Create a class named ToolGenius
class ToolGenius {
    constructor() {
        this.tools = [];
    }

    // Method: add a tool to the genius's collection
    addTool(tool) {
        this.tools.push(tool);
        console.log(`Added ${tool} to the ToolGenius collection.`);
    }

    // Method: remove a tool from the genius's collection
    removeTool(tool) {
        const index = this.tools.indexOf(tool);
        if (index !== -1) {
            this.tools.splice(index, 1);
            console.log(`Removed ${tool} from the ToolGenius collection.`);
        } else {
            console.log(`${tool} is not found in the ToolGenius collection.`);
        }
    }

    // Method: list all tools in the genius's collection
    listTools() {
        console.log("Tools in the ToolGenius collection:");
        this.tools.forEach(tool => {
            console.log(tool);
        });
    }
}

// Create an instance of ToolGenius named myToolGenius
const myToolGenius = new ToolGenius();

// Add tools to the genius's collection
myToolGenius.addTool("IDE");
myToolGenius.addTool("Debugger");
myToolGenius.addTool("Version Control");

// List all tools in the genius's collection
myToolGenius.listTools();

// Remove a tool from the genius's collection
myToolGenius.removeTool("IDE");

// List all tools in the genius's collection after removal
myToolGenius.listTools();
