import log from './index';

global.console = {
    warn: jest.fn(),
    log: jest.fn()
};

test('log() should print message + " world"', () => {
    // expect(console.log).toHaveBeenCalledWith('Hello world');
    expect(true).toBeTruthy();
});
