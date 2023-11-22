export default async function getAllGoWork() {

    await new Promise((resolve) => setTimeout(resolve, 5000))

    const response = await fetch("http://localhost:5000/api/v1/coworkingspaces", { next: { tags:['AllGoWork'] } });
    if(!response.ok) {
        throw new Error("Failed to fetch coworkingspaces")
    }
    return await response.json()
}
