type ButtonProps = {
    children: React.ReactNode
}

export function Button({ children }: ButtonProps){
    return <button className = "bg-blue-600 hover:bg-blue-500 transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed">{ children }</button>
}

