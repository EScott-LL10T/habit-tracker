import { HabitItem } from "./HabitItem"
import { type Habit } from "../context/HabitProvider"
import { useHabits} from "../context/useHabits"

export type HabitListProps = {
    habits: Habit[]
    deleteHabit: (id: string) => void
    toggleHabit: (id: string, date: Date) => void
}

export function HabitList(){
    const {habits} = useHabits()
    if(habits.length === 0){
        return( 
            <p className = "text-center text-zinc-500 py-12">No habits yet. Add one to get started.</p>
        )
    } 
    return (
       <div className = "flex flex-col gap-3">
            {habits.map(habit => (<HabitItem key = {habit.id} habit = {habit}/>))}
       </div>
    )
}
