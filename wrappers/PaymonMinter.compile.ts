import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/paymon_minter.tact',
    options: {
        debug: false,
    },
};
