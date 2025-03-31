import { createContext, useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './style.css';

interface Goal {
  name: string,
  category: string,
  reps: string,
}

function FitnessTracker() {
  /*
  const [goals, setGoals] = useState<Goal[]>([
    {
      name: "Run 5 kilometers",
      category: "Cardio",
      reps: "30 minutes",
    }
  ]); 
  */

  interface GoalsState {
    goals: Goal[]
  }

  const goals = useSelector((state: GoalsState) => state.goals);

  const GoalContext = createContext([] as Goal[]);

  const GoalItem = () => {
    const goals = useContext(GoalContext);
    const goalDisplay = goals.map((g: Goal) => {
      return (
        <div className="goal">
          <span>{g.name + " - "}<b>{g.category}</b>{" (" + g.reps + ")"}</span>
          
          <button onClick={() => deleteGoal(g.name)}>Mark as Achieved</button>
        </div>
      );
    });

    return goalDisplay;
  }
  

  const dispatch = useDispatch();
  const handleClick = () => {
    const name = (document.getElementById("name") as HTMLInputElement)!.value;
    const category = (document.getElementById("category") as HTMLInputElement)!.value;
    const reps = (document.getElementById("reps") as HTMLInputElement)!.value;

    dispatch({type: "ADD_GOAL", payload: {name, category, reps}})
  }

  /*
  const addGoal = () => {
    const name = (document.getElementById("name") as HTMLInputElement)!.value;
    const category = (document.getElementById("category") as HTMLInputElement)!.value;
    const reps = (document.getElementById("reps") as HTMLInputElement)!.value;

    setGoals(
      goals.concat([{name, category, reps}])
    );
  };
  */

  const deleteGoal = (name: string) => {
    //setGoals(goals.filter((g: Goal) => g.name !== name));
    dispatch({type: "ADD_GOAL", payload: name});
  };

  return (
    <GoalContext value={goals}>
      <div id="tracker">

        <div id="center">
          <h1>Fitness Goal Tracker</h1>
        </div>

        <span>Fitness Goal</span>
        <input type="text" id="name" placeholder="Enter fitness goal" /><br />

        <span>Category</span>
        <select id="category">
          <option value="Strength Training">Strength Training</option>
          <option value="Cardio">Cardio</option>
          <option value="Aerobics">Aerobics</option>
          <option value="Weight Lifting">Weight Lifting</option>
        </select><br />

        <span>Repetitions</span>
        <input type="text" id="reps" placeholder="Enter repetitions" /><br />

        <input type="button" value="Add Goal" onClick={handleClick} />

        {
          <GoalItem />
        }
        
      </div>
    </GoalContext>
  )
}

export default FitnessTracker
