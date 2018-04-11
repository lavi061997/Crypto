const Block = require('./block');

describe('Block', function() {
    let data, lastBlock, block;
    beforeEach('Block', () => {
         data = 'bar';
         lastBlock = Block.genesis();
         block = Block.mineBlock(lastBlock, data);
    });

    it('sets the `data` to match the input', () => {
        expect(block.data).toEqual(data);
    });

    it('sets the `lastHash` to match the hash of last block', () => {
        expect(block.lashHash)toEqual(lastHash.hash);
    });
});
