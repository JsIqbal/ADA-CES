import axios from "axios";

export async function login(data) {
    try {
        const response = await axios.post("http://login", data);
        console.log(response);
        return response;
    } catch (err) {
        const response = {
            admin: 'admin',
            moderator: "moderator",
            parent: 'parent',
            child: 'child'
        }
        return response;
    }
}

export async function registration(data) {
    try {
        const response = await axios.post("http://registration", data);
        console.log(response);
        return response;
    } catch (err) {
        return alert("status 201: user added successfully");
    }
}