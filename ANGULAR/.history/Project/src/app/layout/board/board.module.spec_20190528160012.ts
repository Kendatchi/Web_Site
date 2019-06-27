import { BoardModule } from './board.module';

describe('ChartsModule', () => {
    let boardModule: BoardModule;

    beforeEach(() => {
        boardModule = new BoardModule();
    });

    it('should create an instance', () => {
        expect(boardModule).toBeTruthy();
    });
});
