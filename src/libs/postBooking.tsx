export default async function postGoWork(token:string, coworkingspaceId: string,
    bookingDate: string, numOfRooms: number, createAt: string) {
        const response = await fetch(`http://localhost:5000/api/v1/coworkingspaces/${coworkingspaceId}/bookings`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                bookingDate: bookingDate,
                numOfRooms: numOfRooms,
                createAt: createAt
            }),
        })
        if(!response.ok) {
            throw new Error('Failed to post a booking')
        }
        return await response.json()
    }