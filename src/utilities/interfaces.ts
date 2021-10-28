export interface SignUpBody {
    name: string;
    email: string;
    password: string;
    confirm: string;
}

export interface LogInBody {
    email: string;
    password: string;
}

export interface ToDo {
    id?: string;
    name: string;
    status?: string;
    content?: string;
}
