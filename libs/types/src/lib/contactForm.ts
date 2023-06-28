export type IInput = {
    name: string;
    description: string;
    error: string;
};

export type IContactForm = {
    nameInput: IInput;
    emailInput: IInput;
    subjectInput: IInput;
    messageInput: IInput;
    submission: {
        success: string;
        error: string;
    };
};
