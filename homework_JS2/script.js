let clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = fibonacci(clicks);
    document.getElementById("fib").innerHTML = clicks;
    function fibonacci(n) {
      if(n <= 1) {
        return n
      }
      else {
        return fibonacci(n - 1) + fibonacci(n - 2);
      }
    }
  }
    


