<template>
        <div>
              <!-- <header>
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
          <b-container>
                <div class="row py-4">
                <div class="col-md-4">
                    <img width="175" height="175" src="../assets/products/christmasapplepiesmallsquare.jpg" class="rounded img-fluid">
                    <h2>Christmas apple pie</h2>
                    <p>Happy holidays with this pie!</p>
                    <p><a class="btn btn-primary" href="/" role="button">View details</a></p>
                </div>
                <div class="col-md-4">
                    <img width="175" height="175" src="../assets/products/cranberrypiesmallsquare.jpg" class="rounded img-fluid">
                    <h2>Cranberry pie</h2>
                    <p>A Christmas favorite</p>
                    <p><a class="btn btn-primary" href="/" role="button">View details</a></p>
                </div>
                <div class="col-md-4">
                    <img width="175" height="175" src="../assets/products/pumpkinpiesmallsquare.jpg" class="rounded img-fluid">
                    <h2>Pumpkin pie</h2>
                    <p>Our Halloween favorite</p>
                    <p><a class="btn btn-primary" href="/" role="button">View details</a></p>
                </div>
            </div>
          </b-container> -->
          <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>
        </div>      
</template>   
<script>
export default {
    name: 'SeasonalPies'
}
</script>           