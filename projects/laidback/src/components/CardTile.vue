<template>
  <div class="col-sm-12 col-md-6">
    <div class="card">
      <h5 class="card-header text-white bg-danger">Featured</h5>

      <img class="card-img-top" src="" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title" >Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
      </div>
      <ul class="list-group list-group-flush text-center">
        <li class="list-group-item ">Cras justo odio</li>
        <li class="list-group-item ">Dapibus ac facilisis in</li>
        <li class="list-group-item ">Vestibulum at eros</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped>
.list-group-item:hover{
  background: aquamarine;
  cursor: pointer;
  color: blue;
  text-decoration: underline;
  border-radius: 5px;
}
</style>
