import { Button } from "./Button"
import { eachDayOfInterval, endOfWeek, startOfWeek, format, isFuture } from "date-fns"

export type HabitItemProps = {
    habit: {
        id: string,
        name: string
    }
}
export function HabitItem({ habit } : HabitItemProps){
    const visibleDates = eachDayOfInterval({
        start: startOfWeek(new Date(), { weekStartsOn: 1 }),
        end: endOfWeek(new Date(), { weekStartsOn: 1 })
    })
    return(
        <div className = "rounded-x1 bg-zinc-800 p-4  flex flex-col gap-3">
            <div className = "flex items-center justify-between">
                <div className = "flex gap-3 items-center">
                    <span className = "font-medium" >{habit.name}</span>
                    <span className = "text-sm text-amber-400">🔥 3</span>
                </div>
                <Button variant="ghost-destructive">Delete</Button>
            </div>
            <div className = "flex gap-1.5">
                {visibleDates.map(date => (
                    <Button 
                        className = "flex flex-1 flex-col items-center gap-0.5 rounded-1g text-sm"
                        key={date.toISOString()} 
                        disabled = {isFuture(date)}>
                        <span className = "font-medium">{format(date, 'EEE')}</span>
                        <span>{format(date, 'd')}</span>
                    </Button>
                ))}
            </div>
        </div>
    )
}