import { randomUUID } from "crypto";

interface UserInterface {
    get id(): string;
    get name(): string;
    get email(): string;
}

export type UserProps = {
    id?: string;
    name: string;
    email: string;
};

export default class User implements UserInterface {
    private _id: string;
    private _name: string;
    private _email: string;

    constructor(props: UserProps) {
        this._id = props.id || randomUUID();
        this._name = props.name;
        this._email = props.email;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }
}