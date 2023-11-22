export default async function userRegister(name: string, email: string, tel: string, role:string, password: string, createAt:string) {
	const response = await fetch('http://localhost:5000/api/v1/auth/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
            name: name,
            emali: email,
            tel: tel,
            role: role,
            password: password,
            createAt: createAt
        }),
	})
	if(!response.ok) {
		throw new Error('Failed to register')
	}
	return await response.json()
}