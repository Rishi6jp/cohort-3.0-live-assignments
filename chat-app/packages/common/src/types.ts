import {z} from "zod"

export const CreateUserSchema = z.object({
    username: z.string(),
    password: z.string(),
    name: z.string(),
})

export const SigninSchema = z.object({
    username: z.string(),
    password: z.string(),
    name: z.string(),
})

export const CreateRoomSchema = z.object({
    roomName: z.string().min(3).max(20),
})