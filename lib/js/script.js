// Global Functions

function myfunction(id){
  return document.getElementById(id);
}

// We Set the time For the Function to work 
// otherwise it will send fetch request with every Keywords pressed

var searchTimeout;
function searchUserFromGithub(data) {
  // console.log(valueOf.value);
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    searchUserFromAPI(data.value);
  }, 1000);
}

// Now the main fetch function will automatically be called

function searchUserFromAPI(keyword) {
  console.log('Search for: ', keyword);
  fetch(`https://api.github.com/users/${keyword}`)
  .then((response) => { 
      return response.json();
    })
    .then((userInfo) => {
      console.log(`USER DATA :`, userInfo)

// Insert the Response we got to our main html where user can see 

    myfunction('userAvatar').src = userInfo.avatar_url;
    myfunction('name').value =         userInfo.name;
    myfunction('userName').value =     userInfo.login;
    myfunction('id').value =           userInfo.id;
    myfunction('type').value =         userInfo.type;
    myfunction('url').value =          userInfo.url;
    myfunction('bio').value =          userInfo.bio;
    myfunction('company').value =      userInfo.company;
    myfunction('followers').value =    userInfo.followers;
    myfunction('following').value =    userInfo.following;
    myfunction('hireable').value =     userInfo.hireable;
    myfunction('location').value =     userInfo.location;
    myfunction('public_repos').value = userInfo.public_repos;
    })
}






