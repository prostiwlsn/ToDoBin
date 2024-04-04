//get all points done

export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const done = await Done.find({
        listId: query.listId, 
        userId: query.userId
    })

    return done
})