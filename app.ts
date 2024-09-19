import PromptSync from "prompt-sync";
const prompt = PromptSync();


function welcomeMessage(name: string) {
    console.log(`Welcome to Wizarding World ${ name }`)
};

const getInput = () => {
    const value = prompt('Enter your name: ');
    return value;
}


welcomeMessage(getInput());