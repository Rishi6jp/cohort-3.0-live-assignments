function greet(user: {
    name: string,
    age: number,
    address: {
        streetName: string,
        country: string,
    }
}) {
    console.log("hello " + user.name + "is " + user.age + " years old. who lives in " + user.address.streetName + " which is in " + user.address.country)
}



let user={
    name: "bhuvnesh",
    age: 19, 
    address: {
        streetName: "gali number 5",
        country: "india"
    }
}

greet(user);