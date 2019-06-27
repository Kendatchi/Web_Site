import { BoardModule } from './board.module';

describe('ChartsModule', () => {
    let BoardModule: BoardModule;

    beforeEach(() => {
        BoardModule = new BoardModule();
    });

    it('should create an instance', () => {
        expect(boardModule).toBeTruthy();
    });
});
