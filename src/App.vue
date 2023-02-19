<template>
  <div>
    <!--NAVBAR-->
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <router-link to="/" class="navbar-brand float-left">Work Test</router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item ">
            <router-link to="/" class="btn btn-outline-light">Create Info</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/view" class="btn btn-outline-light">View Info</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!--Router view-->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.navbar-brand{
    font-size: 1.25rem;
    font-weight: bold;
}
.btn{
    margin: 0px 5px;
    font-weight: bold;
}
</style>