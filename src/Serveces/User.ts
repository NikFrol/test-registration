export class User {
    async addUser(userData: { name: string, email: string, isAgreeEmailUpdate: boolean }) {
        try {
            const response = await fetch('http://localhost:4000/users', {
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
}