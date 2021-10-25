export default `query ($limit: Int, $archived: Boolean) {
  boards(limit: $limit, archived: $archived) {
    data {
      id
      name
      archived
      members {
        username
        email
        membership
      }
    }
    total
  }
}
`
