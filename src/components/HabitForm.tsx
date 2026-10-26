import { useState, type SubmitEvent } from "react";
import { Button } from "./Button";
import { useHabits } from "../context/HabitProvider";

export function HabitForm(){
    const [name , setName] = useState("")
    const habitContext = useHabits()


    function handleSubmit(e: SubmitEvent){
        e.preventDefault()

        if(name.trim() === ""){
            return
        }
        setName("")
        habitContext?.addHabit(name)
    }

    return(
        <form className = "flex gap-2" onSubmit = {handleSubmit}>
            <input 
            value = {name}
            onChange = {e => setName(e.target.value)}
            className="flex-1 rounded-1g bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-blue-500" 
            type="text"
            placeholder="Enter a new habit..." />
            <Button disabled = {name.trim() === ""} type = "submit" 
            className = "rounded-1g px-4 py-2 font-medium">Add Habit
            </Button>
        </form>
    )
}