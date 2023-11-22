export default async function postGoWork(name: string, address: string, operatingHours:string,
    province: string, postalcode: string, tel: string, picture: string) {
        const response = await fetch('http://localhost:5000/api/v1/coworkingspaces', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                address: address,
                operatingHours: operatingHours,
                province: province,
                postalcode: postalcode,
                tel: tel,
                picture: picture
            }),
        })
        if(!response.ok) {
            throw new Error('Failed to post a coworkingspace')
        }
        return await response.json()
    }