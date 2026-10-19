import { Button } from "./Button";

export function HabitForm(){
    return(
        <form className = "flex gap-2">
            <input 
            className="flex-1 rounded-1g bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-blue-500" 
            type="text"
            placeholder="Enter a new habit..." />
            <Button>Add Habit</Button>
        </form>
    )
}