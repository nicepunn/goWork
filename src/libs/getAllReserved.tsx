export default async function getAllReserved(token:string, goWorkId: string) {

    await new Promise((resolve) => setTimeout(resolve, 5000))

    const response = await fetch("http://localhost:5000/api/v1/bookings", {
		method: 'GET',
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
    if(!response.ok) {
        throw new Error("Failed to fetch reserved coworkingspaces")
    }
    return await response.json()
}



//How to input parameters???