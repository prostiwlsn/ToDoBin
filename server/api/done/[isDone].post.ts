//changes state of the point 

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const isDone = getRouterParam(event, 'isDone')

    console.log(body)

    try{
        if(isDone == "true"){
            const done = await Done.create(body)

            await done.save()
        }
        else{
            await Done.deleteMany(body)
        }
        return true
    }
    catch{
        return false
    }

})