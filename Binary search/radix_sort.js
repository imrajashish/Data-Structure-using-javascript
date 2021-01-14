function table(n){
    for(var i=1; i<=n; i++){
        for(var j=i-1; j<n; j--){
            console.log("x".repeat(n))
        }
    }
}
console.log(table(10))