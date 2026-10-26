import { createContext, useContext } from "react"
import type { Habit } from "./HabitProvider"

type Context = {
    habits: Habit[]
    addHabit: (name: string) => void
    deleteHabit: (id: string) => void
    toggleHabit: (id: string, date: Date) => void
}

export const HabitContext = createContext<null | Context>(null)

export function useHabits() {
    const habitContext = useContext(HabitContext)
    if (habitContext === null){
        throw new Error("HabitContext is null")
    }
    return habitContext
}



