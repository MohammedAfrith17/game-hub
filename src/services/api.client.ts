import axios from "axios";

export default axios.create({
baseURL: "https://api.rawg.io/api/",
params : {
 key : '0428bbac9ff54e579a800d20c2408538'
}
});