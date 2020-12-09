// GET REQUEST
function getTodos() {
    // axios({
    //     method:"get",
    //     url:"https://jsonplaceholder.typicode.com/posts",
    //     params : {
    //         _limit:5
    //     }
    // })
    // .then(res=>showOutput(res))
    // .catch(err=>console.error(err))
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then(res=>showOutput(res))
    .catch(err=>console.error(err))

  }
  
  // POST REQUEST
  function addTodo() {
    // axios({
    //     method:'post',
    //     url:'https://jsonplaceholder.typicode.com/posts',
    //     data:{
    //         title:"New Todo",
    //         completed:false
    //     }
    // })
    // .then(res=>showOutput(res))
    // .catch(err=>console.error(err))

    axios.post("https://jsonplaceholder.typicode.com/posts",{
        title:"New Todo",
        completed: false
    })
    .then(res=>showOutput(res))
    .catch(err=>console.error(err))
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
 axios.put("https://jsonplaceholder.typicode.com/posts/11",{
     title:"Update Todo Done",
     completed:true
 })
 .then(res=>showOutput(res))
 .catch(err=>console.error(err))
  }
  
  // DELETE REQUEST
  function removeTodo() {
axios({
    method:"delete",
    url:"https://jsonplaceholder.typicode.com/posts/11"
})
.then(res=>showOutput(res))
.catch(err=>console.error(err))
  }
  
  // SIMULTANEOUS DATA
  function getData() {
axios.all([
  axios.get("https://jsonplaceholder.typicode.com/todos"),
  axios.get("https://jsonplaceholder.typicode.com/posts")
])
.then(axios.spread((todos,posts) => showOutput(todos)))
.catch(erro => Console.error(erro))
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    console.log('Custom Headers');
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    console.log('Transform Response');
  }
  
  // ERROR HANDLING
  function errorHandling() {
    console.log('Error Handling');
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    console.log('Cancel Token');
  }
  
axios.interceptors.request.use(config => {
  const today = Date.now();
console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`)
console.log(new Intl.DateTimeFormat('en-US', 
{
  year:'numeric', month:'2-digit',
day: '2-digit', 
hour: '2-digit', minute: '2-digit',
 second: '2-digit'}).format(today));
return config;
}, 
error => {return Promise.reject(error)
}
  )

  // INTERCEPTING REQUESTS & RESPONSES
  
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document.getElementById('transform').addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);
  