interface Goal {
    name: string,
    category: string,
    reps: string,
}
interface ActionAdd {
    type: "ADD_GOAL";
    payload: Goal;
}

interface ActionDelete {
    type: "DELETE_GOAL";
    payload: string;
}

type Action = ActionAdd | ActionDelete;

export default function goalReducer(state = [], action: Action) {
    switch (action.type) {
        case "ADD_GOAL":
            return [...state, action.payload];

        case "DELETE_GOAL":
            return state.filter((g: Goal) => g.name !== action.payload);

        default:
            return state;
    }
}