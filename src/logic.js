

export const getTokenURL = () => {
    return window.location.hash.substring(1).split("&")
        .reduce((initial, item) => {
            let parts = item.split("=")
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial
        }, {})
} 



const EndPoint = "https://accounts.spotify.com/authorize";
const ClientID = "7c1bdea928fd4a1bb789643e95ed7e0c";
const RedirectURI = "http://localhost:3000";
const Scopes = [
"user-read-currently-playing",
"user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state"
];

export const LoginUrl = `${EndPoint}?client_id=${ClientID}&response_type=token&redirect_uri=${RedirectURI}&scope=${Scopes.join("%20")}&show_dialog=true`

