import { type ReactNode} from "react";
import { isSameDay } from "date-fns";
import { HabitContext } from "./useHabits";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type Habit = {
    id: string,
    name: string
    completions: Date[]
}

type HabitProviderProps = {
    children: ReactNode
}

export function HabitProvider({children}: HabitProviderProps ) {
    const [habits, setHabits] = useLocalStorage<Habit[]>("Habits",([]))
    
    function addHabit(name: string){
        setHabits(curr => [...curr, { id: crypto.randomUUID(), name, completions: []}])
      }
    
      function deleteHabit(id: String){
        setHabits(curr => curr.filter(h => h.id !== id))
      }
    
      function toggleHabit(id: string, date: Date){
        setHabits(curr => 
          curr.map(h => {
            if(h.id !== id) return h
            const alreadyDone = h.completions.some(c => isSameDay(c, date))
            const completions = alreadyDone ? h.completions.filter(c => !isSameDay(c, date)) 
            : [...h.completions, date]
            
            return { ...h, completions }
          }),
        )
      }

    return <HabitContext value = {{habits, addHabit, deleteHabit, toggleHabit}}>{children}</HabitContext>
}
