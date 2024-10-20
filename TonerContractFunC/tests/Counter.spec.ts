import { Cell } from '@ton/core';
import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import Counter from '../wrappers/Counter'; // this is the interface class from tutorial 2
import '@ton/test-utils'; // register matchers
import { compile } from '@ton/blueprint';

describe('Counter tests', () => {
    let code: Cell;

    beforeAll(async () => {
        code = await compile('Counter');
    });

    let blockchain: Blockchain;
    let wallet1: SandboxContract<TreasuryContract>;
    let counterContract: SandboxContract<Counter>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        counterContract = blockchain.openContract(Counter.createForDeploy(code, 17));

        wallet1 = await blockchain.treasury('user1');

        await counterContract.sendDeploy(wallet1.getSender());
    }),
        it('should deploy', async () => {
            // the check is done inside beforeEach
            // blockchain and counterContract are ready to use
        }),
        it('should get counter value', async () => {
            const value = await counterContract.getCounter();
            expect(value).toEqual(17);
        }),
        it('should increment counter value', async () => {
            await counterContract.sendIncrement(wallet1.getSender());
            const value = await counterContract.getCounter();
            expect(value).toEqual(18);
        });
    it('should increment counter value multiple times', async () => {
        const incrementTimes = 8;
        const initialCounterValue = await counterContract.getCounter();
        for (let i = 0; i < incrementTimes; i++) {
            await counterContract.sendIncrement(wallet1.getSender());
            const value = await counterContract.getCounter();
            expect(value).toEqual(initialCounterValue + i + 1);
        }
    });
});
