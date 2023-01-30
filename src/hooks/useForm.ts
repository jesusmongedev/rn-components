import { useState } from "react"


export const useForm = <T extends Record<string, unknown>>(initState: T) => {
    const [formState, setFormState] = useState(initState)

    const onChange = <K extends Object>(value: K, field: keyof T) => {
        setFormState({
            ...formState,
            [field]: value,
        })
    }

    return {
        ...formState,
        formState,
        onChange,
    }
}