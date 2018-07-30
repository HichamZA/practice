console.log('Script loaded !!!');


/*
 {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
*/



axios.post('https://jsonplaceholder.typicode.com/users', {
	"name": "Hicham Graham",
	"username": "HICHAM",
	"email": "Sincere@april.biz",
	"address": {
		"street": "Kulas Light",
		"suite": "Apt. 556",
		"city": "Gwenborough",
		"zipcode": "92998-3874",
		"geo": {
			"lat": "-37.3159",
			"lng": "81.1496"
		}
	},
	"phone": "1-770-736-8031 x56442",
	"website": "hildegard.org",
	"company": {
		"name": "Romaguera-Crona",
		"catchPhrase": "Multi-layered client-server neural-net",
		"bs": "harness real-time e-markets"
	}
}, )
	.then(function (createResponse) {

		const ID = createResponse.data.id;

		axios.put(`https://jsonplaceholder.typicode.com/users/${10}`, { name: 'Younes' })
			.then(function (patchResponse) {
				debugger
			})
			.catch(function (error) {
				console.log(error);
			});

		// const users = response.data.map(function (user) {
		// 	return `<div class="user"><p class="name">${user.name} <span class="contacts">(${user.email} / ${user.phone})<span></p></div>`;
		// })

		// document.getElementById('users').innerHTML = users.join('');
	})
	.catch(function (error) {
		console.log(error);
	});


// axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(function (response) {

//         const users = response.data.map(function (user) {
//             return `<div class="user"><p class="name">${user.name} <span class="contacts">(${user.email} / ${user.phone})<span></p></div>`;
//         })

//         document.getElementById('users').innerHTML = users.join('');
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

console.log('Just to explain the async tasks');