import TextNode from './TextNode';
import { NodeType, type Node } from './types';

class HeaderNode implements Node {
    private static HEADER_REGEX_MATCHER = /^(#+) (.+)$/;

    readonly type = NodeType.HEADER;
    readonly children: Node[] = [];
    readonly raw;
    private _level: number = 0;

    get level() {
        return this._level;
    }

    public constructor (source: string) {
        this.raw = source;
        const sanitizedSource = HeaderNode.sanitizeSource(source);
        this.parse(sanitizedSource);
    }

    private static sanitizeSource (source: string) {
        return source.replace(/\n/g, '');
    }

    private parse(source: string) {
        const match = source.match(HeaderNode.HEADER_REGEX_MATCHER);

        if (match === null) {
            throw new Error(`Unable to parse header [${source}]`);
        }

        const level = match.at(1)!.length;
        const textSource = match.at(2)!;

        this.children.push(new TextNode(textSource));
        this._level = level;
    }

    public static isHeaderSource(source: string): boolean {
        return source.match(this.HEADER_REGEX_MATCHER) !== null;
    }
}

export default HeaderNode;

