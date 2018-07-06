saveTheRhinoApp.controller('shoppingCart_controller', ['$scope', '$location', function ($scope, $location) {
    // -------------------
    // shopping cart array
    // -------------------
    //cart array where items are stored via teh addUp function below
    $scope.cart = [];

    // -------------------
    //// itemsInCart variable - number of items in shopping cart
    // -------------------
    // initial number of items in the shopping car set to 0
    $scope.itemsInCart = 0;

    // -------------------
    // addItem function - adds items to shopping cart array
    // -------------------
    // add up function called on click of price of search result
    // price and song from search results are pushed ot the cart array as an object
    // 1 is added to the total of items in the shopping cart

    $scope.addItem = function (event, price, item) {
        $scope.cart.unshift({
            song: item,
            price: price,
        });
        $scope.itemsInCart++;
    };
    // -------------------
    // removeItem function - removes item from shopping cart array
    // -------------------
    //removeItem function is called on click of remove button in shpping cart
    // $index parameter is passed which is the index of the item in the ng-repeat
    // item removed from cart using splice method
    // items incart value reduced by 1 when item removed

    $scope.removeItem = function ($index) {
        $scope.cart.splice($index, 1);
        $scope.itemsInCart--;
    };
    // -------------------
    // clearCart function - removes all items from the cart
    // -------------------
    // called when when clear cart button is clicked
    // clear cart function removes all entries to the cart array
    $scope.clearCart = function () {

        $scope.cart = [];
        $scope.itemsInCart = 0;
    };

    // -------------------
    // getTotal function - adds total value of all items within shopping cart array
    // -------------------
    //
    // funciton calculates total cost of everything in the shopping cart
    $scope.getTotal = function () {
        var total = 0;
        for (var i = 0; i < $scope.cart.length; i++) {
            var product = $scope.cart[i];
            total += parseFloat(product.price);
        }
        return total.toFixed(2);
    };

    $scope.go = function (path) {
        $location.path(path);
    };

    // -------------------
    // vouchers array - storing details of the vouchers available for purchase  
    // -------------------
    //
    // array of objects shown using ng-repeat in vouchers.htnl
    //the vouchers are generated dynamically from the array
    // allowing for aditional vouchers to be added easily
    $scope.vouchers = [{
        name: "£5",
        cost: 5,
        description: "£5 itunes voucher code"
    },{
        name: "£10",
        cost: 10,
        description: "£10 itunes voucher code"
    },{
        name: "£15",
        cost: 15,
        description: "£15 itunes voucher code"
    }, {
        name: "£20",
        cost: 20,
        description: "£20 itunes voucher code"
    }, {
        name: "£50",
        cost: 50,
        description: "£50 itunes voucher code"
    }, {
        name: "£100",
        cost: 100,
        description: "£100 itunes voucher code"
    }];

    // -------------------
    // hide / show cart function
    // -------------------
    // ng-clicks call the function with value passes in as a parameter
    // states where the hide cart value should be tre or false
    // ng-hide withing shoppingCart.html shows or hides the shopping cart

    $scope.hideCart = true;

    $scope.showCart = function (value) {
        $scope.hideCart = value;
    };

   

	$scope.viewMenu = true;

	$scope.toggleMenu = function (value) {
		$scope.viewMenu = value;
	};
	
	

}]);