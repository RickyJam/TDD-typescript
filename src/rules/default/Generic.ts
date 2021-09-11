import Rule from '../Rule';

export default class Generic implements Rule {
    value: string = undefined

    check(_: number): boolean {
        return true;
    }
}