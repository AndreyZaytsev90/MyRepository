import {StateType, UncontrolledAccordionReducer} from './UncontrolledAccordion-reducer';
import { collapsedHandlerAC } from './UncontrolledAccordion-reducer';

describe('UncontrolledAccordionReducer', () => {
    it('should toggle collapsed state', () => {
        const initialState: StateType = { collapsed: true };
        const action = collapsedHandlerAC();

        const newState = UncontrolledAccordionReducer(initialState, action);

        expect(newState).toEqual({ collapsed: false });
    });

    it('should throw error for unknown action type', () => {
        const initialState = { collapsed: true };
        const action = { type: 'UNKNOWN_ACTION' } as any;

        expect(() => {
            UncontrolledAccordionReducer(initialState, action);
        }).toThrowError('The type of action was not found');
    });
});