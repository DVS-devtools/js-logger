import init from './index';
import Global from '../global';

test('init() set global value to true', () => {
    init({enable: true});
    expect(Global.enable).toBe(true);
});

test('init() set global value to false', () => {
    init({enable: false});
    expect(Global.enable).toBe(false);
});