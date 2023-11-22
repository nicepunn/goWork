export default async function getGowork(id: string) {

    const response = await fetch(`http://localhost:5000/api/v1/coworkingspaces/${id}`)
    if(!response.ok) {
        throw new Error("Failed to fetch a coworkingspace")
    }

    return await response.json()
    
}