interface Rule {
    value: string

    check(value: number): boolean;
}

export default Rule;