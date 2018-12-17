// import axios from 'axios'
// const API_URL = 'http://localhost:4000'
// const endpoint = `${API_URL}/graphql`
// const mutation = `
// mutation CreatePageView($page: String) {
//   createPageView(page: $page) {
//     id,
//     page,
//     insertedAt
//   }
// }
// `

// export function pageView(page) {
//   const body = {
//     query: mutation,
//     variables: {
//       page
//     }
//   }

//   axios.post(endpoint, body)
// }

// const query = `
// query GetAllPageViews {
//   pageViews {
//     id,
//     page,
//     insertedAt
//   }
// }
// `

// export function getAllPageViews() {
//   const body = {
//     query
//   }

//   return axios.post(endpoint, body).then(x => x.data.data.pageViews)
// }

export function pageView(path: string) {
  console.log(path)
}
