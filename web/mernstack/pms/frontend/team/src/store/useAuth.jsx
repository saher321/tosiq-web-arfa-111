import { create } from 'zustand'

const useAuth = create(
    (set, get) => ({
        user: "Ali",
    })
)

export default useAuth