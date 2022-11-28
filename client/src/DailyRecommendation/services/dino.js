import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8000/dino",
    headers: {
        "Content-type": "application/json"
    }
});

class DinoDataServices {
    getAll () {
        return http.get("/all")
    }
    getToday () {
        return http.get("/today")
    }
}

export default new DinoDataServices();