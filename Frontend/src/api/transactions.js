export const registerTransaction = async (data) => {
    const mutation = `
        mutation {
            register(value: "${data.value}", date: "${data.date}", type: "${data.type}", destination_id: "${data.destination_id}", paymentMethod: "${data.paymentMethod}", evidence: "${data.evidence}", category_user_id: "${data.category_user_id}") 
        }
    `
    const endpoint = "http://localhost:5001/graphql";
    console.log(mutation)
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            credentials: "include",
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
        console.log("Transaction generated:", data);
        return data;
    } catch (error) {
        console.error("Error generating user category:", error);
        return null;
    }
}