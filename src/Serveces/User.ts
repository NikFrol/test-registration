export class User {
    apiUrl = 'http://localhost:4000/users';
    
    async addUser(userData: { name: string, email: string, isAgreeEmailUpdate: boolean }) {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('registration error');
            }

            const data = await response.json();
            return data
        } catch (error) {
            throw new Error('Error communicating with the server');
        }
    }
    async getUserById(id: number) {

        const endPoint = `${this.apiUrl}/${id}`;

        return await fetch(endPoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => new Error(error));

    }
}