import { Button } from "./Button"
import { eachDayOfInterval, endOfWeek, startOfWeek, format, isFuture, isSameDay, subDays } from "date-fns"
import { useHabits, type Habit } from "../context/HabitProvider"


export type HabitItemProps = {
    habit: Habit
}
export function HabitItem({ habit} : HabitItemProps){
    const {deleteHabit, toggleHabit} = useHabits()

    const visibleDates = eachDayOfInterval({
        start: startOfWeek(new Date(), { weekStartsOn: 1 }),
        end: endOfWeek(new Date(), { weekStartsOn: 1 })
    })
    const streak = getStreak(habit.completions)


    return(
        <div className = "rounded-x1 bg-zinc-800 p-4  flex flex-col gap-3">
            <div className = "flex items-center justify-between">
                <div className = "flex gap-3 items-center">
                    <span className = "font-medium" >{habit.name}</span>
                    {streak !== 0 && (
                        <span className = "text-sm text-amber-400">🔥 {streak}</span>
                    )}
                </div>
                <Button  variant="ghost-destructive" onClick={() => deleteHabit(habit.id)}>Delete</Button>
            </div>
            <div className = "flex gap-1.5">
                {visibleDates.map(date => (
                    <Button 
                        className = "flex flex-1 flex-col items-center gap-0.5 rounded-1g text-sm"
                        key={date.toISOString()} 
                        disabled = {isFuture(date)}
                        onClick = {() => toggleHabit(habit.id, date)}
                        variant = {habit.completions.some(d => isSameDay(date, d)) ? "primary" : "secondary"}
                    >
                        <span className = "font-medium">{format(date, 'EEE')}</span>
                        <span>{format(date, 'd')}</span>
                    </Button>
                ))}
            </div>
        </div>
    )
}

function getStreak(completions: Date[]){
    let streak = 0
    let date = new Date()

    while(completions.some(c => isSameDay(c, date))){
        streak++
        date = subDays(date, 1)
    }
    return streak   
}