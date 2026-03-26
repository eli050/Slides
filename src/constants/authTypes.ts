

export type User = {
    name: string;
    email: string;
    password: string;
};

export type SignInData = {
    email: string;
    password: string;
};

export type SignUpData = User;