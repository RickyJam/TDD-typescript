import Node from "./Node";
import Fizz from '../rules/fizz/Fizz';
import Generic from '../rules/generic/Generic';


describe('Node', () => {
    const fizz = new Fizz();
    const generic = new Generic();

    beforeAll(() => {

    });

    it('return value if rule is valid', () => {
        const node = new Node(undefined, generic);

        expect(node.apply(1)).toBe("1");
    });

    it('return value if rule is valid', () => {
        const node = new Node(undefined, fizz);

        expect(node.apply(3)).toBe("FIZZ");
    });

});