export default interface Rule {
    value: string

    check(value: number): boolean;
}