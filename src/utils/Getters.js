export const Getter = () => {
    return {
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user')??"{}"),
        headers: {
            "headers": {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        }
    }
}
