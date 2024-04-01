import { generateId } from "~/utils/generateId"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const id = generateId()

    const list = await List.create({ 
        id: id,
        content: body
    })

    await list.save()

    return { id }
})