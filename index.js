function sum(x, y) {

    try {
         //check data types first and throw error
        if (typeof x === "number" && typeof y === "number") {
            return x + y;
    }
    throw new Error('Must Enter a Number');
    }
    catch (e) {
        console.error(e);
    }
}


//console.log(sum(1, 2));
//console.log(sum('a', 1));
//console.log(sum(1, 'e'));
//console.log(sum('e', 'o'));


var user = { username: "sam", password: "123abc" };
function login(username, password) {
  //check credentials
  try {
    if (user.username === "sam" && user.password === "123abc") {
        return "Login Successful!";
    }
    throw new Error("Invalid Credentials!")
  }
  catch (e) {
    console.error(e);
  }
}

//console.log(login("sam", "123abc"));
//console.log(login("sunny", "123abc"));
//console.log(login("sam", "124acb"));
