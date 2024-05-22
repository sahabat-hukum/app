"use client"
import { useChat } from "ai/react"
import { Bot, Loader2, User2 } from "lucide-react"
export default function ChatBox() {
    const {messages, input, handleInputChange, handleSubmit, isLoading, stop} = useChat({
        api: "api/chatbox"
    })
    return (
        <>
        <main className="flex min-h-screen flex-col items-center p-12">
        {RenderForm()}
        {RenderMessages()}
        </main>
        </>
    )

    function RenderForm() {
        return ( 
            <>
            <form onSubmit={(event) => {
                event.preventDefault(),
                handleSubmit(event, {
                    data: {
                        prompt: input
                    }
                })
            }} className="w-full flex flex-row gap-2 items-center h-full">
            <input 
            className="border-b border-dashed outline-none w-full px-4 py-2 focus:placeholder-transparent disabled:bg-transparent" 
            type="text" 
            placeholder={ isLoading ? "Mengetik..." : "Kirim pesan..."} 
            value={input} 
            disabled={isLoading}
            onChange={handleInputChange}/>
            <button 
            type="submit" 
            className="flex flex-row"
            >
                {isLoading ? <Loader2 onClick={stop} className="p-3 h-10 w-10 stroke-stone-500"/> : "Kirim" }
            </button>
            </form>
            </>
        )
    }

    function RenderMessages() {
        return <div className="flex flex-col-reverse w-full text-left mt-4 gap-4 whitespace-pre-wrap">
            {messages.map((m, index) => {
                return <div className={`p-4 shadow-md rounded-md ml-10 relative ${
                    m.role === "user" ? "bg-stone-300" : ""
                    }`}>
                    {m.content}
                    {m.role === "user" ? <User2 className="absolute top-2 -left-10 border rounded-full p-1 shadow-lg"/> : <Bot className="absolute top-2 -left-10 border rounded-full p-1 shadow-lg stroke-[0842A0]" />}
                </div>
            })}
        </div>
    }
}