export const generateJwt = async (userId) => {
    const endpoint = "http://23.21.45.25:4002/";
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userId),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Generated JWT:", data.token);
        return data.token;
    } catch (error) {
        console.error("Error generating JWT:", error);
        return null;
    }
}
