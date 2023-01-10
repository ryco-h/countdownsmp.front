export async function fetchData() {

   const url = 'https://countdownsmp.as.r.appspot.com'
   // const url = 'http://localhost:5000'
   
   const res = await fetch(`${url}/data`).then((response) => {
      if (response.ok) {
         return response.json();
      }
      throw new Error('Something went wrong');
   })
   .then((responseJson) => {
      return responseJson
   })
   .catch((error) => {
      return error
   });

   return res
}