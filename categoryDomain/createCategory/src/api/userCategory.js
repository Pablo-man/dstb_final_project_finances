export const createUserCategory = async (user_id, category_id) => {
    const mutation = `
        mutation {
            register(user_id: "${user_id}", category_id: "${category_id}") 
        }
    `;
    const endpoint = "http://localhost:9001/graphql";
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: mutation,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Generated user category:", data);
        return data;
    } catch (error) {
        console.error("Error generating user category:", error);
        return null;
    }
}
