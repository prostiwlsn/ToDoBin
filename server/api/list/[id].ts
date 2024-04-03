export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')

    const content = await List.find({ id: id})

    if(content.length != 0)
    {
        return content[0]
    }
    else{
        return null
    }
})