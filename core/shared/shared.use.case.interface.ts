export interface SharedUseCaseInterface {
    execute(input: any): Promise<any>;
}