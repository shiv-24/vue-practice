<template>
        <div>
          <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src="../assets/pie.png" width="30" height="30" class="d-inline-block align-top" alt="">
                        Bethany's Pie Shop</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/spies">Pies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/order">Order</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
          <div class="jumbotron jumbotron-detail-apple-pie">
            <div class="container">
              <h1 class="display-3 text-white">
                  Apple Pie
              </h1>
            </div>
          </div>
          <b-container>
            <h1 class="display-4">Apple pie
                <small class="text-muted">Our famous, number-one selling pie.</small>
            </h1>
            
            <div class="row">
                <div class="col-md-8 col-sm-4">
                    <img src="../assets/products/applepie.jpg" class="rounded-lg img-fluid" alt="Image of apple pie">
                    <!-- thelwlkds -->
                </div>

                <div class="col-md-4 col-sm-8">
                    <h3 class="mb-3 text-capitalize">About this pie</h3>
                    <p class="text-justify">Sweet ice cream jelly beans lemon drops. Pastry toffee fruitcake gingerbread jelly-o.
                        Lollipop sesame snaps muffin. Macaroon halvah marshmallow sesame snaps sugar plum dragée.
                        <mark>Wafer pudding sesame snaps tootsie roll</mark> sesame snaps cake chupa chups jelly beans.</p>
                    <h3 class="my-3">Ingredients</h3>
                    <ul>
                        <li>Apple</li>
                        <li>Sugar</li>
                        <li>Eggs</li>
                        <li>Milk</li>
                    </ul>
                    <div class="row my-5">
                        <div class="col-md-4">
                            <strong>$14.95</strong>
                        </div>
                        <div class="col-md-8">
                            <a type="button" href="shoppingbasket.html" class="btn btn-success float-right">
                                Add to basket
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="table-responsive">
                  <table class="table table-striped table-hover table-bordered">
                      <!--table-dark table-hover table-bordered table-responsive  -->
                      <thead>
                          <!-- class="thead-light"-->
                          <tr>
                              <th scope="col">Ingredient</th>
                              <th scope="col">Risk</th>
                              <th scope="col">Percentage</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>Apple</td>
                              <td>Yes</td>
                              <td>50%</td>
                          </tr>
                          <tr>
                              <td>Eggs</td>
                              <td>Yes</td>
                              <td>10%</td>
                          </tr>
                          <tr>
                              <td>Nuts</td>
                              <td>Maybe</td>
                              <td>&lt;0.1%</td>
                          </tr>
                      </tbody>
                  </table>
                </div>
            </div>

            <br/>
            <h3 class="display-5">
              Other Customers also bought...
            </h3>
            <div class="row my-4">
                <div class="col-md-3 col-sm-6">
                    <a href="/">
                    <img src="../assets/products/strawberrypiesmall.jpg" class="rounded img-fluid" alt="Image of apple pie">
                    </a>
                </div>
                <div class="col-md-3 col-sm-6">
                    <a href="/">
                      <img src="../assets/products/rhubarbpiesmall.jpg" class="rounded img-fluid" alt="Image of apple pie">
                    </a>
                </div>
                <div class="col-md-3 col-sm-6">
                    <a href="/">
                      <img src="../assets/products/peachpiesmall.jpg" class="rounded img-fluid" alt="Image of apple pie">
                    </a>
                </div>
                <div class="col-md-3 col-sm-6">
                    <a href="/">
                      <img src="../assets/products/cranberrypiesmall.jpg" class="rounded img-fluid" alt="Image of apple pie">
                    </a>
                </div>
            </div>
           </b-container> 
            <!-- <div  class="row">
              <div class="col-md-8">
                There?
              </div>  
              <div class="col-md-2">
                
              </div>
              <div class="col-md-2">
                Again??
              </div>  
            </div> -->
        </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
