import Node from "./Node";
import Generic from '../rules/generic/Generic';



describe('Node', () => {
    const rule = new Generic();

    beforeAll(() => {

    });

    it('return value if rule is valid', () => {
        const node = new Node(undefined, rule);

        expect(node.apply(1)).toBe("1");
    });

});