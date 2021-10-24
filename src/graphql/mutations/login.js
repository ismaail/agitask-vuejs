export default `mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token_type
        access_token
        expires_in
    }
}`
