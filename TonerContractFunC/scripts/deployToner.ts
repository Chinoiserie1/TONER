import { toNano } from '@ton/core';
import { Toner } from '../wrappers/Toner';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const toner = provider.open(
        Toner.createFromConfig(
            {
                id: Math.floor(Math.random() * 10000),
                counter: 0,
            },
            await compile('Toner')
        )
    );

    await toner.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(toner.address);

    console.log('ID', await toner.getID());
}
