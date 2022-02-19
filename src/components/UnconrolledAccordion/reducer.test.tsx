import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test("collapsed should be true", ()=>{
    //data
    const State: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(State, {type: TOGGLE_COLLAPSED})
    //expection
    expect(newState.collapsed).toBe(true)
})

test("collapsed should be false", ()=>{
    //data
    const State: StateType = {
        collapsed: true
    }
    //action
    const newState = reducer(State, {type: TOGGLE_COLLAPSED})
    //expection
    expect(newState.collapsed).toBe(false)
})

test("collapsed should be fake", ()=>{
    //data
    const State: StateType = {
        collapsed: true
    }
    //action

    //expection
    expect(() => {reducer(State, {type: "FAKETYPE"})}).toThrowError()
})